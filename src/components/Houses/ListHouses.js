import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import "./ListHouses.css";

const ListHouses = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
    props.changePage(page);
  };

  return (
    <div className="list-houses">
      {props.houses.data && props.houses.data.length > 0 ? (
        <>
          <div className="list-houses-container">
            {props.houses.data &&
              props.houses.data.map((house) => (
                <Link
                  to={`/house/${house.id}`}
                  style={{ color: "rgba(0,0,0,0.8)" }}
                  key={house.id}
                >
                  <Card className={"house-card"} house={house} />
                </Link>
              ))}
          </div>
          <div className="pagination">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={props.houses.count}
              pageSize={props.houses.allPages}
              onPageChange={(page) => changeCurrentPage(page)}
            />
          </div>
        </>
      ) : (
        <h2>No Data</h2>
      )}
    </div>
  );
};

export default ListHouses;

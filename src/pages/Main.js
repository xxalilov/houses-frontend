import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ListHouses from "../components/Houses/ListHouses";
import Map from "../components/Map/Map";
import useRequest from "../hooks/use-request";
import "./Main.css";

const Main = () => {
  const [isMap, setIsMap] = useState(false);
  const [houses, setHouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();

  const { doRequest, errors, loading } = useRequest({
    url: `/house?${
      "search=" + location.search.slice(8)
    }&limit=7&page=${currentPage}`,
    method: "get",
    onSuccess: (data) => {
      setHouses(data);
    },
  });

  useEffect(() => {
    setCurrentPage(currentPage);
    getDatasFomApi();
  }, [currentPage, location]);

  const getDatasFomApi = async () => {
    await doRequest();
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`main ${isMap && "open-map"}`}>
      <div className="map">
        <Map houses={houses.data} select={false} />
      </div>
      <div className="content">
        <ListHouses houses={houses} changePage={changePage} />
      </div>
      <div className="change-button">
        <button onClick={() => setIsMap(!isMap)}>
          {!isMap ? "Map" : "List"}
        </button>
      </div>
    </div>
  );
};

export default Main;

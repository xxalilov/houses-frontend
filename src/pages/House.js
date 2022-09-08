import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";
import useRequest from "../hooks/use-request";
import "./House.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const House = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const authCtx = useContext(AuthContext);

  const { doRequest, errors } = useRequest({
    url: "/auth/currentuser",
    method: "get",
    body: {},
    headers: {
      Authorization: `Bearer ${authCtx.token}`,
    },
    onSuccess: (data) => {
      setIsAdmin(data.data.isAdmin);
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  const deleteHouse = async () => {
    try {
      await axios.delete(
        `https://xalilov-project.online/api/v1/house/${location.pathname.slice(
          7
        )}`,
        {
          headers: {
            Authorization: `Bearer ${authCtx.token}`,
          },
        }
      );

      navigate("/");
    } catch (error) {
      console.log(errors);
    }
  };

  return (
    <div className="house-container">
      <div className="house-image">
        <img src="/no-photo.jpg" />
      </div>
      <div className="house-detailes">
        <h3>Price: 100000</h3>
        <h3>Address: Toshkent</h3>
        <h3>
          Area: 100 m<sup>2</sup>
        </h3>
        <h3>lat: 12.000000000</h3>
        <h3>lng: 13.456765</h3>
      </div>
      {isAdmin && (
        <div className="admin-area">
          <button onClick={deleteHouse}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default House;

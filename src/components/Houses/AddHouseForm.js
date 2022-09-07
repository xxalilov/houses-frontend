import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/use-request";
import AuthContext from "../../store/auth-context";
import "./AddHouseForm.css";

const AddHouseForm = (props) => {
  const addressRef = useRef();
  const priceRef = useRef();
  const areaRef = useRef();
  const latRef = useRef();
  const lngRef = useRef();
  const [image, setImage] = useState();

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  const formData = new FormData();

  const { doRequest, errors } = useRequest({
    url: "/house",
    method: "post",
    body: formData,
    headers: {
      Authorization: `Bearer ${authCtx.token}`,
      "Content-Type": "multipart/form-data",
    },
    onSuccess: (data) => {
      addressRef.current.value = "";
      priceRef.current.value = "";
      areaRef.current.value = "";
      latRef.current.value = "";
      lngRef.current.value = "";
      setImage(null);
      navigate(`/house/${data.data.id}`);
    },
  });

  useEffect(() => {
    if (props.location) {
      latRef.current.value = props.location.lat;
      lngRef.current.value = props.location.lng;
    }
  }, [props.location]);

  const onSubmitData = async (e) => {
    e.preventDefault();
    formData.append("address", addressRef.current.value);
    formData.append("price", priceRef.current.value);
    formData.append("area", areaRef.current.value);
    formData.append("image", image);
    formData.append("lat", Number(props.location.lat));
    formData.append("lng", Number(props.location.lng));
    await doRequest();
    console.log(errors);
  };

  return (
    <div className="add-house-form">
      <form className="form" onSubmit={onSubmitData}>
        <div className="label">
          <label>address</label>
          <input type={"text"} ref={addressRef} />
        </div>
        <div className="label">
          <label>price</label>
          <input type={"text"} ref={priceRef} />
        </div>
        <div className="label">
          <label>Area in square meters</label>
          <input type={"number"} ref={areaRef} />
        </div>
        <div className="label">
          <label>image</label>
          <input type={"file"} onChange={(e) => setImage(e.target.files[0])} />
        </div>

        <br />
        <p>You must choose location from map!</p>
        <div className="location">
          <div className="label">
            <label>lat</label>
            <input type={"text"} ref={latRef} />
          </div>
          <div className="label">
            <label>lng</label>
            <input type={"text"} ref={lngRef} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHouseForm;

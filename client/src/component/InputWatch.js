import React, { Fragment, useState } from "react";

const InputWatch = () => {
  const [watch_serial, setWatchSerial] = useState("");
  const [year_created, setYear] = useState("");
  const [water_resit, setResit] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [review, setReview] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        watch_serial,
        year_created,
        water_resit,
        color,
        size,
        quantity,
        review,
        model,
        brand,
      };
      const response = await fetch("http://localhost:5000/watchstore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Watch Store</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <label for="serial">First name:</label>
        <input
          type="text"
          className="form-control"
          value={watch_serial}
          name="serial"
          onChange={(e) => setWatchSerial(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          value={year_created}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={water_resit}
          onChange={(e) => setResit(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputWatch;

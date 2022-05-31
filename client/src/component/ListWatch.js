import React, { Fragment, useState, useEffect } from "react";

import EditWatch from "./EditWatch";

const ListWatch = () => {
  const [watches, setWatches] = useState([]);

  //delete

  const deleteWatch = async (id) => {
    try {
      const deleteWatch = await fetch(
        `http://localhost:5000/watchstore/${id}`,
        {
          method: "DELETE",
        }
      );
      setWatches(watches.filter((watch) => watch.watch_serial !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getWatches = async () => {
    try {
      const response = await fetch("http://localhost:5000/watchstore");
      const jsonData = await response.json();
      setWatches(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getWatches();
  }, []);
  return (
    <Fragment>
      {" "}
      <table class="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Watch_serial</th>
            <th>Model</th>
            <th>Brand</th>
            <th>Year Created</th>
            <th>Water Resitance</th>
            <th>Color</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Review</th>

            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr> */}
          {watches.map((watch) => (
            <tr key={watch.watch_serial}>
              <th>{watch.watch_serial}</th>
              <th>{watch.model}</th>
              <th>{watch.brand}</th>
              <th>{watch.year_created}</th>
              <th>{watch.water_resit}</th>
              <td>{watch.color}</td>
              <th>{watch.size}</th>
              <th>{watch.quantity}</th>
              <th>{watch.review}</th>

              <td>
                <EditWatch watch={watch} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteWatch(watch.watch_serial)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListWatch;

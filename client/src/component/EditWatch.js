import React, { Fragment, useState, useEffect } from "react";

const EditWatch = ({ watch }) => {
  //   const [color, setColor] = useState(watch.color);
  const [watch_serial, setWatchSerial] = useState(watch.watch_serial);
  const [year_created, setYear] = useState(watch.year_created);
  const [water_resit, setResit] = useState(watch.water_resit);
  const [color, setColor] = useState(watch.color);
  const [size, setSize] = useState(watch.size);
  const [quantity, setQuantity] = useState(watch.quantity);
  const [review, setReview] = useState(watch.review);
  const [model, setModel] = useState(watch.model);
  const [brand, setBrand] = useState(watch.brand);
  //   console.log(watch);

  //edit color
  const updateColor = async (e) => {
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
      const response = await fetch(
        `http://localhost:5000/watchstore/${watch.watch_serial}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${watch.watch_serial}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${watch.watch_serial}`}
        onClick={() => setColor(watch.color)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit watch</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setColor(watch.color)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={watch_serial}
                onChange={(e) => setColor(e.target.value)}
              />{" "}
              <br />
              <input
                type="text"
                className="form-control"
                value={year_created}
                onChange={(e) => setColor(e.target.value)}
              />{" "}
              <br />
              <input
                type="text"
                className="form-control"
                value={water_resit}
                onChange={(e) => setColor(e.target.value)}
              />{" "}
              <br />
              <input
                type="text"
                className="form-control"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />{" "}
              <br />
              <input
                type="text"
                className="form-control"
                value={size}
                onChange={(e) => setColor(e.target.value)}
              />{" "}
              <br />
              <input
                type="text"
                className="form-control"
                value={quantity}
                onChange={(e) => setColor(e.target.value)}
              />{" "}
              <br />
              {/* <input
                type="text"
                className="form-control"
                value={review}
                onChange={(e) => setColor(e.target.value)}
              />{" "}
              <br /> */}
              <input
                type="text"
                className="form-control"
                value={model}
                onChange={(e) => setColor(e.target.value)}
              />{" "}
              <br />
              <input
                type="text"
                className="form-control"
                value={brand}
                onChange={(e) => setColor(e.target.value)}
              />{" "}
              <br />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateColor(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setColor(watch.color)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default EditWatch;

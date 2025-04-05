import React from "react";

import { CiFilter } from "react-icons/ci";

const PriceFilter = () => {
  return (
    <div className="filterBox p-4 border rounded-3 bg-white shadow">
      <h4 className="heading-underline mb-4">Filter</h4>
      <div className="mb-3">
        <label for="customRange1" className="form-label fw-semibold">
          Price range
        </label>
        <input type="range" min="0" max="5" className="form-range" id="customRange1" />
      </div>

      <ul className="ps-1 list-unstyled">
        <h6 className="fw-semibold">Color</h6>
        <li className="mb-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Red"
              id="red"
            />
            <label className="form-check-label" for="red">
              Red {"(56)"}
            </label>
          </div>
        </li>
        <li className="mb-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="green"
              id="green"
              checked
            />
            <label className="form-check-label" for="green">
              Green {"(26)"}
            </label>
          </div>
        </li>
        <li className="mb-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="blue"
              id="blue"
            />
            <label className="form-check-label" for="blue">
              Blue {"(43)"}
            </label>
          </div>
        </li>
      </ul>

      <ul className="ps-1 list-unstyled mb-0">
        <h6 className="fw-semibold">Item Condition</h6>
        <li className="mb-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="new"
              id="new"
            />
            <label className="form-check-label" for="new">
              New {"(56)"}
            </label>
          </div>
        </li>
        <li className="mb-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="refurbished"
              id="refurbished"
              checked
            />
            <label className="form-check-label" for="refurbished">
              Refurbished {"(26)"}
            </label>
          </div>
        </li>
        <li className="mb-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="used"
              id="used"
            />
            <label className="form-check-label" for="used">
              Used {"(43)"}
            </label>
          </div>
        </li>
      </ul> 
      <button className="smallBtn"><CiFilter /> Filter</button>
    </div>
  );
};

export default PriceFilter;

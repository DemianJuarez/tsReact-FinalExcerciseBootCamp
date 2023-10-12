import { useContext } from "react";
import "./Filter.css";
import { FilterCategory, ShopContext } from "../context/ShopContext";
export const Filter = () => {
  const { filter, setFilter, min, setMin, max, setMax } =
    useContext(ShopContext);

  return (
    <aside className="aside-container">
      <div className="general-container">
        <div className="filter-title">
          <p>Filters</p>
        </div>
        <div className="name-desc-brand">
          <div className="divNameDescriptionBrand">
            <label htmlFor="input" className="inputNameDescriptionBrand">
              Name Description Brand
            </label>
          </div>
          <input type="text" name="input" id="input-name-desc-brand" />
        </div>
        <div className="inputs-range">
          <div className="input-r1">
            <span className="spans">Min Price</span>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
            <span>{min}</span>
          </div>
          <div className="input-r2">
            <span className="spans">Max price</span>
            <input
              type="range"
              min="0"
              max="30"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
            <span>{max}</span>
          </div>
        </div>
        <div className="categories">
          <span className="spans">Categories</span>
          <select
            id="categories-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value as FilterCategory)}
          >
            <option value="all">All</option>
            <option value="smartphones">Smartphone</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home-Decoration</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

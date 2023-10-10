import "./Filter.css"
export const Filter = () => {
  return (
    <aside>
        <div className="general-container">
        <div className='filter-title'>
            <p>Filters</p>
        </div>
        <div className="name-desc">
            <span>Name Description Brand</span>
            <input type="text" />
        </div>
        <div className='inputs-range'>
            <div className='input-r1'>
            <span>Min Price</span>
            <input type="range" min='0' max='30' value={}/>
            </div>
            <div className='input-r2'>
            <span>Max price</span>
            <input type="range" min="0" max="30"/>
            </div>    
        </div>
        <div className='categories'>
            <span>Categories</span>
            <select  id="categories-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
        </div>
    </aside>
  )
}

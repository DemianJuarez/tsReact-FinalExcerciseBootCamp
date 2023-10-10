import './Card.css'
import { Button } from './Button'


function Card() {


    return (

        <div className="card">
            <div className="product-image-div">
                <div className="product-image">
                    <img src="https://static01.nyt.com/images/2023/09/15/multimedia/15UK-DOGS-01-hftk/15UK-DOGS-01-hftk-superJumbo.jpg" alt="" className="image" />
                </div>
            </div>
            <div className="product-description">
                <p className="product-name">Product Name</p>
                <p className="product-price">Price with discount</p>
                <p className="product-stock">Stock</p>
            </div>
            <div className='buttons-div'>
                <Button text='Whishlist' />
                <Button text='Cart' />
            </div>


        </div>

    )

}


export { Card }
import React, { useState } from 'react'
import css from "./Porduct.module.css"
import Plan from "../../assets/plane.png"

import {ProductsData} from "../../data/products"
const Product = () => {
    const [MenuPorduct, setMenuPorduct] = useState(ProductsData)
    const filter = (type) => {
        setMenuPorduct(ProductsData.filter((product)=> product.type === type))
    }
  return (
    <div className={css.cotnainer}>
        <img src={Plan} alt="" />
        <span>Our Feature Products</span>

        <div className={css.products}>
            <ul className={css.menu}>
                <li>All</li>
                <li onClick={()=>filter('skin care')}>Skin care</li>
                <li onClick={()=>filter('conditioner')}>Conditionars</li>
                <li onClick={()=>filter('foundation')}>Foundations</li>
            </ul>

            <div className={css.list}>
            {
                MenuPorduct.map((product, i)=> (
                    <div className={css.product_container}>
                        <div className={css.prod_left}>
                            <span>{product.name}</span>
                            <span>{product.detail}</span>
                            <span>{product.price}</span>
                        </div>
                        <div className={css.prod_right}>
                            <img src= {product.img} alt="" className= {css.product_img} />
                        </div>
                    </div>
                    
                ))
            }
        </div> 
        </div>

        
    </div>
  )
}

export default Product

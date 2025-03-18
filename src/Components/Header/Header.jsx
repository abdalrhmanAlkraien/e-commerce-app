import React from 'react'
import css from './Header.module.css'
import logo from "../../assets/logo.png"
import { CiShoppingBasket } from "react-icons/ci";


const Header = () => {
  return (
    <div className={css.header}>
        <div className={css.left}>
            <img src= {logo} alt="" className={css.logo} />
            <span>amazon</span>
        </div>

        <div className={css.right}>
            <div className={css.menu}>
                <ul>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div>

            <form action="" className={css.form_input}>
                    <input type="email" placeholder='Search'/>
                </form>

                <CiShoppingBasket className={css.shop_icon}/>
        </div>
    </div>
  )
}

export default Header

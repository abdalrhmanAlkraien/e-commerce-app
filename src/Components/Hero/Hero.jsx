import React from 'react'
import  css from './Hero.module.css'
import Hero_img from '../../assets/hero.png'
import { FaShoppingBag } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={css.hero_container}>

      <div className={css.left}>

      <span className={css.text1}>Skin Protiction Cream</span>


        <div className={css.text2}>
          <span>Trendy Collection</span>

          <span>
            {""}
            Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.
          </span>

        </div>
      </div>

      <div className={css.middle}>

        <div className={css.blueCircle}></div>
        <img src={Hero_img} alt="" />
        <div className={css.cart}>
        <FaShoppingBag className={css.item1}/>
        
        <div className={css.signup}>
          <span>Best Signup offers</span>
          <BsArrowRight />
        </div>
        
        </div>
      </div>
      <div className={css.right}>
        <div className={css.trrafic}>
          <span>1.5m</span>
          <span>Monthly traffic</span>
        </div>
        <div className={css.happy_customer}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  )
}

export default Hero

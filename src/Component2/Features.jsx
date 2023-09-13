import React from 'react'
import features1 from '../images/features/f1.png'
import features2 from '../images/features/f2.png'
import features3 from '../images/features/f3.png'
import features4 from '../images/features/f4.png'
import features5 from '../images/features/f5.png'
import features6 from '../images/features/f6.png'
import './Features.css'
export default function Features() {
  return ( 
    <section className="features" id="features">
      <div className="features1">
        <img src={features1} alt="" />
        <h6 id='h6'>Free Shipping</h6>
      </div>

      <div className="features2">
      <img src={features2} alt="" />
        <h6 id='h6'>Online Order</h6>
      </div>

      <div className="features3">
      <img src={features3} alt="" />
        <h6 id='h6'>Save Money</h6>
      </div>

      <div className="features4">
      <img src={features4} alt="" />
        <h6 id='h6'>Promotions</h6>
      </div>

      <div className="features5">
      <img src={features5} alt="" />
        <h6 id='h6'>Happy Sell</h6>
      </div>
      <div className="features6">        
      <img src={features6} alt="" />
        <h6 id='h6'>F24*7 Support</h6>
      </div>
    </section>
  )
}

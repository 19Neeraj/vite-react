import React from 'react'
import './SubBanner.css'
export default function SubBanner() {
  return (
    <section className="sub-banner" id="sub-banner">
       <div className="row1" id="row1">
        <div className="sub1" id="sub1">
          <div>
            <h4> Crazy Deals</h4>
            <h2>Buy 2 get 1 free </h2>
            <p>The best classic dresses <br className='br' /> are on sale at Cara</p>
          </div>
            <button className="button-55" role="button">Learn More</button>
        </div>
        <div className="sub2" id="sub2">
         <div>
            <h4>Sring | Summer </h4>
            <h2> Season is Coming-Up </h2>
            <p>The best outfits are on at Cara</p>
          </div>
          <button className="button-55" role="button">Collection</button>
       </div>
     </div>
       <div className="row2" id="row2">
        <div className="sub3" id="sub3">
            <h4>Seasonal Sale</h4>
            <h6>Winter Collection 50% Off</h6>
        </div>
        <div className="sub4" id="sub4">
            <h4>New Foot Wear Collection</h4>
            <h6>Summer | Winter | 2024</h6>            
        </div>
        <div className="sub5" id="sub5">
            <h4>T-shirts | Shirts</h4>
            <h6>In Trend Prints</h6>
        </div>        
       </div>
    </section>
  )
}

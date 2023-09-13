import React from 'react'
import './Home.css'
import Features from '../Component2/Features'
import Products from '../Component3/Products'
import Banner from '../Component4/Banner'
import NewArrivals from '../Component5/NewArrivals'
import SubBanner from '../Component6/SubBanner'
import NewsLetter from '../Component7/NewsLetter'
import Footer from '../Component8/Footer'
export default function Home() {
  return ( 
    <> 
    <section className="home" id="home"> 
        <h4>Trade-In-Offer</h4>
        <h2>Welcome To </h2>
        <h1>yadav Fashion point</h1>
        <p>Save More With Coupons and  <br id='brhome'/> Up-to  <strong> 30% Off</strong> </p>
        <button className='shopnow'>Shop Now</button>
    </section>
    <Features />
    <Products />
    <Banner />
    <NewArrivals />
    <SubBanner />
    <NewsLetter />    
    <Footer />
    </>
  )
}

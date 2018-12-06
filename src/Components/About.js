import React from "react";
import "../ComponentStyles/About.css";
import LazyLoad from "react-lazyload";
import Reviews from "./Reviews";
import { Link  } from "react-router-dom";

const About = () => {
    return(
        <div className="show-off">
        <LazyLoad  height = {650} once throttle= {400} >
            <div className="about-us1">
                <div className="bait-img1"></div>
                <div className="text-1">
                    <h2>ABOUT US</h2>
                    <h4><i>Professional Chefs Recipe</i></h4>
                    <p>Relitz® is one of America’s greatest food recipe companies, partnering with approximately 25,000 restaurants and foodservice operators to create a perfect recipe that helps increasing user appeties. With nearly 10,000 employees operate with others restaurants' chefs, we guarantee our customers with a broad, innovative recipe and maximize customers's food satisfaction.</p>
                    <button><Link to = "/foodblogs" style={{textDecoration: "none", color: "black"}}>FIND RECIPES</Link></button>
                </div>
            </div>
            </LazyLoad>
            <div className="fruit">
                <h3>Delicious Foods</h3>
                <h1>RECIPES FROM TOP CHEFS</h1>
                <button><Link to = "/foodblogs" style={{textDecoration: "none", color: "white"}}>READ MORE</Link></button>
            </div>
            <LazyLoad height = {650} once throttle = {400} >
            <div className="about-us2">
                <div className="bait-img2"></div>
                <div className="text-2">
                    <h2>RECIPES</h2>
                    <h4><i>Real Chefs Recipe</i></h4>
                    <p>With over 10,000 chefs, we're proudly to say that our recipes blog are unique. Comes to it our extraodinary chefs will describe the recipe in the precisest and easiest way step by steps that customers can use it in the right way. Includes of it is a visualization to determine the calories of foods.</p>
                    <button><Link to = "/foodblogs" style={{textDecoration: "none", color: "black"}}>VIEW</Link></button>
                </div>
            </div>
            </LazyLoad>
            <div className="fruit2">
                <h3>Calories Visualization</h3>
                <h1>GET RECIPES AT THE CALORIES YOU WANT</h1>
                <button><Link to = "/calories" style={{textDecoration: "none", color: "white"}}>TAKE A LOOK</Link></button>
            </div>
            <Reviews />
        </div>
    )
}


export default About;
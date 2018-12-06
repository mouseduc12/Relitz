import React from "react";
import "../ComponentStyles/Food.css"
import LazyLoad from "react-lazyload";

const Food = (props) => {
    const generateClass = () => {
        let mathRandom = Math.floor(Math.random() * 200)
        if (mathRandom % 5 === 0) {
            return "buzz"
        }
        else if (mathRandom % 3 === 0) {
            return "fizz";
        } else {
            return "even"
        }
    }
    return (
        <LazyLoad height={300} once throttle={400}>
                <div className={generateClass()} onClick={() => props.handleClick(props.id)}>
                    <div id={props.id} style={{ backgroundImage: `url(https://webknox.com/recipeImages/${props.newImg})`}} className="img">
                    </div>
                    <div className="each">
                        <h3>{props.each.length < 45 ? props.each : props.each.slice(0, 45) + "..."}</h3>
                        <p>Serving times:<i> {props.serving} minutes</i></p>
                    </div>
                </div>
        </LazyLoad>
    )
}

export default Food

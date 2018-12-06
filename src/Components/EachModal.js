import React from "react";
import "../ComponentStyles/EachModal.css"
import LazyLoad from "react-lazyload";
const EachModal = (props) => {
    return (
         <LazyLoad height = {250} once throttle= {400} >
        <div id={props.id} className="related-recipes" onClick={() => props.handleClick(props.id)}>
            <h4>{props.title.length < 25 ? props.title : props.title.slice(0, 25) + "..."}</h4>
            <div style={{ backgroundImage: `url(https://webknox.com/recipeImages/${props.image})` }} className="related-imgs"></div>
        </div>
        </LazyLoad> 
    )
}
export default EachModal;
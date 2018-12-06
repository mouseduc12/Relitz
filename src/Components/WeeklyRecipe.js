import React from "react";
import "../ComponentStyles/WeeklyRecipe.css"
import LazyLoad from "react-lazyload";

const WeeklyRecipe = (props) => {
    console.log(props.id)
    let mealType = ""
    if(props.slot === 1){
        mealType = "Breakfast"
    } else if(props.slot === 2){
        mealType = "Lunch"
    } else if(props.slot === 3){
        mealType = "Dinner"
    }
    return (
        <LazyLoad height={250} once throttle={400}>
            <div className="weekly-foods" onClick = {() => props.handleModal(props.id)}>
                <h3>Day: {props.day} - {mealType}</h3>
                <h4>{props.title.length < 25 ? props.title : props.title.slice(0, 25) + "..."}</h4>
                <div className="weekly-images" style={{ backgroundImage: `url(https://spoonacular.com/recipeImages/${props.id}-556x370.${props.imageType})` }}>
                </div>
            </div>
        </LazyLoad>
    )
}
export default WeeklyRecipe
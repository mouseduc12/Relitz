import React from "react";
import "../ComponentStyles/DailyRecipe.css"

const DailyRecipe = (props) => {
    let mealType = ''
    if(props.num === 0){
        mealType = "Breakfast:"
    } else if(props.num === 1){
        mealType = "Lunch:"
    } else if(props.num === 2){
        mealType = "Dinner:"
    }
    return (
        <div className="daily-recipe" onClick = {() => props.handleModal(props.id)}>
            <h3>{mealType}</h3>
            <h4>{props.title.length < 25 ? props.title : props.title.slice(0, 25) + "..."}</h4>
            <div style={{ backgroundImage: `url(https://webknox.com/recipeImages/${props.image})` }} className="dailyRecipe-Img">
            </div>
        </div>
    )
}
export default DailyRecipe
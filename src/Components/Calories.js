import React from "react";
import axios from "axios"
import "../ComponentStyles/Calories.css"
import DailyRecipe from "./DailyRecipe"
import WeeklyRecipe from "./WeeklyRecipe"
import TheModal from "./TheModal"
import Modal from "react-modal"

class Calories extends React.Component {
    constructor() {
        super()
        this.state = {
            weight: "",
            height: "",
            sex: "",
            age: "",
            work: "sendary",
            "calorie": "",
            "isAccepted": false,
            display: "",
            targetCalories: "",
            dayOrWeek: "",
            recommededDataDaily: [],
            recommededDataNutries: {},
            recommededDataWeekly: [],
            openGate: false,
            clearForm: "",
            clearBoard: "",
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    q
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.work === "sendary") {
            if (this.state.sex === "male") {
                this.setState({
                    calorie: Math.floor(((10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age + 5) * 1.2))
                })
            } else if (this.state.sex === "female") {
                this.setState({
                    calorie: Math.floor(((10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age - 161) * 1.2))
                })
            }
        } else if (this.state.work === "moderate") {
            if (this.state.sex === "male") {
                this.setState({
                    calorie: Math.floor(((10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age + 5) * 1.3))
                })
            } else if (this.state.sex === "female") {
                this.setState({
                    calorie: Math.floor(((10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age - 161) * 1.3))
                })
            }

        } else if (this.state.work === "active") {
            if (this.state.sex === "male") {
                this.setState({
                    calorie: Math.floor(((10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age + 5) * 1.4))
                })
            } else if (this.state.sex === "female") {
                this.setState({
                    calorie: Math.floor(((10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age - 161) * 1.4))
                })
            }
        }
        this.setState({
            clearForm: "clear-form"
        })
    }

    generateClassForSpan = () => {
        if (this.state.openGate === true) {
            return "daily-foods"
        } else {
            return "display-none"
        }
    }

    handleClick = (e) => {
        if(e.target.name === "firstButton"){
            this.setState({
                isAccepted: true,
                display: "none"
            })
        } else if(e.target.name === "secondButton"){
            this.setState({
                isAccepted: false,
                display: "none",
                clearForm: "",
                clearBoard: "clear-board"
            })
        }
    }
    handleChangeTransitionEnd = (e) =>{
        console.log(e)
        console.log('hello')
    }
    openButtonClicks = () =>{
        this.setState({
            display: "",
            clearBoard: "analytic"
        })
    }

    newHandleSubmit = (e) => {
        e.preventDefault();
        const calories = this.state.targetCalories
        if(calories >= 3000){
            return alert("Cannot be over 3000 for each day!")
        }
        const dayOrWeek = this.state.dayOrWeek
        const recommendedUrl = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?targetCalories=${calories}&timeFrame=${dayOrWeek}`
        axios.get(recommendedUrl, { headers: { 'X-Mashape-Key': `${process.env.REACT_APP_TOKEN}`, "Accept": "application/json" } })
        .then(res => {
            const recommededDataNutries = res.data.nutrients
            const recommededDataDaily = res.data.meals
            const recommededDataWeekly = res.data.items
            this.setState({
                recommededDataWeekly,
                recommededDataDaily,
                recommededDataNutries,
                openGate: true,
            })
        })
    }
    render() {
        let newKey;
        newKey = this.state.recommededDataWeekly && this.state.recommededDataWeekly.map(each => {
            const obj = JSON.parse(each.value)
            obj.day = each.day
            obj.slot = each.slot
            return obj
        })
        let decreaseOnePound;
        let decreaseTwoPound;
        let increaseOnePound;
        let increaseTwoPound
        decreaseOnePound = this.state.calorie - 500
        decreaseTwoPound = this.state.calorie - 1000
        increaseOnePound = this.state.calorie + 500
        increaseTwoPound = this.state.calorie + 1000
        return (
            <div className="calories">
                <div className="calculation">
                    <form className="form2" onSubmit={this.handleSubmit} id={this.state.clearForm}>
                        <h2>CALORIES CALCULATOR:</h2>
                        <div >Weight: <input className="newInput" type="number" placeholder="Kg" value={this.state.weight} name="weight" onChange={this.handleChange} required /></div>
                        <div >Height: <input className="newInput" type="number" placeholder="Cm" value={this.state.height} name="height" onChange={this.handleChange} required /></div>
                        <div> <div className="options">Male: <input type="radio" value="male" name="sex" onChange={this.handleChange} required /></div>
                            <div className="options"> Female: <input type="radio" value="female" name="sex" onChange={this.handleChange} required /></div>
                        </div>
                        <div>Age: <input className="age2" type="number" value={this.state.age} name="age" onChange={this.handleChange} placeholder="Age" required /></div>
                        <select name="work" onChange={this.handleChange}>
                            <option value="sendary" >Exercise 1 to 3 a week</option>
                            <option value="moderate" >Exercise 3 to 5 a week</option>
                            <option value="active">Exercise 6 to 7 a week</option>
                        </select>
                        <button onClick={this.openButtonClicks}>Calculate</button>
                    </form>
                    {this.state.calorie &&
                        <div className={this.state.clearBoard} onTransitionEnd={this.handleChangeTransitionEnd}>
                            <div className="firstBar">
                                <h2>Gain Two Pounds/week:</h2>
                                <div className="bar1"> </div>
                                <h4><i>{increaseTwoPound}/daily</i></h4>
                            </div>
                            <div className="firstBar">
                                <h2>Lose Two Pounds/week:</h2>
                                <div className="bar5"> </div>
                                <h4><i>{decreaseTwoPound}/daily</i></h4>
                            </div>
                            <div className="firstBar">
                                <h2 className="mainh2">Mantain Weight:</h2>
                                <div className="bar3"> </div>
                                <h4><i>{this.state.calorie}/daily</i></h4>
                            </div>
                            <div className="firstBar">
                                <h2>Lose One Pound/week:</h2>
                                <div className="bar4"> </div>
                                <h4><i>{decreaseOnePound}/daily</i></h4>
                            </div>
                            <div className="firstBar">
                                <h2>Gain One Pound/week:</h2>
                                <div className="bar2"> </div>
                                <h4><i>{increaseOnePound}/daily</i></h4>
                            </div>
                        </div>}
                    {this.state.calorie &&
                        <div className ="calories-buttons">
                            <button onClick={this.handleClick} className={this.state.display} id="recommended-button" name="firstButton">Get Recommendation</button>
                            <button onClick={this.handleClick} className={this.state.display} id="return-button" name="secondButton">Return Back</button>
                        </div>
                        }

                    {this.state.isAccepted &&
                        <form className="form4" onSubmit={this.newHandleSubmit}>
                            <input type="number" name="targetCalories" value={this.state.targetCalories} placeholder="Target Calories" onChange={this.handleChange} required className="target-calories" />
                            <div className="daily-weekly">
                                <p>Daily: <input type="radio" name="dayOrWeek" value="day" onChange={this.handleChange} required /> </p>
                                <p>Weekly: <input type="radio" name="dayOrWeek" value="week" onChange={this.handleChange} required /> </p>
                            </div>
                            <div className="form4-button">
                                <button className="send">SEND</button>
                            </div>
                        </form>
                    }
                </div>
                {this.state.recommededDataDaily &&
                    <div className="daily-foods-container">
                        <div className="daily-foods-box">
                            <div className={this.generateClassForSpan()}>
                                <span>Calories: {this.state.recommededDataNutries.calories}</span>
                                <span>Protein: {this.state.recommededDataNutries.protein}</span>
                                <span>Fat: {this.state.recommededDataNutries.fat}</span>
                                <span>Carbohydrates: {this.state.recommededDataNutries.carbohydrates}</span>
                            </div>
                            {this.state.recommededDataDaily.map((each, i) => <DailyRecipe key={each.id} num={i} id={each.id} title={each.title} image={each.image} handleModal={this.props.openModal} />)}
                        </div>
                    </div>
                }

                {this.state.recommededDataWeekly &&
                    <div className="weekly-mantain">
                        <div className="inside-mantain">
                            {newKey.map(each => <WeeklyRecipe key={each.id} title={each.title} id={each.id} imageType={each.imageType} day={each.day} slot={each.slot} handleModal={this.props.openModal} />)}
                        </div>
                    </div>
                }

                {this.props.eachRecipe && <TheModal
                    handleModal={this.props.openModal}
                    eachRecipe={this.props.eachRecipe}
                    isOpen={this.props.modalIsOpen}
                    closeModal={this.props.closeModal}
                    summarizeRecipe={this.props.summarizeRecipe}
                    htmlTextNutrion={this.props.htmlTextNutrion}
                    htmlPriceContainer={this.props.priceContainer}
                    visualizeEquips={this.props.visualizeEquips}
                    similarRecipes={this.props.similarRecipes} />}

                  {this.props.eachRecipe && <Modal
                    handleModal={this.props.openModal}
                    eachRecipe={this.props.eachRecipe}
                    isOpen={this.props.modalIsOpen}
                    closeModal={this.props.closeModal}
                    summarizeRecipe={this.props.summarizeRecipe}
                    htmlTextNutrion={this.props.htmlTextNutrion}
                    htmlPriceContainer={this.props.priceContainer}
                    visualizeEquips={this.props.visualizeEquips}
                    similarRecipes={this.props.similarRecipes} />}   
            </div>
        )
    }
}
export default Calories;

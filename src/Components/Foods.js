import React from "react";
import axios from "axios"
import Food from "./Food.js"
import "../ComponentStyles/Foods.css";
import TheModal from "./TheModal.js";
import Modal from "react-modal"


class Foods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            type: "",
            exclude: "",
            foods: [],
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    //get id first then openmodal

    submitInformation = (e) => {
        e.preventDefault();
        const foodQuery = this.state.query;
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?${this.state.exclude && `excludeIngredients=${this.state.exclude.toLowerCase()}&`}instructionsRequired=true&limitLicense=false&number=50&offset=0&query=${foodQuery}${this.state.type && `&type=${this.state.type.toLocaleLowerCase()}`}`;
        axios.get(url, { headers: { 'X-Mashape-Key': `${process.env.REACT_APP_TOKEN}`, "Accept": "application/json", } }).then(res => {
            const foods = res.data.results
            this.setState({ foods })
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="food-container">
                <form onSubmit={this.submitInformation} className="form">
                    Food: <input type="text" value={this.state.query} name="query" placeholder="Steak..." required onChange={this.handleChange} />
                    Type: <input type="text" value={this.state.type} name="type" placeholder="main course, dessert,etc..." onChange={this.handleChange} />
                    Exclude Ingredients: <input type="text" value={this.state.exclude} name="exclude" placeholder="optional" onChange={this.handleChange} />
                    <button>Send</button>
                </form>
                <div className="img-container">
                    {this.state.foods ? this.state.foods.map(each => <Food key={each.id}
                        id={each.id}
                        newImg={each.imageUrls[0]}
                        each={each.title}
                        serving={each.servings}
                        handleClick={this.props.openModal} />)
                        : console.log("nothing to loop")}
                </div>
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
export default Foods

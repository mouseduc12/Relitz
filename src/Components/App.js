import React from "react";
import Header from "./Header"
import About from "./About"
import Footer from "./Footer"
import Foods from "./Foods"
import Calories from "./Calories"
import Schedule from "./Schedule"
import { Switch, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
var queryString = require('querystring')
library.add(fab, faCheckSquare, faCoffee);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            eachRecipe: {},
            summarizeRecipe: {},
            htmlTextNutrion: "",
            priceContainer: "",
            visualizeEquips: "",
            similarRecipes: []
        }
    }
    getRecipeInfo = (id) => {
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information?includeNutrition=false'`
        const newUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/visualizePriceEstimator";
        const equipmentsUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/visualizeEquipment"
        axios.get(url, { headers: { 'X-Mashape-Key': `${process.env.REACT_APP_TOKEN}`, "Accept": "application/json" } }).then(res => {
            const eachRecipe = res.data
            this.setState({
                eachRecipe: eachRecipe
            })
            this.setState({ modalIsOpen: true })
            //post request after getting eachRecipe key

            let list = this.state.eachRecipe.extendedIngredients.map(each => each.name);
            let ingredientList = list.join("\n")
            if (Object.keys(this.state.eachRecipe.length >= 1)) {
                axios.post(newUrl, queryString.stringify({
                    "mode": 1,
                    "servings": 1,
                    ingredientList,
                    "showBacklink": true,
                    "defaultCss": true,
                }), { headers: { 'X-Mashape-Key': `${process.env.REACT_APP_TOKEN}`, "Accept": "text/html", "Content-Type": "application/x-www-form-urlencoded" } }).then(res => {
                    const priceContainer = res.data
                    this.setState({
                        priceContainer
                    })
                })
            }
            //Because Content-Type require XML(application/x-www-form-urlencoded) so we need to download querystring to change axios by default as an object 
            if (Object.keys(this.state.eachRecipe.length >= 1)) {
                axios.post(equipmentsUrl, queryString.stringify({
                    "defaultCss": true,
                    "instructions": this.state.eachRecipe.instructions,
                    "showBacklink": true,
                    "view": "grid"
                }), { headers: { 'X-Mashape-Key': `${process.env.REACT_APP_TOKEN}`, "Accept": "text/html", "Content-Type": "application/x-www-form-urlencoded" } }).then(res => {
                    const visualizeEquips = res.data
                    this.setState({
                        visualizeEquips
                    })
                })
            }

        }).catch(error =>
            console.log(error
            ))
    }
    getRecipeSummarization = (id) => {
        const secondUrl = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/summary`
        axios.get(secondUrl, { headers: { 'X-Mashape-Key': `${process.env.REACT_APP_TOKEN}`, "Accept": "application/json" } }).then(res => {
            const summarizeRecipe = res.data
            this.setState({
                summarizeRecipe
            })
        }).catch(error => {
            console.log(error)
        })
    }

    getRecipeNutrion = (id) => {
        const thirdUrl = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/nutritionWidget?defaultCss=true`
        axios.get(thirdUrl, { headers: { 'X-Mashape-Key': `${process.env.REACT_APP_TOKEN}`, "Accept": "text/html" } }).then(res => {
            const htmlTextNutrion = res.data
            this.setState({
                htmlTextNutrion
            })
        })
    }

    getSimilarRecipe = (id) =>{
        const similarRecipeURL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/similar` 
        axios.get(similarRecipeURL, {headers: {'X-Mashape-Key': `${process.env.REACT_APP_TOKEN}`, "Accept": "application/json"}}).then(res => {
            const similarRecipes = res.data
            this.setState({
                similarRecipes
            })
        })
    }
    openModal = (e) => {
        this.getRecipeInfo(e)
        this.getRecipeSummarization(e)
        this.getRecipeNutrion(e)
        this.getSimilarRecipe(e)
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/foodblogs" render={props => <Foods
                        openModal = {this.openModal}
                        closeModal = {this.closeModal}
                        getRecipeInfo ={this.getRecipeInfo}
                        getRecipeNutrion ={this.getRecipeNutrion}
                        getRecipeSummarization = {this.getRecipeSummarization}
                        modalIsOpen = {this.state.modalIsOpen}
                        eachRecipe = {this.state.eachRecipe}
                        summarizeRecipe = {this.state.summarizeRecipe}
                        htmlTextNutrion = {this.state.htmlTextNutrion}
                        priceContainer = {this.state.priceContainer}
                        visualizeEquips = {this.state.visualizeEquips}
                        similarRecipes = {this.state.similarRecipes}
                     />} />
                    <Route path="/calories" render = {props => <Calories
                        openModal = {this.openModal}
                        closeModal = {this.closeModal}
                        getRecipeInfo ={this.getRecipeInfo}
                        getRecipeNutrion ={this.getRecipeNutrion}
                        getRecipeSummarization = {this.getRecipeSummarization}
                        modalIsOpen = {this.state.modalIsOpen}
                        eachRecipe = {this.state.eachRecipe}
                        summarizeRecipe = {this.state.summarizeRecipe}
                        htmlTextNutrion = {this.state.htmlTextNutrion}
                        priceContainer = {this.state.priceContainer}
                        visualizeEquips = {this.state.visualizeEquips}
                        similarRecipes = {this.state.similarRecipes}
                     />} />
                    <Route path="/schedule" component={Schedule} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App 
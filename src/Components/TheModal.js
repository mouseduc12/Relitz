import React from "react";
import Modal from "react-modal";
import "../ComponentStyles/TheModal.css";
import EachModal from "./EachModal"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faHeartbeat, faFire, faGrinHearts, faMoneyBillWaveAlt, faTimes, faCheck, faStar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faArrowCircleDown)
library.add(faHeartbeat)
library.add(faFire)
library.add(faGrinHearts)
library.add(faMoneyBillWaveAlt)
library.add(faTimes)
library.add(faCheck)
library.add(faStar)

const TheModal = (props) => {
    const { eachRecipe, summarizeRecipe, htmlTextNutrion, htmlPriceContainer, visualizeEquips, similarRecipes } = props
    const htmlText = summarizeRecipe.summary
    const htmlText2 = htmlTextNutrion
    const htmlText3 = htmlPriceContainer
    const htmlText4 = visualizeEquips
    if(similarRecipes.length > 8){
        similarRecipes.length = 8;
    }
    return (
        <div>
            {Object.keys(eachRecipe).length > 1
                &&
                <Modal
                    isOpen={props.isOpen}
                    onRequestClose={props.closeModal}
                    ariaHideApp={false}
                    className="modal">
                    <div className="exit">
                        <button style={{ float: "right" }} onClick={props.closeModal}><FontAwesomeIcon icon="times" /></button>
                    </div>
                    <div className="recipe-menus">
                        <h3>{eachRecipe.title}</h3>
                        <div className="modal-img" style={{ backgroundImage: `url(${eachRecipe.image})` }}></div>
                        <p>Ready In Service: {eachRecipe.readyInMinutes} minutes</p>
                    </div>
                    <div className="fan-likes">
                        {eachRecipe.diets.map((each, id) => <p><FontAwesomeIcon icon="check" className="icon-imgs" style={{ color: "lightGreen" }} />{each}</p>)}
                        <p><FontAwesomeIcon icon="heartbeat" className="icon-imgs" style={{ color: "hotPink" }} /> {eachRecipe.healthScore}%</p>
                        {eachRecipe.veryPopular ? <p><FontAwesomeIcon icon="fire" className="icon-imgs" style={{ color: "red" }} /> Very Popular</p> : <p>Not quite of popular</p>}
                        <p><FontAwesomeIcon icon="grin-hearts" className="icon-imgs" style={{ color: "yellow" }} /> {eachRecipe.aggregateLikes} Likes!</p>
                        <p><FontAwesomeIcon icon="money-bill-wave-alt" className="icon-imgs" style={{ color: "green" }} /> ${eachRecipe.pricePerServing}</p>
                    </div>
                    <div className="summarized-text">
                        {ReactHtmlParser(htmlText)}
                    </div>
                    <div className="wines">
                        <div className="recommended-wines">
                            <h3>Recommended Wines:</h3> {eachRecipe.winePairing.pairedWines && eachRecipe.winePairing.pairedWines.map(each => <p style={{ color: "darkCyan" }}><i>{each}</i></p>)}
                            <p>{eachRecipe.pairingText}</p>
                        </div>
                        {eachRecipe.winePairing.productMatches && eachRecipe.winePairing.productMatches.map(each =>
                            <div className="wine-cover">
                                <div className="recommed-wine-showoff">
                                    <h3>{each.title}</h3>
                                    <div className="recommended-wine-img" style={{ backgroundImage: `url(${each.imageUrl})` }}></div>
                                </div>
                                <div className="recommed-wine-infos">
                                    <p>Description: {each.description}</p>
                                    <p>Price: {each.price}</p>
                                    <p>Rating: {each.ratingCount} <FontAwesomeIcon icon="star" className="icon-imgs" style={{ color: "yellow" }} /></p>
                                    <p>Scores: {each.score}</p>
                                    <a href={each.link}>Click Here</a>
                                </div>
                            </div>)}
                    </div>
                    <div className="needs">
                        <div className="ingredients-notice">
                            <h2>Ingredients:</h2>
                            <div className="ingredients-imgs">
                                {eachRecipe.extendedIngredients && eachRecipe.extendedIngredients.map(each =>
                                    <div key={each.id} style={{ backgroundImage: `url(https://spoonacular.com/cdn/ingredients_100x100/${each.image})` }} className="ingredients">
                                    </div>)}
                            </div>
                        </div>
                        <div className="equipments">
                            <h2>Equipments:</h2>
                            <div className="equipment-imgs">
                                {ReactHtmlParser(htmlText4)}
                            </div>
                        </div>
                    </div>
                    <div className="cooking-instructions">
                        <h2>Instructions:</h2>
                        {eachRecipe.analyzedInstructions[0] && eachRecipe.analyzedInstructions[0].steps.map(each => <p>{each.number}. {each.step}</p>)}
                    </div>
                    <div className="price-chart">
                        {ReactHtmlParser(htmlText3)}
                    </div>
                    <div className="nutrion">
                        {ReactHtmlParser(htmlText2)}
                    </div>
                    <div className="similar-recipes">
                        <h2>Related Recipes:</h2>
                        <div className="similar-recipes-info">
                            {similarRecipes && similarRecipes.map(each => <EachModal 
                            id ={each.id}
                            key ={each.id} 
                            handleClick = {props.handleModal} 
                            title ={each.title} 
                            image={each.image}/>
                              )}
                        </div>
                    </div>
                    {props.eachRecipe && <TheModal
                    handleModal={props.openModal}
                    eachRecipe={props.eachRecipe}
                    isOpen={props.modalIsOpen}
                    closeModal={props.closeModal}
                    summarizeRecipe={props.summarizeRecipe}
                    htmlTextNutrion={props.htmlTextNutrion}
                    htmlPriceContainer={props.priceContainer}
                    visualizeEquips={props.visualizeEquips}
                    similarRecipes={props.similarRecipes} />}
                </Modal>
            }
        </div>
    )
}
export default TheModal;
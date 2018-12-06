import React from "react"
import "../ComponentStyles/Reviews.css"

class Reviews extends React.Component {
    constructor(){
        super()
        this.state = {
            enter:"",
            enter2: "",
            enter3: "",
            enter4: ""
        }
    }
    handleEnter = () =>{
        this.setState({
            enter: "visible",
        })
    }
    handleEnter1 = () =>{
        this.setState({
            enter2: "visible2"
        })
    }
    handleLeave = () =>{
        this.setState({
            enter: "",
        })
    }
    handleLeave1 = () =>{
        this.setState({
            enter2: ""
        })
    }
    handleEnter2 = () =>{
        this.setState({
            enter3: "visible3",
        })
    }
    handleLeave2 = () =>{
        this.setState({
            enter3: ""
        })
    }
    handleEnter3 = () =>{
        this.setState({
            enter4: "visible4",
        })
    }
    handleLeave3 = () =>{
        this.setState({
            enter4: ""
        })
    }

    render() {
        return (
            <div className="reviews">
                <div className="brands-logo">
                    <div className="brand"></div>
                    <div className="brand" id="second-brand"></div>
                    <div className="brand" id="third-brand"></div>
                    <div className="brand" id="fourth-brand"></div>
                    <div className="brand" id="fifth-brand"></div>
                    <div className="brand" id="sixth-brand"></div>
                    <div className="brand" id="seventh-brand"></div>
                    <div className="brand" id="eighth-brand"></div>
                    <div className="brand" id="ninth-brand"></div>
                    <div className="brand" id="tenth-brand"></div>
                </div>
                <div className="insta-owner">
                    <div className="insta-img"></div>
                    <div className="insta-info">
                        <p>PEXELS</p>
                        <p>📷 A beautiful collection of curated stock photos 🎁 Totally free for personal & commercial use 💻 Upload your photos to Pexels.com to be featured</p>
                    </div>
                </div>
                <div className="click-bait-image1"  onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                <button className={this.state.enter}><a href="https://www.instagram.com/explore/locations/1030860450/v-school?hl=en" target="_blank">Learn More</a></button>
            </div>
            <div className="click-bait-image2" onMouseEnter={this.handleEnter1} onMouseLeave={this.handleLeave1}>
                <button className={this.state.enter2}><a href="https://www.instagram.com/explore/locations/1030860450/v-school?hl=en" target="_blank">Learn More</a></button>
            </div>
            <div className="click-bait-image3" onMouseEnter={this.handleEnter2} onMouseLeave={this.handleLeave2}>
                <button className={this.state.enter3}><a href="https://www.instagram.com/explore/locations/1030860450/v-school?hl=en" target="_blank">Learn More</a></button>
            </div>
            <div className="click-bait-image4" onMouseEnter={this.handleEnter3} onMouseLeave={this.handleLeave3}>
                <button className={this.state.enter4}><a href="https://www.instagram.com/explore/locations/1030860450/v-school?hl=en" target="_blank">Learn More</a></button>
            </div>
        </div >
    )
    }
}

export default Reviews;
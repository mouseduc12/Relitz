import React from "react";
import "../ComponentStyles/Nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fixed: "",
            background: ""
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.addEventListener("scroll", this.handleScroll)
    }
    handleScroll = () =>{
        if(window.scrollY >= 10){
            this.setState({
                fixed: "fixed",
                background: "rgba(1,1,1,1)"
            })
        } else {
            this.setState({
                fixed: "",
                background: ""
            })
        }
    }
    render() {
        return (
            <div className="nav" style={{position: this.state.fixed, background: this.state.background, zIndex: 100}}>
                <h1><Link to="/" style={{ textDecoration: "none", color: "darkcyan" }}>Relitz</Link></h1>
                <ul className="nav-menus">
                    <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></li>
                    <li><Link to="/foodblogs" style={{ textDecoration: "none", color: "white" }}>Foods</Link></li>
                    <li><Link to="/calories" style={{ textDecoration: "none", color: "white" }}>Targeted Calories</Link></li>
                    <li><Link to="/schedule" style={{ textDecoration: "none", color: "white" }}>Schedule An Event</Link></li>
                </ul>
            </div>
        )
    }
}
export default Nav;
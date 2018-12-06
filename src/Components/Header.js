import React from "react";
import Nav from "./Nav"
import "../ComponentStyles/Header.css"
const Header = () => {
    const url = ["https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/1432951/pexels-photo-1432951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]
    const randomImages = () => {
        let random = Math.floor(Math.random() * url.length);
        return url[random]
    }
    return(
        <div className = "header" style={{backgroundImage: `url(${randomImages()})`}}>
            <Nav />
            <div className ="header-theme">
                <h1>FOOD FOR THOUGHTS</h1>
                <h2>A territory of foods by <i>Relitz</i></h2>
            </div>
        </div>
    )
}
export default Header;
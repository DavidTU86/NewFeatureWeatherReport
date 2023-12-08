import React from 'react'
import { Link } from 'react-router-dom'
const Buttons = () => {
    function click () {
        console.log("clicked")
        // invoke a react link to the park search page
        window.location.href = "ParkSearch"

    }
    return (
        <div className = "homepage-button-wrapper">
                {/* <button className = "homepage-button" onClick = {() => handleClick("ParkSearch")}>Park Search</button>
                <button className = "homepage-button" onClick = {() => handleClick("ParkPlan")}>Plan A Trip</button> */}
                <div className = "button-container">
                    <p>Learn More About Parks</p> 
                    <Link className="homepage-button" to='/ParkSearch'><button className="homepage-button">Park Search</button></Link>                    
                </div> 
                <div className = "button-container">
                    <p>Plan A Trip To A National Park</p>
                    <Link className="homepage-button" to='/ParkPlan'><button className="homepage-button">Plan a Trip</button></Link>
                </div>               
        </div>
    )

}


export default Buttons
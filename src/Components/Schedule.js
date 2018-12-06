import React from "react";
import Calendar from "react-calendar"
import "../ComponentStyles/Schedule.css"
import GoogleMapReact from 'google-map-react';
import Text from "./Text"

export default class Schedule extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date(),
            map: {}
        }
    }
    static defaultProps = {
        center: {
            lat: 40.6794901,
            lng: -73.68151
        },
        zoom: 11
    };
    handleChange = (date) => {
        this.setState({
            date
        })
    }
    handleClick = (value) => {
        alert("hello")
        console.log(value)
    }

    render() {
        return (
            <div>
                <div className="leave-a-message">
                    <div className="leave-a-message-inside">
                        <Calendar onChange={this.handleChange} value={this.state.date} className="calendar" onClickDay={this.handleClick} />
                        <form className="form6">
                            <h2>Question?</h2>
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="number" required placeholder="Phone Number" />
                            <textarea type="text" placeholder="Message" required></textarea>
                            <div className="button-request">
                                <button>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="map">
                    <div style={{ height: '40vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE}` }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}>
                            <Text
                                lat={40.6447239}
                                lng={-73.7283829}
                                text={'Operation'} />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        )
    }
}


import React from "react"
import "../ComponentStyles/Text.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faArrowCircleDown)

const Text = () => {
    return (
        <div>
            <div>
                <p><FontAwesomeIcon icon="arrow-circle-down" className ="operation-house"/></p>
            </div>
        </div>
    )
}
export default Text
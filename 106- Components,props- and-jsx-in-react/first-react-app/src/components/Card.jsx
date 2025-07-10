import React from 'react'
import "./Card.css"

const card = (props) => {
    return (
        <div>
            <div className="card" >
                <img width={"333"} src="https://live.staticflickr.com/579/20362003029_becdf5200b_b.jpg" alt=""
                    style={{ border: "2px solid black"}} />
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default card

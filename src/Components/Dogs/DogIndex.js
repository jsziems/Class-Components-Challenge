
import React, { Component } from 'react'

class DogIndex extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            imageUrl: ''
        }

        // Need to bind 'this' if using async displayDog().  Binding isn't needed if using async with an arrow function.
        // this.displayDog = this.displayDog.bind(this)
    }

    displayDog = async () => {
        try {
            let res = await fetch("https://dog.ceo/api/breeds/image/random")
            let json = await res.json()

            console.log(json)
            this.setState({
                imageUrl: json.message,
                loaded: true
            })
        } catch (err) {
            console.log("ERROR:", err)
        }
    }

    componentDidMount() {
        this.displayDog()
    }

    render() {
        return (
            <>
                {!this.state.loaded
                    ? "Loading"
                    : <img src={this.state.imageUrl} alt="Cute Dog" />
                }
                <button type='button' onClick={this.displayDog}>Show Another Dog</button>
            </>
        )

    }
}

export default DogIndex
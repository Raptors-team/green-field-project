import React, { component } from "react";
import { Component } from "react";
class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: '',
            imageUrlarray: [

            ],
            showModel: false,
            popImageUrl: ""
        }
    }
    render() {
        const { imageUrlarray } = this.state
        // const images=
        return (
            <div>
            {
                imageUrlarray.map((url, i) => {
                    <img className="singleimage"
                    src={url} key={i}
                    />
                })
            }
            </div>
        )
        // return(
        //     <div className = "images">Images</div>
        // )

    }
}

export default Images;
import React from "react"
import 'date-fns';
import { Typography } from '@material-ui/core';
import "./greeting.css"
class Greeting extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div style={{ backgroundColor: "lavender" }}>
                <div position="static" className="greeting" style={{ backgroundColor: "lavender" }} >
                    <Typography variant="h3" className="text" style={{ backgroundColor: "lavender" }}>
                        <p style={{ color: "Navy", fontFamily: "Dancing Script", fontSize: "36px", fontStyle: "normal", fontWeight: "bolder", fontVariant: "normal", fontHeight: 700, lineHeight: "26.4px" }}>Where To Next, .......</p>
                        {/* {{ fontFamily: "'Dancing Script', cursive", color: "#FFFFFF", fontWeight: "bolder", textShadow: " 0 0 2px #3f51b5", mozTextShadow: "0 0 2px #3f51b5", webkitTextShadow: "0 0 2px #3f51b5" }} */}

                        {/* Apple Chancery, cursive */}
                        {/* /{{ color: "#FFFFFF", fontWeight: "bolder", webkitTextStroke: "1px navy", textShadow: "0px 1px 0 #fff" }} */}
                    </Typography>
                </div>
            </div>
        )
    }
}

export default Greeting


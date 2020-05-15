import React from "react"
import "../styles/Terminal.css"

import TerminalBody from "./TerminalBody"
import TerminalHeader from "./TerminalHeader"


class Terminal extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="Terminal">
                    <TerminalHeader/>
                    <TerminalBody/>
                </div>
            </div>
        )
    }
}

export default Terminal;
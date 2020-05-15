import React from "react"
import "../styles/TerminalHeader.css"

class TerminalHeader extends React.Component {
    render() {
        return (
            <div className="TerminalHeader">
                <button className="TerminalButton TerminalButtonExit">&#10005;</button>
                <button className="TerminalButton">&#9472;</button>
                <button className="TerminalButton">&#9723;</button>
                <p className="TerminalHeaderUser">uriyyo@ubuntu:~</p>
            </div>
        )
    }
}


export default TerminalHeader;
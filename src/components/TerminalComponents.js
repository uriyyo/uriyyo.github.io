import React from "react"
import "../styles/TerminalBody.css"

export function Prompt() {
    return (
        <>
            <span className="TerminalBodyUser">uriyyo@ubuntu:</span>
            <span className="TerminalLocation">~</span>
            <span className="TerminalDollar">$</span>
        </>
    );
}

export function Text(props) {
    return (
        <div className="TerminalBodyText">
            {props.children}
        </div>
    )
}

export function Command(props) {
    return (
        <span className="TerminalCommand">{props.command}</span>
    )
}

export function Cursor() {
    return (
        <span className="TerminalPromptCursor"/>
    )
}

export function Record(props) {
    return (
        <>
            <div className="TerminalPrompt">
                <Prompt/>
                <Command command={props.command}/>
            </div>
            <div>
                {props.children}
            </div>
        </>
    )
}

export function CursorRecord(props) {
    return (
        <div className="TerminalPrompt">
            <Prompt/>
            <Command command={props.text}/>
            <Cursor/>
        </div>
    )
}

export function Link(props) {
    return (
        <div className="TerminalBodyText">
            <a target="_blank"
               rel="noopener noreferrer"
               href={props.href}
            >
                {props.text}
            </a>
        </div>
    )
}

export function Emoji(props) {
    return (
        <span
            className="emoji"
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}
        >
            {props.symbol}
        </span>
    )
}
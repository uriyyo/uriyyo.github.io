import React from "react"
import "../styles/TerminalBody.css"
import KeyboardEventHandler from 'react-keyboard-event-handler';
import {CursorRecord, Emoji, Link, Record, Text} from "./TerminalComponents"

class TerminalBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            records: [
                <Record command="whoami">
                    <Text>Yurii Karabas</Text>
                    <Text><Emoji symbol="💫"/>TOP-500 at @codewars<Emoji symbol="💫"/></Text>
                </Record>,

                <Record command="echo $PRIMARY_SKILLS">
                    <Text><Emoji symbol="🐍"/> Python</Text>
                    <Text><Emoji symbol="☕"/>️ Java</Text>
                </Record>,

                <Record command="echo $SECONDARY_SKILLS">
                    <Text><Emoji symbol="🛠"/> C/C++</Text>
                    <Text><Emoji symbol="🙈"/> JavaScript</Text>
                    <Text><Emoji symbol="🌱"/> Kotlin</Text>
                </Record>,

                <Record command="echo $EDUCATION">
                    <Text>2015 - 2019 Lviv Polytechnic National University</Text>
                    <Text>            Bachelor's degree, Computer Engineering</Text>
                    <Text>2019 - 2020 Lviv Polytechnic National University</Text>
                    <Text>            Master's degree, System Programming</Text>
                </Record>,

                <Record command="echo $EXPERIENCE">
                    <Text>2017 Jan - 2020 Mar GlobalLogic</Text>
                    <Text>                    Python/Java Software Engineer</Text>
                    <Text>2020 Apr - present Newfire Partners</Text>
                    <Text>                   Python Software Engineer</Text>
                </Record>,

                <Record command="ls contacts">
                    <Link href='https://github.com/uriyyo' text='@github'/>
                    <Link href='https://www.linkedin.com/in/uriyyo/' text='@linkedin'/>
                    <Link href='https://t.me/uriyyo' text='@telegram'/>
                    <Link href='https://www.codewars.com/users/yurii_karabas' text='@codewars'/>
                    <Link href='mailto:1998uriyyo@gmail.com' text='@email'/>
                </Record>,
            ]
        };
    }

    handleKey(key, event) {
        let text = this.state.text;
        let records = [...this.state.records];

        if (key === "backspace") {
            text = text.slice(0, text.length - 1);
        } else if (key === "enter") {
            text = text.trim();

            if (text !== "") {
                if (text === "clear") {
                    records = [];
                } else {
                    records.push(
                        <Record command={text}>
                            <Text>Unknown command "{text}"</Text>
                        </Record>
                    );
                }
            }

            text = "";
        } else {
            text = (text || "") + event.key;
        }

        this.setState({
            text: text,
            records: records,
        });
        console.log(key);
    }

    render() {
        return (
            <div className="TerminalBody">
                <KeyboardEventHandler
                    handleKeys={['alphanumeric', 'enter', 'backspace', 'space']}
                    onKeyEvent={(key, event) => this.handleKey(key, event)}/>

                {this.state.records}

                <CursorRecord text={this.state.text || ""}/>
            </div>
        )
    }
}


export default TerminalBody;

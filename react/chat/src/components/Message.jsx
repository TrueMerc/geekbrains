import React from "react";
import Authors from "../domain/Authors"
import '../main.css';

const Message = (props) => {

    const {author, text} = props;
    const className = (author === Authors.HUMAN ? 'human-message' : 'robot-message');

    return (
        <li className={className}>
            [{author === Authors.HUMAN ? 'Human' : 'Bot'}]: {text}
        </li>
    );
}

export default Message;

import React from "react";
import '../main.css';

const Message = (props) => {

    const {author, text} = props;
    const className = (author.toLocaleLowerCase() === 'human' ? 'human-message' : 'robot-message');

    return (
        <li className={className}>
            [{author}]: {text}
        </li>
    );
}

export default Message;

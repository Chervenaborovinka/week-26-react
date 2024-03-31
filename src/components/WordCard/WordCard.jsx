import React, { useState, useEffect, useRef } from "react";
import "./WordCard.css";

const WordCard = (props) => {
    const [showTranslation, setShowTranslation] = useState(false);

    const translateButton = useRef(null);

    useEffect(() => {
        if (translateButton.current) {
            translateButton.current.focus();
        }
    }, [props.word]);

    const handleToggleTranslation = () => {
        setShowTranslation((prevShowTranslation) => !prevShowTranslation);
        props.counter();
    };

    return (
        <div className="word-card" onClick={handleToggleTranslation} >
            <p>{props.word}</p>
            <p>{props.transcription}</p>
            {showTranslation && <p>{props.translation}</p>}

        </div >
    );
};


export default WordCard;
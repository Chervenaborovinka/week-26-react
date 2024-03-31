import React, { useState } from "react";
import "./WordCard.css";

const WordCard = (props) => {


    const [showTranslation, setShowTranslation] = useState(false);

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
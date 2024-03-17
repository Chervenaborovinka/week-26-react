import React, { useState } from "react";
import "./WordCard.css";

const WordCard = ({ card }) => {
    const { id, word, transcription, translation } = card;


    const [isSelected, setIsSelected] = useState(false);

    const [value, setValue] = useState(id);



    function getValue(event) {
        const newValue = event.target.value;
        setValue(newValue);
    }


    return (
        <div className="word-card">
            {isSelected ? (
                <input
                    type='text'
                    onChange={getValue}
                    value={value}
                    onBlur={() => setIsSelected(false)}
                />
            ) : (
                <div className='id' onClick={() => setIsSelected(true)}>
                    {value}
                </div>
            )}
            <div className='word'>{word}</div>
            <div className='transcription'>{transcription}</div>
            <div className='translation'>{translation}</div>
        </div>
    );
};

export default WordCard;
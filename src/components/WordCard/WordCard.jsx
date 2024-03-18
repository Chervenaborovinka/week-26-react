import React, { useState } from "react";
import "./WordCard.css";

const WordCard = (props) => {



    const [isSelected, setIsSelected] = useState(false);

    const [value, setValue] = useState(props.isSelected || false);

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
            <div className='word'>{props.word}</div>
            <div className='transcription'>{props.transcription}</div>
            <div className='translation'>{props.translation}</div>
        </div>
    );
};

export default WordCard;
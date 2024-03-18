import React, { useState } from "react";
import WordCard from "../WordCard/WordCard";
import words from "../../data/words";

const WordCarousel = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handlePrevCard = () => {
        setCurrentCardIndex((currentCardIndex === 0 ? words.length - 1 : currentCardIndex - 1));
    };

    const handleNextCard = () => {
        setCurrentCardIndex((currentCardIndex === words.length - 1 ? 0 : currentCardIndex + 1));
    };


    const handleReset = () => {
        setCurrentCardIndex(0);
    };

    return (
        <div className="word-carousel" onClick={handleNextCard}>
            {words.length > 0 ? (
                <>
                    <button onClick={handlePrevCard}>←</button>
                    <WordCard
                        word={words[currentCardIndex].word}
                        translation={words[currentCardIndex].translation} />
                    <button onClick={handleNextCard}>→</button>
                </>
            ) : (
                <p>No words to display.</p>
            )}
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

// WordCarousel.defaultProps = {
//     initialIndex: 0,
// };

export default WordCarousel;







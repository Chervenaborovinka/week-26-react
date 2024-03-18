import WordCard from "../WordCard/WordCard";
import words from "../../data/words";

function Cards() {
    return (
        <div className="cards">
            {words.map((word, index) =>
                <WordCard key={index} {...word}></WordCard>
            )
            }
        </div>
    );
}

export default Cards;
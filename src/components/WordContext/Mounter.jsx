import React, {useState, useEffect, createContext} from 'react';
import WordCard from '../WordCard/WordCard';
import Table from "../Table/Table";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const WordContext = createContext();

const Mounter = ({children}) => {
    const[words, setWords] = useState([]);
    const[loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    //то же что и componentDidMount
    useEffect(() => {
		fetch('http://itgirlschool.justmakeit.ru/api/words') 
			.then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
            })
            .then((response) => {
            setWords(response)
		    setLoading(false)
            })
            .catch(error => setError(error));
	}
);

    const addWord = (newWord) => {
        setWords([...words,newWord]);
    };

    const updateWord = (updatedWord) => {
        const updatedWords = words.map((word) => word.id === updatedWord.id ? updatedWord : word);
        setWords(updatedWords);
    };

    const deleteWord = (wordId) => {
        const updatedWords = words.filter((word) => word.id !==wordId);
        setWords(updatedWords);
    };

    return(
        <WordContext.Provider value={{words,addWord,updateWord,deleteWord}}>
            {loading ? (<p>Loading...</p>
            ) : error ? (
                <ErrorComponent message={error}/>
            ) : (
                <>
                <Table/>
                <WordCard/>
                {children}
                </>
            )}
        </WordContext>
    );
    
};


export default Mounter;

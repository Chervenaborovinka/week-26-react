import React, {Component} from 'react';
import WordCard from '../WordCard/WordCard';
import Table from "../Table/Table";

class WordContext extends Component {
    state = {
        words: [],
        loading:true,
        error:null
    };

    componentDidMount(){
        this.getWords();
    }

    getWords =() => {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
        .then(response=> response.json())
        .then(data => {
            this.setState({words: data, loading:false});
        })
        .catch(error => {
            this.setState({error: error.message, loading:false});
        });
    };

    updateWord = () => {

    };

    deleteWord = ()=> {

    };

    addWord = ()=> {

    };

    render(){
        const{words, loading, error} = this.state;
    

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Error, please update the page or choose abother menu option</p>
    }

    return(
        <div>
<Table words={words} updateWord={this.updateWord} deleteWord={this.deleteWord}/>
<WordCard words={words} addWord={this.addWord} />
        </div>
    );
}

}

export default WordContext;
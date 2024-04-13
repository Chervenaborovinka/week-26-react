import React, { useState } from "react";
import words from "../../data/words";
import styles from "./Table.module.css";

const Table = () => {

    return (
        <div className={styles.table}>
            <table className="table-rows">
                <tr>
                    <th>#</th>
                    <th>Word</th>
                    <th>Transcription</th>
                    <th>Translation</th>
                    <th>Buttons</th>
                </tr>
                {words.map((word) => {

                    return <TableRow rowData={word} key={word.id} />;

                })}
            </table>
        </div>
    );

};

export default Table;

const TableRow = ({ rowData }) => {
    const { id, word, transcription, translation } = rowData;
    const [isSelected, setIsSelected] = useState(false);
    const [value, setValue] = useState({
        id,
        word,
        transcription,
        translation,
    });

    // const [emptyFields, setEmptyFields] = useState([]); //таким образом фиксируем ошибки,т е пустые поля

    const [emptyFields,setEmptyFields] = useState({
        id: false,
        word: false,
        transcription:false,
        translation:false,
    }) 
    // иной способ - как из урока - указать ошибки


    function handleClose() {
        setIsSelected(!isSelected);
        setValue({ ...rowData });
        setEmptyFields([]);
    }

    function handleSave() {
        if (value.word.match(/[а-яА-Я]/g)){
            setEmptyFields({...emptyFields, word:"Please, fill in english"});
        } else {
            setValue({ ...value });
            setIsSelected(!isSelected);
            setEmptyFields([]);
        }
    }

    function handleEdit() {
        setIsSelected(!isSelected);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setValue((prevValue) => {
            return { ...prevValue, [name]: value };
        });
        setEmptyFields({...emptyFields,
            [name]:
            value.trim()=== "" ? "Field is empty" : false,
        });
    }


   // Проверка на пустые поля
    //     if (value.trim() === '') {
    //         if (!emptyFields.includes(name)) {
    //             setEmptyFields([...emptyFields, name]);
    //         }
    //     } else {
    //         setEmptyFields(emptyFields.filter(field => field !== name));
    //     }
    

    const btnDisabled = Object.values(emptyFields).some((elem)=>elem)

    return isSelected ? (
        <tr>
            <td>
                <td>{value.id}</td>
            </td>
            <td>
                <input
                    type="text"
                    value={value.word}
                    name={"word"}
                    onChange={handleChange}
                    // style={{ border: emptyFields.includes('word') ? '1px solid red' : 'none' }}
                    className={emptyFields.word ? styles.border__error : ''}
                />
                <p>{emptyFields.word && emptyFields.word}</p>
            </td>
            <td>
                <input
                    type="text"
                    value={value.transcription}
                    name={"transcription"}
                    onChange={handleChange}
                    // style={{ border: emptyFields.includes('transcription') ? '1px solid red' : 'none' }}
                    className={emptyFields.transcription ? styles.border__error : ''}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={value.translation}
                    name={"translation"}
                    onChange={handleChange}
                    // style={{ border: emptyFields.includes('translation') ? '1px solid red' : 'none' }}
                    className={emptyFields.translation ? styles.border__error : ''}
                />
            </td>
            <button disabled={btnDisabled} onClick={handleSave}>Save</button>
            <button onClick={handleClose}>Close</button>
        </tr>
    ) : (
        <tr>
            <td>{id}</td>
            <td>{value.word}</td>
            <td>{value.transcription}</td>
            <td>{value.translation}</td>
            <td>
                <td>
                    <button onClick={handleEdit}>Edit</button>
                    <button>Delete</button>
                </td>
            </td>
        </tr>
    );
};
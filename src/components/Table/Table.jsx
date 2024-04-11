import React, { useState } from "react";
import words from "../../data/words";
import "./Table.css";

const Table = () => {

    return (
        <div className="table">
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
    const [emptyFields, setEmptyFields] = useState([]);


   function handleClose() {
        setIsSelected(!isSelected);
        setValue({ ...rowData });
        setEmptyFields([]);
    }

    function handleSave() {
        setValue({ ...value });
        setIsSelected(!isSelected);
        setEmptyFields([]);
    }

    function handleEdit() {
        setIsSelected(!isSelected);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setValue((prevValue) => {
            return { ...prevValue, [name]: value };
        });


   // Проверка на пустые поля
        if (value.trim() === '') {
            if (!emptyFields.includes(name)) {
                setEmptyFields([...emptyFields, name]);
            }
        } else {
            setEmptyFields(emptyFields.filter(field => field !== name));
        }
    }

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
                    style={{ border: emptyFields.includes('word') ? '1px solid red' : 'none' }}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={value.transcription}
                    name={"transcription"}
                    onChange={handleChange}
                    style={{ border: emptyFields.includes('transcription') ? '1px solid red' : 'none' }}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={value.translation}
                    name={"translation"}
                    onChange={handleChange}
                    style={{ border: emptyFields.includes('translation') ? '1px solid red' : 'none' }}
                />
            </td>
            <button disabled={emptyFields.length > 0} onClick={handleSave}>Save</button>
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
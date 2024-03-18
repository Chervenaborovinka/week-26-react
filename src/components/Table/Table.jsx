import React, { useState } from "react";
import words from "../../data/words";

const Table = () => {

    return (
        <div>
            <table border="1">
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

    function handleClose() {
        setIsSelected(!isSelected);
        setValue({ ...rowData });
    }

    function handleSave() {
        setValue({ ...value });
        setIsSelected(!isSelected);
    }

    function handleEdit() {
        setIsSelected(!isSelected);
    }

    function handleChange(e) {
        setValue((prevValue) => {
            return { ...prevValue, [e.target.name]: e.target.value };
        });
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
                />
            </td>
            <td>
                <input
                    type="text"
                    value={value.transcription}
                    name={"transcription"}
                    onChange={handleChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={value.translation}
                    name={"translation"}
                    onChange={handleChange}
                />
            </td>
            <button onClick={handleSave}>Save</button>
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
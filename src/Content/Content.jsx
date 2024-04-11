import React, { useState } from "react";
import { useLocalStorage } from "react-use";
import AddButton from "../components/AddButton/AddButton"

function Content() {
    const [items, setItems] = useLocalStorage("toDoList", []);
    const [newItem, setNewItem] = useState("");

    const addItem = (e) => {
        e.preventDefault();
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    return (
        <main>
            <AddButton newItem={newItem} setNewItem={setNewItem} addItem={addItem} />
        </main>
    );
}
export default Content;


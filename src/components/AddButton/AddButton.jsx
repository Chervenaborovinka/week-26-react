import React from "react";

function AddButton({ newItem, setNewItem, addItem }) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addItem(e);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit">Add Item</button>
        </form>
    );
}

export default AddButton;


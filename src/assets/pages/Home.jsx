import React, { useState } from 'react';

const Home = ({ setPage }) => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleLogoutClick = () => {
        localStorage.clear();
        setPage('login');
    }

    const handleProfileClick = () => {
        setPage('profile');
    }

    const handleAddItem = (e) => {
        e.preventDefault();
        if (itemName && price && description) {
            if (editIndex !== null) {
                // Editing an existing item
                const updatedItems = [...items];
                updatedItems[editIndex] = { itemName, price, description };
                setItems(updatedItems);
                setEditIndex(null);
            } else {
                // Adding a new item
                setItems([...items, { itemName, price, description }]);
            }
            // Clear input fields after adding/editing item
            setItemName('');
            setPrice('');
            setDescription('');
        } else {
            alert('Please enter all fields');
        }
    }

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    }

    const handleEditItem = (index) => {
        // Set the editIndex and populate input fields with item details
        setEditIndex(index);
        const selectedItem = items[index];
        setItemName(selectedItem.itemName);
        setPrice(selectedItem.price);
        setDescription(selectedItem.description);
    }

    return (
        <div className="home">
            <div className="header">
                <h4 className="logout" onClick={handleLogoutClick}>
                    Logout
                </h4>
                <h4 className="profile" onClick={handleProfileClick}>
                    Profile
                </h4>
            </div>
            <div className="main-box">
                <h2>Welcome to Home Page</h2>
                <form onSubmit={handleAddItem}>
                    <input
                        type="text"
                        placeholder="Item Name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
                </form>
                <div className="item-list">
                    {items.map((item, index) => (
                        <div key={index} className="item">
                            <h3>{item.itemName}</h3>
                            <p>Price: {item.price}</p>
                            <p>Description: {item.description}</p>
                            <div className='buttons'>
                                <button onClick={() => handleDeleteItem(index)}>Delete</button>
                                <button onClick={() => handleEditItem(index)}>Edit</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

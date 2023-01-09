// import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './db.json';
import './card.css'
const { phones, notebooks, accessories } = data;

const renderArr = (arr) => {
    return arr.map(el => {
        return <div className='card'>
            <img src={el.imgLinks[0]} alt="Rasm" />
            <h3>{el.name}</h3>
            <p>Price : {el.price} $</p>
        </div>
    })
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container">
        <h1>This is my first React Application 😎😎</h1>
        <h2 style={{ marginBottom: 25 }}>Phones 👇🏿</h2>
        <div className="box">
            {renderArr(phones)}
        </div>
        <h2 style={{ marginBottom: 25 }}>Notebooks 👇🏿</h2>
        <div className="box">
            {renderArr(notebooks)}
        </div>
        <h2 style={{ marginBottom: 25 }}>Accessories 👇🏿</h2>
        <div className="box">
            {renderArr(accessories)}
        </div>
    </div>
);



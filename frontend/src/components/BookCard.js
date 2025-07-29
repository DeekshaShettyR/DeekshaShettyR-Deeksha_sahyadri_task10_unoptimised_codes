// import React from 'react';
// import './BookCard.css';

// const genreColors = {
//   Fiction: '#ffcccb',
//   NonFiction: '#b2f2bb',
//   Mystery: '#d0ebff',
//   Fantasy: '#f3d9fa',
//   Science: '#fff3bf',
//   Other: '#dee2e6'
// };

// const BookCard = ({ book, onDelete }) => {
//   const genreColor = genreColors[book.genre] || genreColors["Other"];

//   return (
//     // <div className="book-card" style={{ borderLeft: `6px solid ${genreColor}` }}>
//     //   <h3 className="book-title">{book.title}</h3>
//     //   <p><strong>Author:</strong> {book.author}</p>
//     //   <p><strong>Genre:</strong> <span className="genre-tag" style={{ backgroundColor: genreColor }}>{book.genre}</span></p>
//     //   <p><strong>Price:</strong> ₹{book.price}</p>
//     //   <p><strong>Year:</strong> {book.year}</p>
//     //   <button className="delete-btn" onClick={() => onDelete(book._id)}>Delete</button>
//     // </div>
//     <div className="book-card">
//   <div className="book-info">
//     <h3>{book.title}</h3>
//     <p><strong>Author:</strong> {book.author}</p>
//     <p><strong>Genre:</strong> {book.genre}</p>
//     <p><strong>Price:</strong> ₹{book.price}</p>
//     <p><strong>Year:</strong> {book.year}</p>
//   </div>

//   <button onClick={() => handleDelete(book._id)} className="btn btn-danger delete-btn">
//     Delete
//   </button>
// </div>

//   );
// };

// export default BookCard;


import React from "react";
import "./BookCard.css"; // Import card-specific styles
import { FaTrash } from "react-icons/fa";

function BookCard({ book, onDelete }) {
  return (
    <div className="book-card">
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> <span className={`genre-tag genre-${book.genre.toLowerCase()}`}>{book.genre}</span></p>
        <p><strong>Price:</strong> ₹{book.price}</p>
        <p><strong>Year:</strong> {book.year}</p>
      </div>

      <button onClick={() => onDelete(book._id)} className="delete-btn">
        <FaTrash style={{ marginRight: "6px" }} /> Delete
      </button>
    </div>
  );
}

export default BookCard;

import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    const bookHasMissingData = !Object.values(newBook).every(Boolean);

    const handleFormChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({
            title: '',
            author: '',
        });
    };

    // console.log(Object.values(newBook))
    // console.log(newBook)
    // console.log(books)

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Book Title:</label>
                        <input
                            id='title'
                            name='title'
                            value={newBook.title}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Book Author</label>
                        <input
                            id='author'
                            name='author'
                            value={newBook.author}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div>
                        <button type='submit' disabled={bookHasMissingData}>
                            Submit Book
                        </button>
                    </div>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div className='bookCard' key={index}> <h4>{book.title}</h4> by {book.author}</div>
                ))}
            </div>
        </div>
    )
};

export default Bookshelf
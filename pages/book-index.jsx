const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { bookService } from '../services/book.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';

import { BookList } from '../cmps/book-list.jsx';
import { BookFilter } from '../cmps/book-filter.jsx';

export function BookIndex () {
    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState({ name: '', price: '' })

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(setBooks)
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            showSuccessMsg('Book removed!')
            setBooks(updatedBooks)})
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove book, try again please!')
            })
    }

    return <section className="book-index">
        <div> 
            <h1>Welcome book page</h1>
            <BookFilter onSetFilter={onSetFilter} />
            <button><Link to="/book/edit">Add book!</Link></button>
            <BookList books={books} onRemoveBook={onRemoveBook} />
        </div>
    </section>
}
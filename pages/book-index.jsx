const { useState, useEffect } = React

import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/book-list.jsx';
import { BookFilter } from '../cmps/book-filter.jsx';

export function BookIndex () {
    const [filterBy, setFilterBy] = useState({ name: '', price: '' })
    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(setBooks)
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    return <section className="book-index">
        <h1>Welcome book page</h1>
        <BookFilter onSetFilter={onSetFilter} />
        <BookList books={books}/>
    </section>
}
const { useState, useEffect } = React

import { bookService } from '../services/book.service.js'

import { BookList } from '../cmps/book-list.jsx';
import { BookFilter } from '../cmps/book-filter.jsx';
import { BookDetails } from '../cmps/book-details.jsx';


export function BookIndex () {
    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState({ name: '', price: '' })
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(setBooks)
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onSelectBook(bookId) {
        bookService.get(bookId).then(book => {
            setSelectedBook(book)})
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)})
    }

    return <section className="book-index">
         {!selectedBook && <div> 
            <h1>Welcome book page</h1>
            <BookFilter onSetFilter={onSetFilter} />
            <BookList books={books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook}/>
        </div>}
        {selectedBook && <BookDetails
            book={selectedBook}
            onGoBack={() => setSelectedBook(null)}
        />}
    </section>
}
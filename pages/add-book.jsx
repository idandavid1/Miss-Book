const { useState, useEffect, useRef } = React
const { useNavigate } = ReactRouterDOM

import { GoogleBookList } from "../cmps/google-book-list.jsx"

import { googleBookService } from "../services/google-book.service.js"
import { utilService } from "../services/util.service.js"
import { bookService } from '../services/book.service.js'

export function AddBook() {
    const [books, setBooks] = useState(null)
    const [txt, setTxt] = useState('')
    const navigate = useNavigate()
    const debounceLoadBooks = useRef(utilService.debounce(loadBooks)) 

    useEffect(() => {
        loadBooks(txt)
    }, [])
    
    function loadBooks(txt) {
        googleBookService.query(txt).then(setBooks)
    }

    function handleChange({ target }) {
        let { value } = target
        setTxt(value)
        debounceLoadBooks.current(value)
    }

    function onAddBook(bookId) {
        bookService.isHaveBook(bookId).then(isHaveBook => {
            console.log('book:', isHaveBook)
            if(!isHaveBook) {
                googleBookService.get(bookId).then(book => {
                bookService.addGoogleBook(book)
                .then(() => navigate('/book'))
        })
            }
        })
    }

    return <section className="add-book">
        <form>
            <div>
                <label htmlFor="name">Book title:</label>
                <input type="text"
                    id="name"
                    name="name"
                    placeholder="Enter book name"
                    value={txt}
                    onChange={handleChange} />
            </div>
        </form>
        <GoogleBookList books={books} onAddBook={onAddBook} />
    </section>

}
const { useEffect, useState } = React

const { useParams, useNavigate} = ReactRouterDOM

import { bookService } from '../services/book.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';

export function BookEdit() {
    let [book, setBook] = useState(bookService.createEmptyBook())
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(params.bookId) loadBook()
    },[])

    function loadBook() {
        bookService.get(params.bookId).then(setBook)
        .catch((err) => {
            console.log('can not load book', err)
            navigate('/book')
        })
    }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setBook((prevBook) => ({ ...prevBook, [field]: value }))
    }

    function handleChangePrice({ target }) {
        let { value} = target
        setBook((prevBook) => {
            const book = { ...prevBook}
            book.listPrice.amount = +value
            return book
        })
    }

    function onSubmitBook(ev) {
        ev.preventDefault()
        bookService.save(book).then((book) => {
            console.log('book1:', book)
            showSuccessMsg('Book saved!')
            navigate('/book')
        })
    }

    return <section className="book-filter">
        <h2>Add book</h2>
        <form onSubmit={onSubmitBook}>
            <div>
                <label htmlFor="title">Book title:</label>
                <input type="text"
                id="title"
                name="title"
                placeholder="Enter title"
                value={book.title}
                onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="price">price:</label>
                <input type="number"
                id="price"
                name="price"
                placeholder="By price"
                value={book.listPrice.amount}
                onChange={handleChangePrice}/>
            </div>
            <button>Save books</button>
        </form>
    </section>
}
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';
import { bookService } from '../services/book.service.js'

const { useState } = React

export function AddReview({ book, setBook }) {
    const [review, setReview] = useState(bookService.createEmptyReview())

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setReview((prevReview) => ({ ...prevReview, [field]: value }))
    }

    function onSubmitReview(ev) {
        ev.preventDefault()
        const reviews =  book.review
        reviews.push(review)
        const bookToSave =  { ...book, 'review': reviews }
        bookService.save(bookToSave).then((book) => {
            setBook(book)
            console.log('book:', book)
            showSuccessMsg('Review saved!')
        })
    }

    return <section className="add-reviews">
        <form onSubmit={onSubmitReview}>
        <div>
            <label htmlFor="name">full-name:</label>
            <input type="text"
            id="name"
            name="name"
            placeholder="Enter full-name"
            value={review.name}
            onChange={handleChange}/>
        </div>
        <div>
        <label htmlFor="rate">rate:</label>
            <input type="range"
            id="rate"
            name="rate"
            min="0" 
            max="5"
            value={review.rate}
            onChange={handleChange}/>
        </div>
        <div>
        <label htmlFor="readAt">read at:</label>
            <input type="datetime-local"
            id="readAt"
            name="readAt"
            value={review.readAt}
            onChange={handleChange}/>
        </div>
        <button>Save review</button>
        </form>
    </section>
}
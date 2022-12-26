export function BookPreview({ book }) {

    return <article className="book-preview">
        <h2>{book.title}</h2>
        <img src={book.thumbnail} />
        <h3>price: {book.listPrice.amount}</h3>
    </article>
}
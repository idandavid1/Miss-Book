export function BookPreview({ book }) {

    return <article className="book-preview">
        {console.log('book:', book)}
        <h2>{book.title}</h2>
        <h3>price: {book.listPrice.amount}</h3>
        <h3>is on sale: {book.listPrice.isOnSale ? 'yes' : 'no'}</h3>
    </article>
}
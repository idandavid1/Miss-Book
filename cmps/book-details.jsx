import { LongTxt } from "./long-txt.jsx";

export function BookDetails({ book, onGoBack }) {
    function pageCount() {
        const pageCount = book.pageCount
        if(pageCount > 500) return `${pageCount} (Serious Reading)`
        if(pageCount > 200) return `${pageCount} (Descent Reading)`
        if(pageCount < 100) return `${pageCount} (Light Reading)`
        else return pageCount
    }

    function  publishedDate() {
        const publishedDate = book.publishedDate
        const currYear = (new Date()).getFullYear()
        
        if(currYear - publishedDate > 10) return `${publishedDate} (Vintage)`
        if(currYear - publishedDate < 1) return `${publishedDate} (New)`
        else return publishedDate
    }

    function priceClass() {
        const price = +book.listPrice.amount
        if(price > 150) return 'red'
        if(price < 20) return 'green'
        else return ''
    }
    return <section className="book-details">
        <div className="details-container">
            <h1>{book.title}</h1>
            <h3>subtitle: {book.subtitle}</h3>
            <h3>authors</h3>
            <ul>
            {book.authors.map((author, idx) => <li key={idx}>{author}</li>)}
            </ul>
            <h3>publishedDate: {publishedDate()}</h3>
            <img src={book.thumbnail} />
            <h3>description: <LongTxt txt={book.description}/></h3>
            <h3>categories</h3>
            <ul>
            {book.categories.map((category, idx) => <li key={idx}>{category}</li>)}
            </ul>
            <h3 className={priceClass()}>price: {book.listPrice.amount}</h3>
            <h3>Number of page: {pageCount()}</h3>
            <h3>is on sale: {book.listPrice.isOnSale ? 'yes' : 'no'}</h3>
            <button onClick={onGoBack}>Go Back</button>
        </div>
    </section>
}
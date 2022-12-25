import { storageService } from './async-storage.service.js'

const BOOKS_KEY = 'booksDB'
export const bookService = {
    query
}

function query(filterBy) {
    return storageService.query(BOOKS_KEY).then(books => {
        if(books.length === 0) books = _createBooks()

        if (filterBy.name) {
          const regex = new RegExp(filterBy.name, 'i')
          books = books.filter(book => regex.test(book.title))
      }
      if (filterBy.price) {
        console.log('filterBy.price:', filterBy.price)
         books = books.filter(book => book.listPrice.amount <= filterBy.price)
      }
      
      return books
    })
}

function _createBooks() {
    return [
        {
          "id": "OXeMG8wNskc",
          "title": "metus hendrerit",
          "listPrice": {
            "amount": 109,
            "currencyCode": "EUR",
            "isOnSale": false
          }
        },
        {
          "id": "JYOJa2NpSCq",
          "title": "morbi",
          "listPrice": {
            "amount": 44,
            "currencyCode": "EUR",
            "isOnSale": true
          }
        },
        {
          "id": "1y0Oqts35DQ",
          "title": "at viverra venenatis",
          "listPrice": {
            "amount": 108,
            "currencyCode": "ILS",
            "isOnSale": false
          }
        }
    ]
}
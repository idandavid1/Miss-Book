const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { BookEdit } from "./cmps/book-edit.jsx"
import { BookDetails } from "./cmps/book-details.jsx"
import { Header } from "./cmps/header.jsx"
import { About } from './pages/about.jsx'
import { BookIndex } from './pages/book-index.jsx'
import {Home} from './pages/home.jsx'
import { UserMsg } from "./cmps/user-message.jsx"

export function App() {
    return <Router>
        <section className="app">
            <Header />
            <main className='layout'>
                <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<About />} path="/about" />
                        <Route element={<BookIndex />} path="/book" />
                        <Route element={<BookEdit />} path="/book/edit" />
                        <Route element={<BookEdit />} path="/book/edit/:bookId" />
                        <Route element={<BookDetails />} path="/book/:bookId" />
                    </Routes>
            </main>
            <UserMsg />
        </section>
    </Router>
}
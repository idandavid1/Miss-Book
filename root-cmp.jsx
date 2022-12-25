const { useState } = React

import { About } from './pages/about.jsx'
import { BookIndex } from './pages/book-index.jsx'
import {Home} from './pages/home.jsx'

export function App() {
    let [page, setPage] = useState('home')
    return <section className="app">
        <header className="app-header">
            <h1>My Book App</h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home</a> | 
                <a href="#" onClick={() => setPage('about')}>About</a> | 
                <a href="#" onClick={() => setPage('book')}>Books</a>
            </nav>
        </header>
        <main>
            {page === 'home' && <Home/>}
            {page === 'about' && <About/>}
            {page === 'book' && <BookIndex/>}
        </main>
    </section>
}
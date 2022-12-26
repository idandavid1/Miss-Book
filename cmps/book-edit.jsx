const { useEffect, useState } = React

const { useParams, useNavigate} = ReactRouterDOM

export function BookEdit() {
    
    return <section className="book-filter">
        <h2>Add book</h2>
        <form onSubmit={onSubmitBook}>
            <div>
                <label htmlFor="name">Book title:</label>
                <input type="text"
                id="name"
                name="name"
                placeholder="Enter title"
                value={1}
                onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="price">price:</label>
                <input type="number"
                id="price"
                name="price"
                placeholder="By price"
                value={1}
                onChange={handleChange}/>
            </div>
            <button>Save books</button>
        </form>
    </section>
}
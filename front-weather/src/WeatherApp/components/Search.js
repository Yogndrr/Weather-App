import React from 'react'
import "./Search.css"

const Search = ({ input, changeHandler, submitHandler }) => {
    return (
        <form className="search-container" onSubmit={submitHandler}>
            <input type="text" value={input}
                onChange={changeHandler} placeholder="e.g. Dehradun,Delhi"
                className="search-input" />
        </form>
    )
}

export default Search

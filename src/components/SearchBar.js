import React, {useState} from "react";

function SearchBar() {
    const [textValue, setTextValue] = useState('');


    return (
        <>
            <p>{textValue}</p>
            <input 
                id='textValue'
                name='textValue'
                type='text'
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
            />
            <br />
            <button type='submit'>Search</button>
        </>
    );
}

export default SearchBar;
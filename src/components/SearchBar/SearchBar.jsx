import { useState } from 'react'
import { fetchFilms } from "../../redux/slices/filmsSlice";
import { useAppDispatch } from "../../hooks";
import './SearchBar.css'

export const SearchBar = () => {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    const handleOnClick = () => {
        dispatch(fetchFilms(value));
        setValue('');
    }

    return (
        <div className='searchBar-container'>
            <input className='searchBar-input' type='text' placeholder='Search film by name ...' value={value} onChange={handleOnChange}></input>
            <button className='searchBar-button' onClick={handleOnClick}>Search</button>
        </div>
    )
}

import PropTypes from 'prop-types';
import './Film.css'

export const Film = ({ film, handleFilmClick }) => {
    return (
        <div className='film-component' id={film.imdbID}>
            <img className='film-poster' src={film.Poster} alt={film.Title} onClick={() => handleFilmClick(film)}/>
            <div className='film-title'>{film.Title}</div>
            <div className='film-year'>{film.Year}</div>
        </div>
    )
}

Film.propTypes = {
    film: PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
        Poster: PropTypes.string,
        Title: PropTypes.string,
        Year: PropTypes.string,
    }).isRequired,
    handleFilmClick: PropTypes.func.isRequired,
};

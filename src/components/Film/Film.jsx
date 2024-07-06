import PropTypes from 'prop-types';
import './Film.css'

export const Film = ({ film, onClick }) => {
    return (
        <div className='film-component' id={film.imdbID} onClick={onClick}>
            <img className='film-poster' src={film.Poster} alt={film.Title} />
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
    onClick: PropTypes.func.isRequired,
};

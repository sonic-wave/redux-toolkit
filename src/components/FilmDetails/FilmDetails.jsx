import { useLocation, useNavigate } from 'react-router-dom';
import './FilmDetails.css';

export const FilmDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { filmDetails } = location.state || {};

    const handleGoBack = () => {
        navigate('/');
    };


    if (!filmDetails) {
        return <div>Film not found!</div>;
    }

    return (
        <div className='film-detail-container'>
            <button className="film-detail-backBtn" onClick={handleGoBack}>
                Go back
            </button>
            <h2>{filmDetails.Title}</h2>
            <img src={filmDetails.Poster} alt={filmDetails.Title} />
            <p><strong>Year:</strong> {filmDetails.Year}</p>
            <p><strong>Genre:</strong> {filmDetails.Genre}</p>
            <p><strong>Runtime:</strong> {filmDetails.Runtime}</p>
            <p><strong>Director:</strong> {filmDetails.Director}</p>
            <p><strong>Actors:</strong> {filmDetails.Actors}</p>
            <p><strong>Rating:</strong> {filmDetails.imdbRating}</p>
        </div>
    );
};

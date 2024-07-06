import { fetchFilmDetails } from "../../redux/slices/filmsSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Film } from "../Film/Film";
import './FilmsList.css'
import { SearchBar } from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

export const FilmsList = () => {
  const { films, loading, error } = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFilmClick = async (film) => {
    const resultAction = await dispatch(fetchFilmDetails(film.imdbID));
    if (fetchFilmDetails.fulfilled.match(resultAction)) {
      navigate(`/films/${film.imdbID}`, { state: { filmDetails: resultAction.payload } });
    }
  };

  return (
    <>
      <SearchBar />
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      <div className="films-container">
        {films.Search && films.Search.map((film) => (
          <Film film={film} onClick={() => handleFilmClick(film)} key={film.imdbID} />
        ))}
      </div>
    </>
  );
};

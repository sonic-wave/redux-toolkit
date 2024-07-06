import {
    buildCreateSlice,
    asyncThunkCreator,
} from "@reduxjs/toolkit";

const initialState = {
    films: [],
    loading: false,
    error: "",
    filmDetails: null
};

const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const filmsSlice = createSliceWithThunk({
    name: "films",
    initialState,
    selectors: {
        filmsState: (state) => state,
        filmsList: (state) => state.films.Search,
        filmDetails: (state) => state.filmDetails,
    },
    reducers: (create) => ({
        removeFilm: create.reducer((state, action) => {
            state.films.Search = state.films.Search.filter((film) => film.imdbID !== action.payload);
        }),
        fetchFilms: create.asyncThunk(
            async (filmName, { rejectWithValue }) => {
                try {
                    const response = await fetch(`https://www.omdbapi.com/?apikey=9713c5e7&s=${filmName}`);

                    if (!response.ok) {
                        return rejectWithValue("Loading films error!");
                    }
                    const result = await response.json();
                    return result;
                } catch (e) {
                    return rejectWithValue(e);
                }
            },
            {
                pending: (state) => {
                    state.loading = true;
                    state.error = "";
                },
                fulfilled: (state, action) => {
                    if (action.payload.Error === "Movie not found!") {
                        state.error = 'Movie not found!';
                    } else {
                        state.films = action.payload;
                        state.error = "";
                    }
                },
                rejected: (state, action) => {
                    state.error = action.payload;
                },
                settled: (state) => {
                    state.loading = false;
                },
            }
        ),
        fetchFilmDetails: create.asyncThunk(
            async (imdbID, { rejectWithValue }) => {
                try {
                    const response = await fetch(`https://www.omdbapi.com/?apikey=9713c5e7&i=${imdbID}`);
                    if (!response.ok) {
                        return rejectWithValue("Loading film details error!");
                    }
                    const result = await response.json();
                    return result;
                } catch (e) {
                    return rejectWithValue(e);
                }
            },
            {
                pending: (state) => {
                    state.loading = true;
                    state.error = "";
                },
                fulfilled: (state, action) => {
                    state.filmDetails = action.payload;
                    state.error = "";
                },
                rejected: (state, action) => {
                    state.error = action.payload;
                },
                settled: (state) => {
                    state.loading = false;
                },
            }
        ),
    }),
});

export const { removeFilm, fetchFilms, fetchFilmDetails } = filmsSlice.actions;
export default filmsSlice.reducer;
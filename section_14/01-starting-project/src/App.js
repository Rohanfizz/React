import React, { useState, useCallback,useEffect } from "react";
import ReactLoading from "react-loading";
import MoviesList from "./components/MoviesList";
import "./App.css";

// const dummyMovies = [
//   {
//     id: 1,
//     title: 'Some Dummy Movie',
//     openingText: 'This is the opening text of the movie',
//     releaseDate: '2021-05-18',
//   },
//   {
//     id: 2,
//     title: 'Some Dummy Movie 2',
//     openingText: 'This is the second opening text of the movie',
//     releaseDate: '2021-05-19',
//   },
// ];
function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch("https://swapi.dev/api/films");
			if (!response.ok) {
				console.log(response.status);
				throw new Error("Something Went Wrong....");
			}
			const data = await response.json();

			const transformedMovies = data.results.map((movieData) => {
				return {
					id: movieData.episode_id,
					title: movieData.title,
					releaseDate: movieData.release_date,
					openingText: movieData.opening_crawl,
				};
			});
			setMovies(transformedMovies);
		} catch (err) {
			setError(err.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(()=>{
		fetchMoviesHandler();
	},[fetchMoviesHandler]);

	

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && movies.length > 0 && (
					<MoviesList movies={movies} />
				)}
				{!isLoading && error && <p>{error}</p>}
				{!isLoading && movies.length === 0 && !error && (
					<p>Found No Movies</p>
				)}
				{isLoading && (
					<ReactLoading
						type="bars"
						color="black"
						height={50}
						width={50}
						className="loading"
					/>
				)}
			</section>
		</React.Fragment>
	);
}

export default App;

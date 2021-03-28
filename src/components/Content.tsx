import { MovieCard } from './MovieCard'

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MoviesProps {
  movies: MovieProps[];
  title: string;
}

export function Content({ movies, title }: MoviesProps) {
  // Complete aqui
  return (
    <>
      <header>
        <span className="category">Categoria:<span> {title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard 
              key ={movie.imdbID} 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} 
            />
          ))}
        </div>
      </main>
    </>
  )
}
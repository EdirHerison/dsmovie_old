
import MovieScore from "../../Components/MovieScores";

function MovieCard(){

    const movie = {
        id: 1,
        Image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return(
        <div>
            <img className='dsmovie-movie-card-image' src={movie.Image} alt={movie.title} />
            <div className='dsmovie-card-button-container'>
                <h3>{movie.title}</h3>
                <MovieScore />
                <div className='btn btn-primary dsmovie-btn'>Avaliar</div>
            </div>
        </div>
    );
}

export default MovieCard;
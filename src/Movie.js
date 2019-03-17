import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LineEllipsis from 'react-lines-ellipsis';


// class Movie extends Component {

//     static propType = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )

//     }
// }
function Movie({ title, poster, genres ,synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
            </div>
            <div className="Movie__Genres">
                {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>)}
            </div>
            <div className="Movie__Synopsis">
            <LineEllipsis
                text={synopsis}
                maxLine="3"
                ellipsis="--more--"
                trimRight
                basedOn='letters'
            />
            </div>

        </div>
    )
}
function MovieGenre({genre})    {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}
function MoviePoster({ poster, alt }) {
    return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
MovieGenre.propTypes={
    genre: PropTypes.string.isRequired
}
export default Movie;
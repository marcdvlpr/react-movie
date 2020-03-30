import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledMovieInfo,
  MovieInfoContent,
  MovieInfoThumb,
  MovieInfoContainer,
  MovieInfoTitle,
  MovieInfoSubtitle,
  MovieInfoText,
  MovieInfoDetails,
  MovieInfoItems,
  MovieInfoRating,
  MovieTrailer,
} from './style';
import { MovieThumb } from '../../components/Thumb';
import { TrailerButton } from '../../components/Button/TrailerButton';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.png';

const MovieInfo = ({ movie }) => {
  return (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
      <MovieInfoContent>
        <MovieInfoThumb>
          <MovieThumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
          />
        </MovieInfoThumb>

        <MovieInfoContainer>
          <MovieInfoTitle>{movie.original_title}</MovieInfoTitle>
          <MovieInfoSubtitle>SYNOPSIS</MovieInfoSubtitle>
          <MovieInfoText>{movie.overview}</MovieInfoText>

          <MovieInfoDetails>
            <MovieInfoItems>
              <MovieInfoSubtitle>IMDB RATING</MovieInfoSubtitle>
              <MovieInfoRating>{movie.vote_average}</MovieInfoRating>
            </MovieInfoItems>

            <MovieInfoItems>
              <MovieInfoSubtitle>
                DIRECTOR{movie.directors.length > 1 ? 'S' : ''}
              </MovieInfoSubtitle>
              {movie.directors
                ? movie.directors.map((el) => (
                    <MovieInfoText key={el.credit_id}>{el.name}</MovieInfoText>
                  ))
                : null}
            </MovieInfoItems>
          </MovieInfoDetails>
          <MovieTrailer>
            <TrailerButton title='Trailer' />
          </MovieTrailer>
        </MovieInfoContainer>
      </MovieInfoContent>
    </StyledMovieInfo>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;

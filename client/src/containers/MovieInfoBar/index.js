import React from 'react';
import {
  StyledMovieInfoBar,
  MovieInfoBarContent,
  MovieInfoBarItem,
  TimeIcon,
  DateIcon,
  MovieInfoBarText
} from './style';

const MovieInfoBar = ({ time, date }) => {
  return (
    <StyledMovieInfoBar>
      <MovieInfoBarContent>

        <MovieInfoBarItem>
          <TimeIcon />
          <MovieInfoBarText>
            Running time: {time}
          </MovieInfoBarText>
        </MovieInfoBarItem>

        <MovieInfoBarItem>
          <DateIcon />
          <MovieInfoBarText>
            Release date: {date}
          </MovieInfoBarText>
        </MovieInfoBarItem>

      </MovieInfoBarContent>
    </StyledMovieInfoBar>
  );
};

export default MovieInfoBar;

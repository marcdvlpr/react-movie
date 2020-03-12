import React from 'react';
import {
  StyledMovieInfoBar,
  MovieInfoBarContent,
  MovieInfoBarItem,
  TimeIcon,
  DateIcon,
  MovieInfoBarText
} from './style';
import { calcTime, calcDate } from '../../helpers';

const MovieInfoBar = ({ time, date }) => {
  return (
    <StyledMovieInfoBar>
      <MovieInfoBarContent>

        <MovieInfoBarItem>
          <TimeIcon />
          <MovieInfoBarText>
            Running time: {calcTime(time)}
          </MovieInfoBarText>
        </MovieInfoBarItem>

        <MovieInfoBarItem>
          <DateIcon />
          <MovieInfoBarText>
            Release date: {calcDate(date)}
          </MovieInfoBarText>
        </MovieInfoBarItem>

      </MovieInfoBarContent>
    </StyledMovieInfoBar>
  );
};

export default MovieInfoBar;

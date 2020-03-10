import React from 'react';
import { StyledActor, ActorName, ActorCharacter } from './style';
import { ActorThumb } from '../../components/Thumb';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.png';

const Actor = ({ actor }) => {
  return (
    <StyledActor>
      <ActorThumb
        key={actor.id}
        image={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
      />
      <ActorName>{actor.name}</ActorName>
      <ActorCharacter>{actor.character}</ActorCharacter>
    </StyledActor>
  );
};

export default Actor;

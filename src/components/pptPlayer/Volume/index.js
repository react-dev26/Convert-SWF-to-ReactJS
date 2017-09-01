import React from 'react';
import { VolumeSlider } from 'react-player-controls';

function Volume() {
  return (
    <div>
    <VolumeSlider
      volume={volumeBetweenZeroAndOne}
      onVolumeChange={handleVolumeChange}
      isEnabled={somePredicate}
    />
    </div>
  );
}
export default Volume;

// RandomTextComponent.js

import React from 'react';
import RandomText from 'randomtext';

const RandomTextComponent = () => {
  const generateRandomText = () => {
    // Generate random text based on a template
    const text = RandomText.make('{{sentence}} {{sentence}}');

    return text;
  };

  return (
    <div>
      <h2>Generated Random Text</h2>
      <p>{generateRandomText()}</p>
    </div>
  );
};

export default RandomTextComponent;

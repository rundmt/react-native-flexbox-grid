'use strict';

import React from 'react-native';

var {
  Dimensions
} = React;

function setScreenSize(){
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const IPAD_WIDTH = 768;
  const IPAD_PRO_WIDTH = 1024;

  if(SCREEN_WIDTH < IPAD_WIDTH){
    return 'small';
  }
  if(SCREEN_WIDTH >= IPAD_WIDTH  && SCREEN_WIDTH < IPAD_PRO_WIDTH){
    return  'medium';
  }
  if(SCREEN_WIDTH >= IPAD_PRO_WIDTH){
    return 'large';
  }
}

export const screenSize = setScreenSize();

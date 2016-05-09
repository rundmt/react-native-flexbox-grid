'use strict';

import React, {Component, PropTypes} from 'react';
import {screenSize} from '../lib/ScreenSize';
import {isHidden, getComponentWidth, getComponentOffset} from '../lib/helpers';
import {View} from 'react-native';

export default class Column extends Component {
  render(){
    if(isHidden(screenSize, this.props)){
      return null;
    } else {
      return (
        <View
        {...this.props}
        style={[this.props.style, {width: getComponentWidth(screenSize, this.props), flexDirection: 'column', marginLeft: getComponentOffset(screenSize, this.props)}]}>
          {this.props.children}
        </View>
      );
    }
  }
}

Column.propTypes = {
  sm: PropTypes.number,
  smOffset: PropTypes.number,
  smHidden: PropTypes.bool,
  md: PropTypes.number,
  mdOffset: PropTypes.number,
  mdHidden: PropTypes.bool,
  lg: PropTypes.number,
  lgOffset: PropTypes.number,
  lgHidden: PropTypes.bool,
  width: PropTypes.number
};

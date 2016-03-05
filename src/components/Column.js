'use strict';

import React from 'react-native';
import {screenSize} from '../lib/ScreenSize';

var {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
} = React;

export default class Column extends Component {
  constructor(props){
    super(props);
    this.screenSize = screenSize;
    this.state = {
      width: this.getComponentWidth(),
      marginLeft: this.getComponentOffset(),
      hidden: this.isHidden(),
    };
  }

  getComponentWidth(){
    switch(this.screenSize) {
      case 'small':
        if(this.props.sm){
          return this.props.parentWidth * this.props.sm/this.props.rowSize;
        } else {
          return this.props.parentWidth;
        }
        break;
      case 'medium':
        if(this.props.md){
          return this.props.parentWidth * this.props.md/this.props.rowSize;
        } else if(this.props.sm){
          return this.props.parentWidth * this.props.sm/this.props.rowSize;
        } else {
          return this.props.parentWidth;
        }
        break;
      case 'large':
        if(this.props.lg){
          return this.props.parentWidth * this.props.lg/this.props.rowSize;
        } else if(this.props.md){
          return this.props.parentWidth * this.props.md/this.props.rowSize;
        } else if(this.props.sm){
          return this.props.parentWidth * this.props.sm/this.props.rowSize;
        } else {
          return this.props.parentWidth;
        }
        break;
      default:
        return this.props.parentWidth;
    }
  }

  getComponentOffset(){
    switch(this.screenSize) {
      case 'small':
        if(this.props.smOffset){
          return this.props.parentWidth * this.props.smOffset/this.props.rowSize;
        } else {
          return 0;
        }
        break;
      case 'medium':
        if(this.props.mdOffset){
          return this.props.parentWidth * this.props.mdOffset/this.props.rowSize;
        } else if(this.props.smOffset){
          return this.props.parentWidth * this.props.smOffset/this.props.rowSize;
        } else {
          return 0;
        }
        break;
      case 'large':
        if(this.props.lgOffset){
          return this.props.parentWidth * this.props.lgOffset/this.props.rowSize;
        } else if(this.props.mdOffset){
          return this.props.parentWidth * this.props.mdOffset/this.props.rowSize;
        } else if(this.props.smOffset){
          return this.props.parentWidth * this.props.smOffset/this.props.rowSize;
        } else {
          return 0;
        }
        break;
      default:
        return 0;
    }
  }

  isHidden(){
    switch(this.screenSize) {
      case 'small':
        return this.props.smHidden;
      case 'medium':
        return this.props.mdHidden;
      case 'large':
        return this.props.lgHidden;
      default:
        return false;
    }
  }

  render() {
    if(this.state.hidden){
      return null;
    } else {
      return (
        <View
        {...this.props}
        style={[this.props.style, {width: this.state.width, flexDirection: 'column', marginLeft: this.state.marginLeft}]}>
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

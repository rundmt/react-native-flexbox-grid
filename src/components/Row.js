'use strict';

import React from 'react-native';
import {screenSize} from '../lib/ScreenSize';

var {
  Component,
  Dimensions,
  StyleSheet,
  PropTypes,
  View,
} = React;

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Row extends Component {
  constructor(props){
    super(props);
    this.screenSize = screenSize;
    this.state = {
      width: SCREEN_WIDTH,
      updated: false,
      hidden: this.isHidden(),
    };
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

  getWidth(res){
    this.setState({width: res.nativeEvent.layout.width, updated: true });
  }

  render() {
    //if row doesn't or is 0 exist default to 12
    let rowSize = this.props.size > 0 ? this.props.size : 12;
    if(this.state.hidden){
      return null;
    } else {
      return (
        <View {...this.props} onLayout={this.getWidth.bind(this)} style={[styles.container, this.props.style, {flexWrap: this.props.wrap ? 'wrap' : 'nowrap'}, {alignItems: this.props.alignItems, justifyContent: this.props.justifyContent}]}>
            {React.Children.map(this.props.children, (element, idx) => {
              // Check if state is updated before cloning. Causes Layout to be slower, but stable.
              if(this.state.updated){
                return React.cloneElement(element, {parentWidth: this.state.width, rowSize: rowSize});
              }
            })}
        </View>
      );
    }
  }
}

Row.propTypes = {
  size: PropTypes.number,
  smHidden: PropTypes.bool,
  mdHidden: PropTypes.bool,
  lgHidden: PropTypes.bool,
};

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

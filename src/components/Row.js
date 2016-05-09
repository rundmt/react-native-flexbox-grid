'use strict';

import React, {Component, PropTypes} from 'react';
import {screenSize} from '../lib/ScreenSize';
import {isHidden} from '../lib/helpers';
import {View} from 'react-native';

export default class Row extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0
    };
  }

  _getWidth(res){
    this.setState({width: res.nativeEvent.layout.width});
  }

  _cloneElements(){
    // Check if state is updated before cloning. Causes layout to rerender less.
    if(this.state.width > 0){
      //if size doesn't exist or is 0 default to 12
      const rowSize = this.props.size > 0 ? this.props.size : 12;

      return React.Children.map(this.props.children, (element) => {
        return React.cloneElement(element, {parentWidth: this.state.width, rowSize: rowSize});
      });
    }
  }

  render() {
    if(isHidden(screenSize, this.props)){
      return null;
    } else {
      return (
        <View {...this.props}
          onLayout={this._getWidth.bind(this)}
          style={[this.props.style,
                  { flexDirection: 'row',
                    flexWrap: this.props.nowrap ? 'nowrap' : 'wrap',
                    alignItems: this.props.alignItems,
                    justifyContent: this.props.justifyContent}]}>
            {this._cloneElements()}
        </View>
      );
    }
  }
}

Row.propTypes = {
  size: PropTypes.number,
  nowrap: PropTypes.bool,
  smHidden: PropTypes.bool,
  mdHidden: PropTypes.bool,
  lgHidden: PropTypes.bool,
};

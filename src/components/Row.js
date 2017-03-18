import React, {Component, PropTypes} from 'react';
import {screenSize} from '../lib/ScreenSize';
import {isHidden} from '../lib/helpers';
import {View} from 'react-native';

export default class Row extends Component {
  _cloneElements(){
      //if size doesn't exist or is 0 default to 12
      const rowSize = this.props.size > 0 ? this.props.size : 12;

      return React.Children.map(this.props.children, (element) => {
        return React.cloneElement(element, {rowSize: rowSize});
      });
  }

  render() {
    if(isHidden(screenSize, this.props)){
      return null;
    } else {
      return (
        <View {...this.props}
          style={[this.props.style,
                  { flexDirection: 'row',
                    flexWrap: this.props.nowrap ? 'nowrap' : 'wrap',
                    alignItems: this.props.alignItems,
                    justifyContent: this.props.justifyContent,
                    width: '100%'
                  }]}>
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

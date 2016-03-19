module.exports.isHidden = function(screenSize, props){
  switch(screenSize) {
    case 'small':
      return props.smHidden ? true : false;
    case 'medium':
      return props.mdHidden ? true : false;
    case 'large':
      return props.lgHidden ? true : false;
    default:
      return false;
  }
};

module.exports.getComponentWidth = function(screenSize, props){
  switch(screenSize) {
    case 'small':
      if(props.sm){
        return props.parentWidth * props.sm/props.rowSize;
      } else {
        return props.parentWidth;
      }
      break;
    case 'medium':
      if(props.md){
        return props.parentWidth * props.md/props.rowSize;
      } else if(props.sm){
        return props.parentWidth * props.sm/props.rowSize;
      } else {
        return props.parentWidth;
      }
      break;
    case 'large':
      if(props.lg){
        return props.parentWidth * props.lg/props.rowSize;
      } else if(props.md){
        return props.parentWidth * props.md/props.rowSize;
      } else if(props.sm){
        return props.parentWidth * props.sm/props.rowSize;
      } else {
        return props.parentWidth;
      }
      break;
    default:
      return props.parentWidth;
  }
};

module.exports.getComponentOffset = function(screenSize, props){
  switch(screenSize) {
    case 'small':
      if(props.smOffset){
        return props.parentWidth * props.smOffset/props.rowSize;
      } else {
        return 0;
      }
      break;
    case 'medium':
      if(props.mdOffset){
        return props.parentWidth * props.mdOffset/props.rowSize;
      } else if(props.smOffset){
        return props.parentWidth * props.smOffset/props.rowSize;
      } else {
        return 0;
      }
      break;
    case 'large':
      if(props.lgOffset){
        return props.parentWidth * props.lgOffset/props.rowSize;
      } else if(props.mdOffset){
        return props.parentWidth * props.mdOffset/props.rowSize;
      } else if(props.smOffset){
        return props.parentWidth * props.smOffset/props.rowSize;
      } else {
        return 0;
      }
      break;
    default:
      return 0;
  }
};

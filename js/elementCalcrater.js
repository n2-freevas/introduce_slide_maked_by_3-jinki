/* return Element Height (margin + border + padding + content) */
const getBoundingSize = (element) => {
    const { width, height } = element.getBoundingClientRect();
    return { width, height };
  };
  
  const getElementMargin = (element) => {
    const styles = window.getComputedStyle(element);
    return ['top', 'right', 'bottom', 'left'].reduce((obj, key) => {
      return {
        ...obj,
        [key]: parseFloat(styles.getPropertyValue(`margin-${key}`)) || 0,
      };
    });
  };
  
  const getOccupancyElement = (element) => {
    const {top, right, bottom, left} = getElementMargin(element);
    const {width, height } = getBoundingSize(element);
    return {
      width: width + right + left,
      height: height + top + bottom,
    };
  };
  const getOccupancyElementHeight_bottom = (element) => {
    const {top, right, bottom, left} = getElementMargin(element);
    const {width, height } = getBoundingSize(element);
    return  height + bottom
  };

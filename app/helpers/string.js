export const capitalizeFirstLetter = (string = '') => {
    const words = string.split(' ')
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
};
   
export const toPhoneNumber = (text = '') => {
    const modText = text.replace(/[^\d]/g, '');
    return modText.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
  };
/**
 * Virutal representation of a Text Node
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Text
 * @param {String} text
 */
const RektText = function RektText(text) {
    this.type = 'RektText';
    this.text = text;
};

export default RektText;

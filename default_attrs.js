/**
 * Returns default SVG attributes for a circle-flag component.
 * @param {number} size - Width and height in pixels (default 512)
 * @returns {object} SVG attribute object
 */
export default function(size = 512) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
    width: size,
    height: size,
  }
}

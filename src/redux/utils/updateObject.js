/** UTILS | Update Object
 *
 * @param {Object} object
 * @param {string|string[]} newValues
 */

function updateObject(object, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating

  return Object.assign({}, object, newValues);
}

export default updateObject;

/** UTILS | Update Item In Array
 *
 * @param {[]} array
 * @param {string|number} itemID
 * @callback updateItemCallback
 */

function updateItemInArray(array, itemID, updateItemCallback) {
  const updatedItems = array.map(item => {
    if (item.id !== itemID) {
      // Since we only want to update one item, preserve all others as they are now
      return item;
    }

    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}

export default updateItemInArray;

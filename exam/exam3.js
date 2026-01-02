// Global array variable
let globalList = [];

/**
 * Adds items from newList to globalList if they don't already exist
 * @param {Array} newList - Array of items to add
 */
function addToList(newList) {
    if (!Array.isArray(newList)) {
        throw new Error("Parameter must be an array");
    }

    newList.forEach(item => {
        if (!globalList.includes(item)) {
            globalList.push(item);
        }
    });
}

// call function
addToList([1, 2, 3]);
console.log(globalList); 
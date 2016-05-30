/**
 * Logic to get new state of life
 * @param {*[]} currentMatrix
 * @returns {*[]}
 */
export default function (currentMatrix) {
    let newMatrix = [];

    // TODO: implement this function
    // demo code
    for (let row in currentMatrix) {
        newMatrix[row] = [];
        for (let col in currentMatrix[row]) {
            newMatrix[row][col] = Math.round(Math.random());
        }
    }

    return newMatrix;
}

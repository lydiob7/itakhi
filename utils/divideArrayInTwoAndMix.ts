import shuffleArray from "./shuffleArray";

function divideArrayInTwoAndMix<T>(arr: T[]) {
    const middleIndex = Math.floor(arr.length / 2);
    const shuffledArray = shuffleArray(arr);

    const leftPart = shuffledArray.slice(0, middleIndex);
    const rightPart = shuffledArray.slice(middleIndex);

    return [leftPart, rightPart];
}

export default divideArrayInTwoAndMix;

import readInput from "../../../utils/readInput";

const input = await readInput();

const uncorruptedMul = /mul\(\d+,\d+\)/g;
const numberExtraction = /\d+/g;

const mul = (a: number, b: number) => a * b;

const result = input
  .flatMap((line) => line.match(uncorruptedMul))
  .map((instructions) => {
    const [a, b] = instructions!.match(numberExtraction)!.map(Number);
    return mul(a, b);
  })
  .reduce((acc, curr) => acc + curr, 0);

console.log(result);

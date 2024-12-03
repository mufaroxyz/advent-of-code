import readInput from "../../../utils/readInput";

const input = await readInput();

const uncorruptedMul = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g; // stolen regex
const numberExtraction = /\d+/g;

const mul = (a: number, b: number) => a * b;

const oneLine = input.join("");
const match = [...oneLine.matchAll(uncorruptedMul)].map((el) => el[0]);

let answer = 0;
let read = true;

for (const token of match) {
  if (token == "do()") read = true;
  else if (token == "don't()") read = false;
  else {
    if (!read) continue;

    const [a, b] = token.match(numberExtraction)!.map(Number);
    answer += mul(a, b);
  }
}

console.log(answer);

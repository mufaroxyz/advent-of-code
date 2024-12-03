import readInput from "../../../utils/readInput";

const input = await readInput();

const [left, right] = input
  .reduce(
    (acc, l) => {
      const [a, b] = l.split("   ");
      acc[0].push(a);
      acc[1].push(b);
      return acc;
    },
    [[], []] as [string[], string[]],
  )
  .map((side) => side.filter((v) => v).map((v) => parseInt(v)));

const similarityScore = left.reduce(
  (acc, v) => acc + v * right.filter((r) => r === v).length,
  0,
);

console.log(similarityScore);

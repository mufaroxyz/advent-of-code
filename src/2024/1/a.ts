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
  .map((side) =>
    side
      .toSorted()
      .filter((v) => v)
      .map((v) => parseInt(v)),
  );

let differenceSum = 0;

for (let i = 0; i <= left.length; i++) {
  const acc = left[i] > right[i] ? left[i] - right[i] : right[i] - left[i];
  if (!isNaN(acc)) differenceSum += acc;
}

console.log(differenceSum);

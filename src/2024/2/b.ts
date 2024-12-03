import readInput from "../../../utils/readInput";

const reports = await readInput();

const isSafe = (levels: number[]) =>
  levels.every((_, i) => i === 0 || Math.abs(levels[i] - levels[i - 1]) <= 3) &&
  (levels.every((_, i) => i === 0 || levels[i] > levels[i - 1]) ||
    levels.every((_, i) => i === 0 || levels[i] < levels[i - 1]));

const safeCount = reports.reduce((acc, report) => {
  const levels = report.split(" ").map(Number);

  let safe = isSafe(levels);

  if (!safe) {
    safe = levels.some((_, i) =>
      isSafe([...levels.slice(0, i), ...levels.slice(i + 1)]),
    );
  }

  return acc + (safe ? 1 : 0);
}, 0);

console.log(safeCount);

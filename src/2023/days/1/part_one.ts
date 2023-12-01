import readInput from "../../../../utils/readInput";
import sum from "../../../../utils/sum";

const calibrationDocument = await readInput(1);

const answer = sum(calibrationDocument.map(line => parseInt((line.match(new RegExp(`(?=(\\d)).*(\\d)`)) as string[]).slice(1).join(""))));
console.log(answer);
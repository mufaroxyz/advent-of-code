import readInput from "../../../utils/readInput";
import sum from "../../../utils/sum";

const calibrationDocument = await readInput();
const digitNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];


const answer = sum(calibrationDocument.map(line => {
    const regex = new RegExp(`(?=(\\d|${digitNames.join("|")})).*(\\d|${digitNames.join("|")})`);
    const [, firstDigit, lastDigit] = (line.match(regex) as string[]).map(x => digitNames.includes(x) ? digitNames.indexOf(x).toString() : x);
    
    return parseInt(firstDigit + lastDigit);
}))

console.log(answer);
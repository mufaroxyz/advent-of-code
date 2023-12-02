
import readInput from "../../../utils/readInput";

const input = await readInput();
const bag = { red: 12, green: 13, blue: 14 };

let answer = 0;
input.forEach((line, i) => {
    let isValid = true;
    const [partialGameId, cubes] = line.split(":");
    cubes.trim().replaceAll(";", ",").split(",").forEach(cube => {
        cube = cube.trim();
        Object.entries(bag).forEach((color) => {
            const [colorName, colorMax] = color;
            if(cube.includes(colorName)) {
                const value = Number(cube.replace(colorName, "").trim());
                if(value > colorMax) isValid = false;
            }
        })
    }) 

    if(isValid) answer += Number(partialGameId.split(" ")[1]);
})

console.log(answer);
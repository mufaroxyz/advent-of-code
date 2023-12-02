
import readInput from "../../../utils/readInput";

const input = await readInput();
const bag = { red: 12, green: 13, blue: 14 };

let answer = 0;
input.forEach((line) => {
    const currentCubes = { red: 0, green: 0, blue: 0 };
    const [, cubes] = line.split(":");
    cubes.trim().replaceAll(";", ",").split(",").forEach(cube => {
        cube = cube.trim();
        Object.entries(bag).forEach((color) => {
            const [colorName,] = color;
            if(cube.includes(colorName)) {
                const value = Number(cube.replace(colorName, "").trim());

                if(value > currentCubes[colorName as keyof typeof bag]) currentCubes[colorName as keyof typeof bag] = value;
            }
        })
    }) 

    const total = Object.values(currentCubes).reduce((a, b) => a * b, 1);
    answer += total;
})

console.log(answer);
export default async function readInput(day:number) {
    const open = Bun.file(`${process.cwd()}/days/${day}/input.txt`);
    return await open.text().then((text) => text.split('\n'));
} 
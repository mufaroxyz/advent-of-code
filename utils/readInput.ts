export default async function readInput() {
  const open = Bun.file(`${process.cwd()}/input.txt`);
  return await open.text().then((text) => text.split("\r\n"));
}

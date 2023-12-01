export default function sum(arr: number[]) {
    return arr.reduce((acc, val) => acc + val, 0);
}
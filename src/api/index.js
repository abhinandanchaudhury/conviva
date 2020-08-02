//const basepath = `https://jsonplaceholder.typicode.com/`;
const basepath = `http://localhost:8080/`;
export const api = (param) => {
    return fetch(`${basepath + param}`);
}
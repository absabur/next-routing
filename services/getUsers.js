export default async function () {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return await result.json();
}
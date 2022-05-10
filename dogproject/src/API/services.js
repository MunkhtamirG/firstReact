export async function getAllDogs() {
  return await fetch("https://dog.ceo/api/breeds/list/all");
}


 export default async function allCategories (){

 const response= await fetch("http://localhost:3000/api/3ee29f52-68dc-4a46-b9c0-506e06d465eb/categories")
if (!response.ok) {
  throw new Error('Failed to fetch data');
}
const data = await response.json();
return data

}
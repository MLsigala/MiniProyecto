const API = 'https://api.tvmaze.com';

export async function get(path) {
  const response = await fetch(API + path);
  const data = response.json();
  return data;
}

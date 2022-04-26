import { response } from "msw";

export async function getTerms() {
    const url = 'http://localhost:7891/api/terms';
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    });
    console.log(response.body)
    return response.json();
  }
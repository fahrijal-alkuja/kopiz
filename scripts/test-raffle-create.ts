
import { fetch } from 'ofetch'

async function testRaffleCreate() {
  const url = 'http://localhost:3000/api/raffles/create'
  
  // You might need to adjust headers if authentication is strictly enforced and not mocked in this script.
  // However, the focus here is to see if the server crashes (500) or returns validation error (400) / success (200).
  // Ideally we would need an auth token, but let's try to hit it and see response.
  
  const body = {
        name: "Test Raffle",
        startDate: "2023-10-26",
        endDate: "2023-12-31",
        minimumSpend: 50000
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log('Success:', data)
  } catch (error: any) {
    console.log('Full Error:', error)
    if (error.response) {
        console.log('Status:', error.response.status)
        console.log('Status Text:', error.response.statusText)
        console.log('Data:', error.response._data)
    }
  }
}

testRaffleCreate()

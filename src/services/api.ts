export async function getMotors(apiKey: string) {
  console.log(apiKey)

  const request = await fetch(
    `https://api.jsonbin.io/v3/b/6571dda312a5d37659a47628`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': apiKey,
      },
    }
  )
  const response = await request.json()
  return response
}

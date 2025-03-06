export const hashString = async (data) => {
  // Hash the data using SHA-256 with Web Crypto API
  const encoder = new TextEncoder()
  const encodedData = encoder.encode(data)
  const hashBuffer = await crypto.subtle.digest("SHA-256", encodedData)

  // Convert the hash buffer to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

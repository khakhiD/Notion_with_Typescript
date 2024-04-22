const API_END_POINT = import.meta.env.VITE_API_END_POINT
const API_USERNAME = import.meta.env.VITE_API_USERNAME

export const request: typeof fetch = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "x-username": API_USERNAME,
        "Content-Type": "application/json",
      },
    })
    if (res.ok) {
      const json = await res.json()
      return json
    } else {
      throw new Error(`API Fetch Error Code: ${res.status}`)
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

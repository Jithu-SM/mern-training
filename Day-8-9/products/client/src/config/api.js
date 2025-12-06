const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  USERS: `${API_BASE_URL}/users`,
  LOGIN: `${API_BASE_URL}/users/login`,
  SIGNUP: `${API_BASE_URL}/users/signup`
}

export default API_BASE_URL
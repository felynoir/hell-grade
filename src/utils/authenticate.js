import decode from 'jwt-decode';

/**
 * Verify jwt token
 * @returns {Boolean} isLoggedIn
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token && isTokenExpired(token);
};

/**
 * Verify Token is expired or not.
 * @param {String} token - User's token.
 * @returns {Boolean} isExpired
 */
export const isTokenExpired = token => {
  try {
    const decoded = decode(token);
    console.log(decoded);
    if (!decoded.exp) return true;
    if (decoded.exp < Date.now() / 1000) {
      // Checking if token is expired.
      return true;
    } else return false;
  } catch (err) {
    console.log('expired check failed! Line 42: AuthService.js');
    return false;
  }
};

/**
 * Logout user and remove token from storage
 */
export const logout = () => {
  localStorage.removeItem('token');
};

/**
 * Login Set token
 * @param {String} token - User's token is received from api.
 */
export const login = token => {
  localStorage.setItem('token', token);
};

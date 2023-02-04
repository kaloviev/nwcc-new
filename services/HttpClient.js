/**
 * The HttpClient class is a wrapper for the fetch API that provides
 * a simplified interface for making HTTP requests.
 */
export class HttpClient {
  /**
   * @param {String} baseURL - The base URL for the API
   * @param {Object} defaultOptions - Default options for each request
   */
  constructor(baseURL = '', defaultOptions = {}) {
    this._baseURL = baseURL
    this._defaultOptions = defaultOptions
  }

  /**
   * Set the base URL for the API
   * @param {String} url - The base URL
   */
  set baseURL(url) {
    this._baseURL = url
  }

  /**
   * Set the default options for each request
   * @param {Object} options - The default options
   */
  set defaultOptions(options) {
    this._defaultOptions = options
  }

  /**
   * Sends a GET request
   * @param {String} url - The API endpoint
   * @param {Object} options - Additional options for the request
   * @returns {Promise} A Promise that resolves to the JSON response from the API
   */
  async get(url, options = {}) {
    return this.request(url, { method: 'get', ...options })
  }

  /**
   * Sends a POST request with data
   * @param {String} url - The API endpoint
   * @param {Object} data - The data to send with the request
   * @param {Object} options - Additional options for the request
   * @returns {Promise} A Promise that resolves to the JSON response from the API
   */
  async post(url, data, options = {}) {
    return this.request(url, { method: 'post', data, ...options })
  }

  /**
   * Sends a request
   * @param {String} url - The API endpoint
   * @param {Object} options - Options for the request
   * @returns {Promise} A Promise that resolves to the JSON response from the API
   */
  async request(url, options = {}) {
    // Use fetch to send the request and get the response
    const response = await fetch(this._getURL(url), { ...this._defaultOptions, ...options })
    // Check the status of the response and throw an error if it's not ok
    this._checkStatus(response)
    // Return the JSON response
    return response.json()
  }

  /**
   * Checks the status of the API response and throws an error if it's not ok
   * @param {Response} response - The API response
   * @throws {Error} An error with the status code and status text
   */
  _checkStatus(response) {
    if (response.ok) return

    const error = new Error(`${response.status} ${response.statusText}`)
    error.response = response
    throw error
  }

  /**
   * Gets the full URL for the API request
   * @param {String} url - The API endpoint
   * @returns {String} The full URL for the API request
   */
  _getURL(url) {
    return url.startsWith('http') ? url : this._baseURL + url;
  }
}

export default new HttpClient(process.env.NEXT_PUBLIC_NWCC_API_BASE_URL, {
  headers: {
    'Content-Type': 'application/json'
  }
})

import { HttpClient } from './HttpClient'

describe('HttpClient', () => {
  let httpClient
  let fetchMock

  beforeEach(() => {
    httpClient = new HttpClient()
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: 'Test Data' }),
      })
    )
  })

  afterEach(() => {
    fetchMock.mockRestore()
  })

  describe('constructor', () => {
    it('should set baseURL and defaultOptions', () => {
      const baseURL = 'http://test.com'
      const defaultOptions = { headers: { 'Content-Type': 'application/json' } }
      const httpClient = new HttpClient(baseURL, defaultOptions)

      expect(httpClient._baseURL).toBe(baseURL)
      expect(httpClient._defaultOptions).toEqual(defaultOptions)
    })
  })

  describe('baseURL', () => {
    it('should set baseURL', () => {
      const baseURL = 'http://test.com'
      httpClient.baseURL = baseURL

      expect(httpClient._baseURL).toBe(baseURL)
    })
  })

  describe('defaultOptions', () => {
    it('should set defaultOptions', () => {
      const defaultOptions = { headers: { 'Content-Type': 'application/json' } }
      httpClient.defaultOptions = defaultOptions

      expect(httpClient._defaultOptions).toEqual(defaultOptions)
    })
  })

  describe('get', () => {
    it('should call request with method set to get and correct URL and options', async () => {
      const requestMock = jest.spyOn(httpClient, 'request').mockImplementation(() => Promise.resolve())
      const url = '/test'
      const options = { headers: { 'X-Test-Header': 'Test Header' } }

      await httpClient.get(url, options)

      expect(requestMock).toHaveBeenCalledWith(url, { method: 'get', ...options })
    })
  })

  describe('post', () => {
    it('should call request with method set to post, data and correct URL and options', async () => {
      const requestMock = jest.spyOn(httpClient, 'request').mockImplementation(() => Promise.resolve())
      const url = '/test'
      const data = { test: 'data' }
      const options = { headers: { 'X-Test-Header': 'Test Header' } }

      await httpClient.post(url, data, options)

      expect(requestMock).toHaveBeenCalledWith(url, { method: 'post', data, ...options })
    })
  })

  describe('request', () => {
    it('should make a request with the correct URL and options', async () => {
      const client = new HttpClient('https://test-api.com', {
        headers: { 'X-Test-Header': 'Test Header' },
      })
      const fetchMock = jest.spyOn(global, 'fetch')
      fetchMock.mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: 'test' }),
      }))

      const response = await client.request('/test')
      expect(fetchMock).toHaveBeenCalledWith('https://test-api.com/test', {
        headers: { 'X-Test-Header': 'Test Header' },
      })
      expect(response).toEqual({ data: 'test' })

      fetchMock.mockRestore()
    })

    it('Should make a request with additional options', async () => {
      const client = new HttpClient('https://test-api.com')
      const fetchMock = jest.spyOn(global, 'fetch')
      fetchMock.mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: 'test' }),
      }))

      const response = await client.request('/test', { headers: { 'X-Test-Header': 'test' } })
      expect(fetchMock).toHaveBeenCalledWith('https://test-api.com/test', {
        headers: { 'X-Test-Header': 'test' },
      })
      expect(response).toEqual({ data: 'test' })

      fetchMock.mockRestore()
    })

    it('Should throw an error if the response is not ok', async () => {
      const client = new HttpClient('https://test-api.com')
      const fetchMock = jest.spyOn(global, 'fetch')
      fetchMock.mockImplementation(() => Promise.resolve({
        ok: false,
        status: 400,
        statusText: 'Bad Request',
      }))

      await expect(client.request('/test')).rejects.toThrow('400 Bad Request')

      fetchMock.mockRestore()
    })
  })

  describe('_checkStatus', () => {
    it('should throw an error if response is not ok', () => {
      const response = { ok: false, status: 404, statusText: 'Not Found' }
      expect(() => httpClient._checkStatus(response)).toThrow('404 Not Found')
    })

    it('should not throw an error if response is ok', () => {
      const response = { ok: true }
      expect(() => httpClient._checkStatus(response)).not.toThrow()
    })
  })

  describe('_getURL', () => {
    it('should return full URL if url starts with "http"', () => {
      const url = 'https://api.example.com/v2/resources'
      httpClient.baseURL = "https://api.example.com"
      expect(httpClient._getURL(url)).toBe(url)
    })

    it('should return full URL if baseURL and url', () => {
      const url = '/v2/resources'
      httpClient.baseURL = "https://api.example.com"
      expect(httpClient._getURL(url)).toBe('https://api.example.com/v2/resources')
    })
  })
})

import {apiPath, apiKey} from '../config';

const methods = ['get', 'post', 'put', 'patch', 'delete'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;

  return `${apiPath}${adjustedPath}`;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then((json) => Promise.reject(json));
}

function parseJSON(response) {
  return response.headers.map['content-type'] ===
    'application/json; charset=utf-8'
    ? response.json()
    : response;
}

function fetchCreator(method, url, options = {}) {
  return this.request(url, {...options, method})
    .then(checkStatus)
    .then(parseJSON)
    .catch((error) => {
      return Promise.reject(error);
    });
}

class Request {
  constructor() {
    methods.forEach((method) => {
      this[method] = fetchCreator.bind(this, method);
    });
  }

  request(url, {data, ...options} = {}) {
    const fetchOptions = options;
    fetchOptions.headers = fetchOptions.headers || {};
    fetchOptions.headers.Accept = 'application/json';
    fetchOptions.headers['x-api-key'] = apiKey;

    return fetch(formatUrl(url), fetchOptions);
  }
}

export {formatUrl, checkStatus, parseJSON};

export default new Request();

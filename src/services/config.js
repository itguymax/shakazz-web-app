// acepted requests format
const ACCEPT = {
  JSON: 'application/json',
};

// api verbs
const METHOD = {
  GET: 'GET',
  HEAD: 'HEAD',
  PUT: 'PUT',
  DELETE:'DELETE',
  POST: 'POST',
};


 const apiBaseUrl = "https://shakazz-server.herokuapp.com/api/v1/services";

//  const apiBaseUrl = "http://localhost:5000/api/v1/services";
// shakkazz api pattern
  const apiV1 = {
  root: apiBaseUrl,
  call: async (url, parameters) => {
    const finalUrl =
      url.indexOf(apiV1.root) === 0 ? url : url.startsWith('/')?`${apiV1.root}${url}`:( url.startsWith('http') || url.startsWith('https'))? url:  `${apiV1.root}/${url}`;
      console.log("final url", finalUrl, url, parameters,decodeURI(finalUrl));
    const response = await fetch(finalUrl, parameters);
    return response;
  },
  parameters: (
    accessToken,
    method = METHOD.GET,
    accept = ACCEPT.JSON,
    body = {},
  ) => {
    console.log("AT GET", accessToken);
    const withBody = [METHOD.PUT, METHOD.PATCH, METHOD.POST,METHOD.DELETE];
    const params = {
      method,
      headers: {
        Accept: accept,
        auth_token: `${accessToken}`,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    };

    if (withBody.indexOf(method) !== -1) {
      params.body = JSON.stringify(body);
      if (method === METHOD.PUT) {
        params.headers['Content-Length'] = 0;
      }
    }

    return params;
  },
  unAuthParameters: (method = METHOD.POST, accept = ACCEPT.JSON, body = {}) => {
    const withBody = [METHOD.PUT, METHOD.PATCH, METHOD.POST];
    const params = {
      method,
      headers: {
        Accept: accept,
        'Content-Type': 'application/json',
        credentials: 'include',

      },
      body: JSON.stringify(body) ,
    };

    // if (withBody.indexOf(method) !== -1) {
    //   params.body = body;
    //   if (method === METHOD.PUT) {
    //     params.headers['Content-Length'] = 0;
    //   }
    // }

    return params;
  },
  deleteJson: async (url, accessToken) => {
    const response = await  apiV1.call(
      url,
       apiV1.parameters(accessToken, METHOD.DELETE),
    );
    return response.json();
  },
    deleteJsonBody: async (url, accessToken,body={}) => {
    const response = await  apiV1.call(
      url,
       apiV1.parameters(accessToken, METHOD.DELETE,  ACCEPT.JSON,  body),
    );

    return response.json();
  },
  get: async (url, accessToken) => {
    const response = await  apiV1.call(
      url,
       apiV1.parameters(accessToken),
    );

    return response;
  },
  getJson: async (url, accessToken) => {

    const response = await  apiV1.call(
      url,
       apiV1.parameters(accessToken),
    );

    return response.json();
  },
   unAuthgetJson: async (url) => {
     console.log("decod uri",  decodeURI(url));
     const params = {
      method: METHOD.GET,
      headers: {
        Accept: ACCEPT.JSON,
        'Content-Type': 'application/json',
        credentials: 'include',
      },
     }
    const response = await apiV1.call(
     url,
      params
    );

    return response.json();
  },
  postJson: async (url, accessToken, body = {}) => {
    const response = await  apiV1.call(
      url,
       apiV1.parameters(accessToken, METHOD.POST, ACCEPT.JSON, body),
    );

    return response.json();
  },
  postFormData: async (url, accessToken, body = {}) => {
    const response = await  apiV1.call(
      url,
       apiV1.parameters(accessToken, METHOD.POST, ACCEPT.JSON, body),
    );

    return response.json();
  },
  unAuthPostJson: async (url, body = {}) => {
    const response = await  apiV1.call(
      url,
      apiV1.unAuthParameters(METHOD.POST, ACCEPT.JSON, body),
    );
    return response.json();
  },
  put: async (url, accessToken, body = {}) => {
    const response = await  apiV1.call(
      url,
       apiV1.parameters(accessToken, METHOD.PUT, ACCEPT.JSON, body),
    );

    return response;
  },
  putJson: async (url, accessToken, body = {}) => {
    const response = await  apiV1.call(
      url,
       apiV1.parameters(accessToken, METHOD.PUT, ACCEPT.JSON, body),
    );
    return response.json();
  },
};




export default apiV1;

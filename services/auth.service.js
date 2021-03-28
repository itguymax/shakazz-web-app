

const apiUrl = "https://shakazz-server.herokuapp.com/api/v1/services/auth"

  const signup = async (data) => {
    try {
    let response = await fetch(`${apiUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    let responseJson =  await response.json();
    return responseJson;
  } catch(err) {
    console.log(err)
  }
  }

  const login = async (data) => {
    try {
    let response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    let responseJson =  await response.json();
    return responseJson;
  } catch(err) {
    console.log(err)
  }
  }

  const requestPasswordReset = async (data) => {
    try {
    let response = await fetch(`${apiUrl}/requestPasswordReset`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    let responseJson =  await response.json();
    return responseJson;
  } catch(err) {
    console.log(err)
  }
  }


  const resetPassword = async (data) => {
    try {
    let response = await fetch(`${apiUrl}/resetPassword`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    let responseJson =  await response.json();
    return responseJson;
  } catch(err) {
    console.log(err)
  }
  }

export {
  signup,
  login,
  requestPasswordReset,
  resetPassword,
};
const apiUrl = "https://shakazz-server.herokuapp.com/api/v1/services/subcriptions";

 const submitSubscriptionData = async (data) => {
    try {
    let response = await fetch(`${apiUrl}/add`, {
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
    submitSubscriptionData
  }
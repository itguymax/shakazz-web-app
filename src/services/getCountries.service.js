

const apiUrl = "https://restcountries.eu/rest/v2/all"

  const getCountries = async (data) => {
    try {
    let response = await fetch(`${apiUrl}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'mode': 'no-cors'
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
  getCountries,
};
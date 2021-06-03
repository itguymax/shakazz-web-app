
import config from '../config';
import  apiV1  from './config';


const converter = async (from, to) => {
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`;
    try {
    let response =  apiV1.call(url,{});
    return (await response).json();
  } catch(err) {
    console.log(err);
  }
  }
  const converterAfrica = async (from, to) => {
      const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
      try {
      let response =  apiV1.call(url,{});
      return (await response).json();
    } catch(err) {
      console.log(err);
    }
    }

export {
  converter,
  converterAfrica
};

const tauxChangeRetrait = (currency) => {
  if(currency === "XAF" || currency === "XOF"){
    return 600;
  }else{
    return 2300;
  }
}


export {
  tauxChangeRetrait
}

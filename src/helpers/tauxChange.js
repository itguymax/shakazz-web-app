const tauxChange = (currency) => {
  if(currency === "XAF" || currency === "XOF"){
    return 630;
  }else{
    return 2500;
  }
}


export {
  tauxChange
}

const fraisOperateurs = (country) => {
  if(country === "Cameroun"){
    return 2.5;
  }else if(country === "Côte d'ivoire"){
    return 3.5;
  }else if(country === "Mali"){
    return 4;
  }else if(country === "Sénégal"){
    return 2.5;
  }else if(country === "Burkina Faso"){
    return 4.5;
  }else if(country === "Togo"){
    return 4;
  }else{
    return 4;
  }
}


export {
  fraisOperateurs
}

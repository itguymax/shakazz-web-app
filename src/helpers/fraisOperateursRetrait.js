const fraisOperateursRetrait = (operateur) => {
  if(operateur === "VISA" || operateur === "MasterCard"){
    return 3.5;
  }else{
    return 2;
  }
}


export {
  fraisOperateursRetrait
}

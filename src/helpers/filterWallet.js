

const filterwallet = (data, need) => {
  return data.filter( (item)=> item.tyep === need );
}


export {
  filterwallet,
}
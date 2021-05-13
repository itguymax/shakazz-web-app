//Scroll function
const scrollToBottom = ()=>{
  if (typeof window != "undefined") {
    window.scroll({
    top: document.body.offsetHeight,
    left: 0,
    behavior: 'smooth'
  });
 }
}
export{
  scrollToBottom
}

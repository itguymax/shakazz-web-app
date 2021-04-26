const dropdown_toggle = (value,id,idm="none",img)=>{
     const actualOption = document.getElementById(id);
     actualOption.innerHTML = value;
     if(idm !== "none"){
       const actualOptionImg = document.getElementById(idm);
       actualOptionImg.srcset = "/assets/img/flags/"+img;
     }
};
export default {
dropdown_toggle
};

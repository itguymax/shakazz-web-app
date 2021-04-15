const getTransactions = ()=>{
    alert('Voir les transactions');
};
const displayTransactions = (mode,col_number)=>{
    alert(mode+' '+col_number);
};
const changePage = (nextPage,actualPage,updatePageNumber)=>{
    let actual = document.getElementById(actualPage);
    let next = document.getElementById(nextPage);
    let updatePageNb = document.getElementById("update_actual_page");
    requestAnimationFrame(()=>{
        updatePageNb.innerHTML = "Affichage de page "+updatePageNumber+" sur 5";
        actual.classList.remove("numberActive");
        next.classList.add("numberActive");
    });
};
const navigationPage = (page,mode,updatePageNumber)=>{
    let updatePageNb = document.getElementById("update_actual_page");
    if(mode == "prev"){
        updatePageNumber--;
         let nextPage = page["page"]-1;
         let idPage = "pagination"+nextPage;
        changePage(idPage,page['paginationId']);
    }else if(mode == "next"){
        updatePageNumber++;
         let nextPage = page["page"]+1;
         let idPage = "pagination"+nextPage;
        changePage(idPage,page['paginationId']);
    }
    requestAnimationFrame(()=>{
        updatePageNb.innerHTML = "Affichage de page "+updatePageNumber+" sur 5";
    });
};
export default {getTransactions,
displayTransactions,
changePage,
navigationPage
};
const getTransactions = (data)=>{
    displayTransactions(data);
};
const sortTransactions = (data,col,mode)=>{
    function compare(a, b) {
          const bandA = a[col];
          const bandB = b[col];
              let comparison = 0;
              if (bandA > bandB) {
                comparison = 1;
              } else if (bandA < bandB) {
                comparison = -1;
              }
              return comparison;
        }
        data.sort(compare);
        if(mode == "decroissant"){
             data.reverse();
        }
    return displayTransactions(data);
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
const displayTransactions = (data)=>{
    let  table_body = document.getElementById("table_body");
    let wrapper =``;
    let total_sortie_composee = 0;
    let total_pourcentage_quotidien = 0;
    data.map((x)=>{
           wrapper +=`<tr>
                          <th>${x.s_nom}</th>
                          <td>${x.paiement_nom}</td>
                          <td>${x.date}</td>
                          <td>${x.sortie_composee}</td>
                          <td>${x.pourcentage_quotidien}</td>
                        </tr>`;
                        total_sortie_composee += parseFloat(x.sortie_composee);
                        total_pourcentage_quotidien += parseFloat(x.pourcentage_quotidien);
    });
    wrapper+=`<tr>
                 <th></th>
                          <td></td>
                          <td><strong>Total</strong></td>
                          <td><strong>${Math.round((total_sortie_composee + Number.EPSILON) * 100) / 100}</strong></td>
                          <td><strong>${Math.round((total_pourcentage_quotidien + Number.EPSILON) * 100) / 100}</strong></td>
                        </tr>`;
    requestAnimationFrame(()=>{
       table_body.innerHTML = wrapper;
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
navigationPage,
displayTransactions,
sortTransactions
};
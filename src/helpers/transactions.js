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
        let imageName = "sortimg"+col;
        const imageId = document.getElementById(imageName);
        if(mode == "decroissant"){
            requestAnimationFrame(()=>{
              imageId.srcset="/assets/img/Down2.png";
            })
             data.reverse();
        }else{
          requestAnimationFrame(()=>{
              imageId.srcset="/assets/img/Down-1.png";
            })
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
    let cpt = 1;
    data.map((x)=>{
      let pourcentageQuotidien = x.pourcentage_quotidien;
           wrapper +=`<tr>
                          <th>${cpt}</th>
                          <td>${x.date}</td>
                          <td>${x.sortie_composee}$</td>
                          <td>${Math.round((pourcentageQuotidien + Number.EPSILON) * 10000) / 10000}%</td>
                        </tr>`;
                        total_sortie_composee += parseFloat(x.sortie_composee);
                        total_pourcentage_quotidien += parseFloat(x.pourcentage_quotidien);
                        cpt++;
    });
    wrapper+=`<tr>
                 <th></th>
                          <td>Total</strong></td>
                          <td><strong>${Math.round((total_sortie_composee + Number.EPSILON) * 100) / 100}$</strong></td>
                          <td><strong>${Math.round((total_pourcentage_quotidien + Number.EPSILON) * 100) / 100}</strong></td>
                          <td></td>
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

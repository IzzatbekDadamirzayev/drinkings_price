// console.log(document.body);
// console.log(document.head);

// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.querySelector("#tartib").parentNode.parentNode);

// var num = 5;
// console.log(document.querySelector(`[data-tartib="${num}"]`));


// document.addEventListener('DOMContentLoaded',() => {
//     console.info('DOM loaded');

    function qowiw(){
        const table = document.querySelector("table");
        var a = prompt('Ichinlik nomini kiriting');
        var b = prompt('Ichimlik turini kiriting');
        var c = prompt('Ichimlik hajmini kiriting (Litrda)');
        var d = prompt('Ichimlik narxini kiriting')
        table.innerHTML += `
            <tr>
                <td class="inform"> ${a} <i class="fas fa-trash" onclick="uchirish()" ></i> </td>
                <td class="inform"> ${b} <i class="fas fa-trash" onclick="uchirish()" ></i> </td>
                <td class="inform"> ${c} <i class="fas fa-trash" onclick="uchirish()" ></i> </td>
                <td class="inform"> ${d} <i class="fas fa-trash" onclick="uchirish()" ></i> </td>
            </tr>
    `}

    

    const deleteit = document.getElementsByClassName('.fas.fa-trash');
    function uchirish(){
        deleteit.remove();
    }
// });
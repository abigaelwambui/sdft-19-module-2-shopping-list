// document.addEventListener("DOMContentLoaded", () => {
    
// })

const form = document.querySelector(".frm-new-item")
const items = []
const search = document.querySelector(".search")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    // const item = {
    //     itemName: event.target.itemName.value,
    //     price: event.target.price.value,
    //     qty: event.target.qty.value
    // }

    items.push({
      itemName: event.target.itemName.value,
      price: event.target.price.value,
      qty: event.target.qty.value,
    });

    displayItem(items);

})

search.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase()
    const searchedItem = items.filter(item => {
        return item.itemName.includes(value)
    })
    displayItem(searchedItem)
})

// function removeItem(event) {
//     event.target.closest("tr")
//     const i = items.indexOf("tr")
//     items.splice(i, 1)
//     console.log(items)

//     event.target.closest("tr").remove()
// }
function removeItem(index) {
    items.splice(index, 1)
    console.log(items)
}



function displayItem(items) {
    
    const tbody = document.querySelector("tbody.stock")
    tbody.innerHTML = ""
    items.forEach((item) => {
        const index = items.indexOf(item)
        tbody.innerHTML += `
        <tr>
            <td>${item.itemName}</td>
            <td>${item.price}ksh</td>
            <td>${item.qty}</td>
            <td>
                <button onclick="removeItem(${index})" class="btn btn-icon">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `;
    })
    
}
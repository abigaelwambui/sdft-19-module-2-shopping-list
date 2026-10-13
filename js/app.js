const form = document.querySelector(".frm-new-item")
const items = []
const search = document.querySelector(".search")


form.addEventListener("submit", (event) => {
    event.preventDefault()

    items.push({
      itemName: event.target.itemName.value,
      price: event.target.price.value,
      qty: event.target.qty.value,
    });

    displayItem(items);

})




function displayItem(itemsToDisplay) {
    
    const tbody = document.querySelector("tbody.stock")
    tbody.innerHTML = ""

    itemsToDisplay.forEach((item, index) => {

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

search.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase()
    const searchedItem = items.filter(item => {
        return item.itemName.includes(value)
    })
    
    displayItem(searchedItem)
})


function removeItem(index) {
    items.splice(index, 1)
    displayItem(items)

}

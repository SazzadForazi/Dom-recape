function updateName() {
    let nameInput = document.getElementById('name_input').value;
    // console.log(nameInput);
    document.getElementById('name_header').innerText = `Hello ${nameInput}`;
    document.getElementById('name_header').style.color = 'red';
}
const submitButton = document.getElementById('submit_button');
submitButton.addEventListener('click', () => {
    const itemText = document.getElementById('item_text').value;
    const itemValue = document.getElementById('item_price').value;
    console.log(itemText, itemValue);
    //     <tr>
    //     <td>Jacob</td>
    //     <td>11</td>
    //     <td><button class="btn btn-danger">delete</button></td>
    //   </tr>

    let tableRow = document.createElement('tr');
    tableRow.setAttribute('class', 'table_row');
    tableRow.innerHTML = `
<td>${itemText}</td>
<td class='price'>${itemValue}</td>
<td><button class="btn btn-danger" onclick="handleDelete(event)">delete</button></td>

`;
    document.getElementById('table_body').appendChild(tableRow);
    allCost();
})

function allCost() {
    const totalCost = document.getElementsByClassName('price');
    console.log(totalCost);
    let cost = 0;
    for (let i = 0; i < totalCost.length; i++) {
        const element = totalCost[i];
        // console.log(element.innerText);
        cost = cost + parseInt(element.innerText);
    }
    console.log(cost);
    document.getElementById('total_cost').innerText = cost;
}
function handleDelete(event) {
    // console.log('delete button properly working');
    console.log(event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode));
}
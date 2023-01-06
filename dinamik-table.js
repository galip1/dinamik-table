var laptopData = [
  { name: "Hp", model: "212", cost: 50000, ram: "8gb", id: 1 },
  { name: "Acer", model: "212", cost: 70000, ram: "12gb", id: 2 },
];

function displayTableData() {
  setTimeout(() => {
    let html = ` <table class="table">
<thead>
  <tr>
    <td>SNo.</td>
    <td>Laptop Name</td>
    <td>Model</td>
    <td>Cost</td>
    <td>Ram</td>
    <td>Action</td>
  </tr>
</thead>
<tbody>`;

    for (let i = 0; i < laptopData.length; i++) {
      let num = i + 1;
      html += ` <tr>
    <td>${num}</td>
    <td>${laptopData[i].name}</td>
    <td>${laptopData[i].model}</td>
    <td>${laptopData[i].cost}</td>
    <td>${laptopData[i].ram}</td>
    <td>    <button id="btnDel" type="button" onclick="removeItem(${laptopData[i].id})" class="btn btn-danger">Remove</button>
    </td>
  </tr>`;
    }

    `</tbody>
</table>`;
    document.getElementById("table").innerHTML = html;
  }, 200);
}

displayTableData();

function addOnclick() {
  let name = document.getElementById("laptopName").value;
  let model = document.getElementById("model").value;
  let cost = document.getElementById("price").value;
  let ram = document.getElementById("ram").value;

  if (name && model && cost && ram) {
    let id = laptopData.length + 1;
    laptopData.push({ name: name, model: model, cost: cost, ram: ram, id: id });
  } else {
    alert("Please, full all of the list!!!");
  }

  document.getElementById("laptopName").value = "";
  document.getElementById("model").value = "";
  document.getElementById("price").value = "";
  document.getElementById("ram").value = "";

  displayTableData();
}

function removeItem(rec) {
  let filt = laptopData.filter((a, i) => {
    if (rec == a.id) {
      laptopData.splice(i, 1);
      displayTableData();
    }
  });
}

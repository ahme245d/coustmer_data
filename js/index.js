
let userinput=document.querySelector("#in-name");
async function get(namevalue="",amountvalue="") {
    let response = await fetch("main.json");
    let data = await response.json();
    let Transac = [];
     

    let cartona = "";
    displayData(data);
  


function displayData(data) {

    for (let i = 0; i < data.transactions.length; i++) {
        let transaction = data.transactions[i];
       
        let customer = data.customers.find(cust => cust.id === transaction.customer_id);
       
        if (
            (namevalue === "" ||
              customer.name.toLowerCase().includes(namevalue.toLowerCase())) &&
            (amountvalue === "" ||
              transaction.amount.toString().includes(amountvalue))
          ) {
         
            cartona += `<tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${transaction.date}</td>
                <td>${transaction.amount}</td>
                </tr>`;
  
           
                Transac.push(transaction.amount);
          }
        }
        
       
    
    document.getElementById("tab").innerHTML = cartona;
    
}
}

get();

let nameFilter = document.querySelector("#in_name");
nameFilter.addEventListener("input", function () {
  get(nameFilter.value, amount.value);
});

let amount = document.querySelector("#in_number");
amount.addEventListener("input", function () {
  get(nameFilter.value, amount.value);
});



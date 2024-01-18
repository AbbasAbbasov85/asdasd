let myForm = document.getElementById("myForm")
let email = document.getElementById("email")
let password = document.getElementById("password")
let btnform = document.getElementById("btnform")
let formtable =document.getElementById("formtable")

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    axios
        .post("https://655c839c25b76d9884fd6e12.mockapi.io/Namiq", {
            email: email.value,
            password: password.value
           
        })
        .then((res) => {
            console.log(res.data);
            
            myForm.reset();

            renderProduct();
        });
});

btnform.addEventListener("click", myForm)


const renderProduct = () => {

    axios.get(`https://655c839c25b76d9884fd6e12.mockapi.io/Namiq`)
        .then((res) => {
            db = res.data
            db.map((item) => {
                let miniDiv = document.createElement("tr")
                miniDiv.className = "miniDiv"
                miniDiv.innerHTML = `
         
            <h2>Email:${item.email}</h2>
            <h2>Password:${item.password}</h2>
           
                <button onclick ="deleteFromForm(${item.id})">Remove</button>
            `
            formtable.appendChild(miniDiv)
            })

        })
}



function deleteFromForm(id) {
    axios
        .delete(`https://655c83b725b76d9884fd6e9b.mockapi.io/products/${id}`)
        .then((res) => {
            renderProduct()
            console.log(deleteFromForm);
        });
}


renderProduct()
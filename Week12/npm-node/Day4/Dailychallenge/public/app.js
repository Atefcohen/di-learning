
fetch('http://localhost:5000/aboutMe/:hobby')
.then(res=>res.json())
.then(data =>{
    console.log(data);
    (document.querySelector('div')).textContent = JSON.stringify(data);
})
.catch(e=>console.log(e));

function validations() {
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (email == "" || message == "") {
        alert("All fields must be filled");
        return false;
    }
}
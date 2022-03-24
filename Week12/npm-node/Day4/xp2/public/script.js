const getUser = () => {
    fetch('http://localhost:3000/user')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('root').innerHTML = JSON.stringify(data)
        })
        .catch(e => console.log(e))
}

getUser()
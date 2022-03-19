
function getItem(){
    let obj = {
      item : document.getElementById('item').value,
      amount : document.getElementById('amount').value

    }
    console.log(obj)
    obj = JSON.stringify(obj);
    fetch('http://localhost:5000/api', {
        method:'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: obj
    })
    .then((res)=>{
        return res.json();
    })
    .then (data=>{
        console.log(data)
        let ul = document.getElementById("itemList")
        ul.innerHTML = ""
        data.forEach((e)=>
        {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode((`${e.item} :  ${e.amount}`)))
            ul.appendChild(li)
        })
        

    })
    .catch((e) => console.log(e))
  }

const results = document.querySelector("#results");

async function asyncFetch(value){
    const res = await fetch(`https://swapi.co/api/${value}/`);
    const data = await res.json();
    DisplayResults(data, value);
    console.log(data, value);
    
}

function DisplayResults(data,value){
    let output ="";
    console.log(data, value);
    if(value ==='films'){
        data.results.forEach(item => {
            console.log(data.results);

            output += `
                <div>
                     <h4>${item.title}</h4>
                    <span>Producer</span>:${item.producer}
                </div> 
            `
        });
    }
    results.innerHTML = output;
    console.log(data, value);
}

asyncFetch("films")

/*document.querySelector("#buttons").addEventListener("click", e =>{
    console.log(e);
    asyncFetch(e.target.textConten.trim().toLowerCase())
    
      
});*/
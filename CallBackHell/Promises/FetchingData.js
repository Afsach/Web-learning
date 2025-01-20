

let url = 'https://catfact.ninja/fact';

async function fetchData() {
    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log(data, "data")
        console.log(data.fact)
    }catch(err){
        console.log(err)
    }
    
}

fetchData()



let btn = document.querySelector('#new-fact');
const factText = document.querySelector('#fact-id');
let url = 'https://catfact.ninja/fact';

btn.addEventListener('click', async ()=>{
    let fact = await getData();
    console.log(fact)
    factText.textContent = fact
})

console.log(btn)
async function getData() {
    try {
        let res = await axios.get(url)
        return res.data.fact; 
    } catch (error) {
        console.log('error : ', error)
    }
    
}

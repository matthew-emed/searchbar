let btn = document.querySelector("#btn")
let img = document.querySelector("#dogpic")
let activity = document.querySelector("#activity")
let main = document.querySelector("#main-section")
let submit = document.querySelector("#submit-btn")
const title = document.querySelector("#title")
const body = document.querySelector("#body")
let symbol = document.querySelector("#symbol")
let mainList = document.querySelector("#main-list")
let symbolList = document.querySelector("#symbol-list")
let table = document.querySelector("#main-table")
let blog = document.querySelector("#blog")
let searchInput = document.querySelector("#search-input")
let searchBtn = document.querySelector("#searchBtn")
let cryptoCoins = []
let result = []
let tableContent = document.getElementsByTagName("table-content")



  


const displayCryptos = (crypto) => {
const htmlString = crypto.map((coins)=>{
  return `
  <div id="table-content">
  <tbody>
  <h3> ${coins.name}</h3>
  <td id="crypto-row">${coins.symbol}</td>
  <td><img src="${coins.image}" height= 50 style=" "></td>
<td>$ ${coins.current_price}</td>
</tbody>
</div>
  `
})
table.innerHTML +=htmlString
}




const loadCryptos = ()=>{
  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res => res.json())
    .then(data => {
    console.log(data)
    cryptoCoins = data.slice(0,70)
    displayCryptos(cryptoCoins)
    console.log(result)

    })
  }


// getApi()


  function getNews(){
    const res = fetch("https://newsapi.org/v2/everything?q=Cryptocurrency&from=2021-09-08&sortBy=popularity&apiKey=2535bf18e844452eb19462da451e1f9b")
      .then(res => res.json())
      .then(data => {
          data.articles.forEach(article=>{
            blog.innerHTML += `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
             `
          })    
      })
    }
    getNews()


searchInput.addEventListener("keyup", (e) => {
const searchString = e.target.value.toLowerCase()
const filteredCoins = cryptoCoins.filter((crypto) => {
   return crypto.name.toLowerCase().includes(searchString) || crypto.symbol.toLowerCase().includes(searchString)
})
console.log(filteredCoins)
let filtered = filteredCoins.map((coin)=>{
return `<div id="table-content">
<tbody>
<h3> ${coin.name}</h3>
<td id="crypto-row">${coin.symbol}</td>
<td><img src="${coin.image}" height= 50 style=" "></td>
<td>$ ${coin.current_price}</td>
</tbody>
</div>`
})
table.innerHTML = filtered
})



loadCryptos()





















    // 

function apiCall(){
axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res=>{
    let coins  = res.data
  console.log(coins)
  coins.forEach(element => {
    console.log(element.symbol)
    console.log(element.current_price)
  });
    })   
}





function getApi(){
  const res = fetch("https://api.petfinder.com/v2/animals")
  .then(res => res.json())
  .then(data => {
      console.log(data)
         

})
}

 getApi()

// submit.addEventListener("click", function(e){
//   console.log("posted")
//   e.preventDefault()
// const postTitle = title.value
// const postBody = body.value

// const data = {
//   postTitle: postTitle,
//   postBody: postBody
// }

// axios.post('https://apis.scrimba.com/jsonplaceholder/posts', {
// title: data.postTitle,
// body : data.postBody
// })
// .then(res => {
//   console.log(res.data);
//   main.innerHTML += `<h1>Title : ${res.data.title}</h1>
// <p>${res.data.body}</p>
// <hr/>`
// }, (error) => {
//   console.log(error);
// });
// title.value = ""
// body.value = ""
// })}



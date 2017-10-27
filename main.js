// Query Selectors //

const columns = document.getElementsByClassName('col-1-5');

console.log(columns);

const pricePromise = fetch("https://api.coinmarketcap.com/v1/ticker/?limit=5")

pricePromise
  .then(function(data) {
    data.json()
    .then(function(data){
      for(let i = 0; i < columns.length; i++) {
        columns[i].innerHTML = `<h1>${data[i].name}</h1>`
      }
      console.log(data[0].name)
      console.log(data);
    })
    .catch(function(err){
      console.log(err);
    })
  })

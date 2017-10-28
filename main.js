// Query Selectors //

const columns = document.getElementsByClassName('col-1-5');
const button = document.querySelector('button')
button.addEventListener('click', getPromise);

// Promise Function //

function getPromise() {
  const pricePromise = fetch("https://api.coinmarketcap.com/v1/ticker/?limit=5");
  pricePromise
    .then(function(data) {
      data.json()
      .then(function(data){
          for(let i = 0; i < columns.length; i++) {
            columns[i].innerHTML =
              `<h1>${data[i].name}</h1>

               <h3>Rank: ${data[i].rank}</h1>
               <h4>Current Price: $${data[i].price_usd}</h4>
               <h4>Percent Change 24h</h4>
              ${data[i].percent_change_24h > 0 ?
                `<h5 class="positive">+${data[i].percent_change_24h}%</h5>` : `<h5 class="negative">${data[i].percent_change_24h}%</h5>`
              }
              `
        }
      })
      .catch(function(err){
        console.log(err);
      })
    })
}

// let opp = "";
// const generator = () => {
//      let url = "https://type.fit/api/quotes";
//      fetch(url)
//      .then(function (response) {
//           return response.json();
//      })
//      .then(function (data) {
//           let random = Math.floor(Math.random() * 15 + 1);
//           let op = data[random];
//           let quote = op.text;
//           console.log(op.text, op.author);
//           let toChange = document.getElementsByClassName("quote");
//           toChange.innerHTML = quote;
//           document.getElementsByClassName("author").innerHTML = op.author;
//      });
// };


async function generator(){
     let data = await fetch("https://type.fit/api/quotes");
     data = await data.json();
     let random = Math.floor(Math.random() * 15 + 1);
     let op = data[random];
     let quote = op.text;
     console.log(op.text, op.author);
     let quoteToDisplay = document.getElementById('01');
     let authorToDisplay = document.getElementById('02');
     quoteToDisplay.innerHTML = `${quote}`
     authorToDisplay.innerHTML = `${(op.author).replace('type.fit', ' ').replace(',','')}`;
}

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://apimeme.com/meme?meme=Simsimi&top=Top+text&bottom=Bottom+text"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
.then((response) => {
    console.log("Yes");
    document.getElementById("meme").src = response;
})
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

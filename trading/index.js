var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("Dogecoin");

var settings = {
"async": true,
"scrossDomain": true,
"url": "https://api.coingecko.com/api/v3/simple/price? ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
"method": "GET",
"headers": {}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    btc.innerHTML = response.ethereum.usd;
    btc.innerHTML = response.dogecoin.usd;
});
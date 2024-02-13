// Function for Navigation Bar
function toggleMenu(e){
const nav=document.querySelector(".navLinks")
e.name=e.name == 'grid-outline'?'close':'grid-outline'
nav.classList.toggle("top-[6%]")
}
// Variables used for Crypto API Purposes
let bit=document.getElementById("bitcoin")
let eth=document.getElementById("ethereum")
let rip=document.getElementById("ripple")
let tether=document.getElementById("tether")
let doge=document.getElementById("doge")
let solana=document.getElementById("solana")
let cardano=document.getElementById("cardano")

let carVol=document.getElementById("carVol")
let bitVol=document.getElementById("bitcoinVol")
let etherVol=document.getElementById("ethereumVol")
let rippleVol=document.getElementById("rippleVol")
let solanaVol=document.getElementById("solanaVol")
let tetherVol=document.getElementById("tetherVol")
let dogeVol=document.getElementById("dogeVol")

var settings={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Csolana%2Ctether%2Cripple%2Cbinance%2Ccardano&vs_currencies=usd&include_24hr_vol=true",
    "method":"GET",
    "headers":{}
}

// Inserting the live data into html with the help of API

$.ajax(settings).done(function (response){
    bit.innerHTML=response.bitcoin.usd
    bitVol.innerHTML=response.bitcoin.usd_24h_vol

    eth.innerHTML=response.ethereum.usd
    etherVol.innerHTML=response.ethereum.usd_24h_vol

    rip.innerHTML=response.ripple.usd
    rippleVol.innerHTML=response.ripple.usd_24h_vol

    tether.innerHTML=response.tether.usd
    tetherVol.innerHTML=response.tether.usd_24h_vol

    doge.innerHTML=response.dogecoin.usd
    dogeVol.innerHTML=response.dogecoin.usd_24h_vol

    solana.innerHTML=response.solana.usd
    solanaVol.innerHTML=response.solana.usd_24h_vol

    cardano.innerHTML=response.cardano.usd
    carVol.innerHTML=response.cardano.usd_24h_vol
});

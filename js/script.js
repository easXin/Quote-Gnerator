const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
// Get Quote From API
async function getQuote(){
    // loading()
    const proxyUrl = "https://whispering-tor-04671.herokuapp.com/";
    /* because of async  const is not going to be set undtil
        required action is finished 
    */
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try {
        // await waiting for fetching API to complete from api above
        const response = await fetch(proxyUrl + apiUrl);
        // awaite for setting response above in json format
        const data = await response.json();
        if(data.quoteAuthor===''){
            authorText.innerText="Unknown"
        }else{
            authorText.innerText=data.quoteAuthor;
        }
        if(data.quoteText.length>120){
            quoteText.classList.add('long-quote');
        }else{
            quoteText.classList.remove("long-quote");
        }
        quoteText.innerText = data.quoteText;
        // stop loader and show quote 
        // complete();
    } catch (error) {
        // getQuote();
    }
}

getQuote();
/*
    Deal with Acess control allow origin Err

    Call proxy api first, then call quote api
*/

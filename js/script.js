// Get Quote From API
async function getQuote(){
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
        console.log(data);
    } catch (error) {
        getQuote();
        console.log('whoops, no quote ',error);
    }
}

 getQuote();
/*
    Deal with Acess control allow origin Err

    Call proxy api first, then call quote api
*/


// Get Quote From API
// async function getQuote() {
//     loading();
//     const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
//     const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
//     try {
//         const response = await fetch(proxyUrl + apiUrl);
//         const data = await response.json();
//         // If Author is blank, add 'Unknown'
//         if (data.quoteAuthor === '') {
//             authorText.innerText = 'Unknown';
//         } else {
//             authorText.innerText = data.quoteAuthor;
//         }
//         // Reduce font size for long quotes
//         if (data.quoteText.length > 120) {
//             quoteText.classList.add('long-quote');
//         } else {
//             quoteText.classList.remove('long-quote');
//         }
//         quoteText.innerText = data.quoteText;
//         // Stop Loader, Show Quote
//         complete();
//     } catch (error) {
//         getQuote();
//     }
// }
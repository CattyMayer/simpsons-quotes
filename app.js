window.addEventListener('DOMContentLoaded', () => {
    console.clear();
 
     // Global variables
     const GENERATE = document.querySelector('#generate');
     const QUOTE_TEXT = document.querySelector('#quote');
     const CHAR_TEXT = document.querySelector('#character');
     const IMAGE = document.querySelector('img');

    // Functions
    const getQuote = () => {
	    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
	    .then (res => res.json())
    	.then (items => {
    		items.forEach(obj => {
		    	QUOTE_TEXT.innerText = obj.quote;
		    	CHAR_TEXT.innerText = `-${obj.character}`;
		    	IMAGE.src = obj.image;
		    })
	    });
    };
    // Event listeners 
    GENERATE.addEventListener('click', getQuote);
    getQuote();
});

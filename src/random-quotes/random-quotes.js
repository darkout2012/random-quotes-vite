



const randomQuote = async () => {
    const response = await fetch ("https://api.quotable.io/random");
    const data = await response.json();
    return data;
}



export const RandomQuotesComponent = (element) => {
    
    // creamos referencias html
    const quoteLabel = document.createElement("blockquote");
    const authorLabel = document.createElement("h3");
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next quote";

    // renderizamos todo en la pagina
    const renderQuotes = (data) => {
        quoteLabel.innerHTML = data.content;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextButton);
    }

    // agregamos listener para boton
    nextButton.addEventListener("click", async () => {
        const data = await randomQuote();
        renderQuotes(data);
    });

    // llamamos a funcion
    randomQuote()
        .then(renderQuotes);

}
function displayQuote(response) {
  //didsplay generated quote

  console.log("Generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let key = "f7f785eadbt3ff93c746f724aob356d0";
  let context =
    "You are a postive and uplifting AI assistant. Your awnser should be in basic HTML. If quote is does not already have an author sign SheCodes AI in a strong element at the end of the quote. Always include the author at the end of quote in a strong element. include a related emoji";
  let prompt = `Generate a motivational quote about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  //Make call to the API

  let quoteElement = document.querySelector("#quote");
  quoteElement.innerHTML = "Grabbing your quote for you..💭";

  axios.get(apiURL).then(displayQuote);
}
let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

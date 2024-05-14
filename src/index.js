function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: ["Example Quote"],
    autoStart: true,
  });
}
let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

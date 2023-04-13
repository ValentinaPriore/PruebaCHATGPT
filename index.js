let req = new XMLHttpRequest();
let json = ""
let apiKey = ""

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
     json = JSON.parse(req.responseText).record.apikey;
     apiKey = json;

  }
};


req.open("GET", "https://api.jsonbin.io/v3/b/64375175ebd26539d0a9e481/latest", true);
req.setRequestHeader("X-Master-Key", "$2b$10$eHr1Kj52JphH.CCe92/I3.6MKc5zm6sr2Kojxy0cRbEnM78nzLRlq");
req.send();


// Define the API endpoint URL
const apiUrl = "https://api.openai.com/v1/completions";

// Define the request payload

function makeRequest() {
    // Make the API request
    prompt = "Lista de 10 referentes en la profesión de " + document.getElementById("promptID").value + ". Dame solo la lista con los nombres"
    // Define the request payload
    let payload = JSON.stringify({
        prompt,
        max_tokens: 500,
        model: "text-davinci-003"
    });
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: payload,
    })
        .then((response) => response.json())
        .then((data) => {
            // Handle the API response
            document.getElementById("texto").innerHTML = data.choices[0].text;
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
        });
}


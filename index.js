const apiKey = "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";

// Define the API endpoint URL
const apiUrl = "https://api.openai.com/v1/completions";

// Define the request payload

function makeRequest() {
    // Make the API request
    prompt = document.getElementById("promptID").value
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

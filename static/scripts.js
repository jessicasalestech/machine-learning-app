document.getElementById('analyzeButton').onclick = function () {
    const text = document.getElementById('inputText').value;
    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Sentiment: ${data.sentiment}`;
    })
    .catch(error => console.error('Error:', error));
};

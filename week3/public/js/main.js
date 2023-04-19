console.log("hello world");

fetch('https://meowfacts.herokuapp.com/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let fact = data["data"]["0"];
        console.log(fact);
        document.getElementById("fact-content").textContent = fact;
    })


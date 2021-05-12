//Don't run the API code on node environment, we will use them is browser or any front end library environment.


fetch('https://api.chucknorris.io/jokes/random')

    .then((response) => {
        return response.json();
    })

    .then((data) => {
        // console.log("DATA: " + data);
        var joke = data.value;
        console.log(joke);
    })

    .catch();
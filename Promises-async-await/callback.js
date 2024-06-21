// function getData(uId) {
//     setTimeout(() => {
//     console.log("Fetched the data!");
//     return "skc@gmail.com";
//     }, 4000);
//     }
    
//     console.log("start");
//     var email = getData("skc");
//     console.log("Email id of the user id is: " + email);
//     console.log("end");
    

function getData(uId, callback) {
    fetch(`http://jsonplaceholder.typicode.com/users/${uId}`, {
        mode: "cors", // same-origin, no-cors
    })
        .then(response => response.json())
        .then(data => {
            console.log("Fetched the data!");
            callback(data.email);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            callback(null);
        });
}

console.log("start callback");
getData(2, function(email) {
    console.log("Callback Email id of the user id is: " + email);
});
console.log("end callback");

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
    
function getData(uId) {
    return fetch(`http://jsonplaceholder.typicode.com/users/${uId}`, {
        mode: "cors", // same-origin, no-cors
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched the data!");
            return data.email;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            throw error; // Re-throw the error so it can be handled by the caller
        });
}

console.log("start promise");
getData(3)
    .then(email => {
        console.log("Promise Email id of the user id is: " + email);
    })
    .catch(error => {
        console.error("Error:", error);
    });
console.log("end promise");

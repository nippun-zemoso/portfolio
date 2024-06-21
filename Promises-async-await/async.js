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
    

async function getData(uId) {
    try {
        const response = await fetch(`http://jsonplaceholder.typicode.com/users/${uId}`, {
            mode: "cors", // same-origin, no-cors
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log("Fetched the data!");
        return data.email;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error so it can be handled by the caller
    }
}

async function main() {
    console.log("start async");
    try {
        const email = await getData(1);
        console.log("Async Email id of the user id is: " + email);
    } catch (error) {
        console.error("Error:", error);
    }
    console.log("end async");
}

main();

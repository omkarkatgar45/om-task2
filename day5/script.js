
function delayedApiCall() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = true;

            if (success) {
                resolve("Data received successfully!");
            } else {
                reject("Failed to receive data.");
            }

        }, 2000);
    });
}


async function getData() {

    console.log("Request started...");

    const status =
        document.getElementById("status");

    status.textContent = "Loading...";

    try {

        const result =
            await delayedApiCall();

        console.log("Success:");
        console.log(result);

        status.textContent = result;

    } catch (error) {

        console.error("Error:");
        console.error(error);

        status.textContent =
            "Error: " + error;
    }
}


getData();
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello world");
        }, 2000);
    });
};

async function processData() {
    const data = await getData();
    console.log(data);
};


function myFunction(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject("Error:not a number");
            } else if(data % 2 === 0) {
                setTimeout(() => {
                resolve("even");
                }, 2000);
            } else {
                setTimeout(() => {
                    resolve("odd");
                }, 1000);
            }
    });
};
/*
    The goal of assignment:
    - import sms.js 
    - send all messages using Promise.all() and Array.map()
        As the SMS messages are sent asynchronous and will be completed at different time, using this method
        will ensure we wait for all SMS to return before executing the next line of code.
        Reference Link 1: https://www.techiediaries.com/promise-all-map-async-await-example/
        Reference Link 2: https://stackoverflow.com/questions/43434438/how-to-use-arraymap-within-promise-all-in-javascript/43434447
*/

// Add code here to import sms.js

import send from "./sms.js";
const messages = [
    {
        to: "91234567",
        message: "Hello",
    },
    {
        to: "91111111",
        message: "See you",
    },
    {
        to: "92222222",
        message: "Bye",
    },
    {
        to: "93333333",
        message: "Hihi",
    },
    {
        to: "94444444",
        message: "I love you",
    },
];

// Use Promise.all() and Array#map to send all the messages.
// send("ziyu",messages[0]["message"]);
// Promise.all(messages.map((item) => send(item["to"], item["message"]))).then((resolve) => {
//     console.log(resolve);
// });

const answer = async () => {
    Promise.all(
        messages.map(async (message) => {
            const response = await send(message.to, message.message).then((resolve) => {
                console.log(resolve);
            });
        })
    ).then(() => console.log("END"));
};
answer();

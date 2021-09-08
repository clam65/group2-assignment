import _ from "./node_modules/lodash/lodash.js";

function send(to, message){
    const duration = _.random(1,3);

    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log(`Sending SMS to ${to} with message ${message}`)
            resolve("ok");
        }, duration);
    })
}

export default send;
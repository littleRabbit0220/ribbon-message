import axios from "axios";

export default function generateAnswer(question) {
    return new Promise((resolve, reject) => {
         axios.post(`https://seashell-app-yyfz7.ondigitalocean.app/api/chatgpt`, {"question": question}).then( res => {
            resolve(res.data)
        }).catch((error) => {
            console.log(error.data);
            reject(error)
        })
    })
}
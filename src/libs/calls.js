import axios from "axios"

const BASE_URL = 'http://localhost:3000/api'

// using axios to make api requests

// get meggases request
export const getAllChat = async () => {
    const chatsData = await axios.get(
        `${BASE_URL}`
    )
    return chatsData
}

// post message request
export const postData = async (body) => {
    try {
        res = await axios.post(`${BASE_URL}`, body)
        return res.data
    } catch (error) {
        console.log(error);
    }
}
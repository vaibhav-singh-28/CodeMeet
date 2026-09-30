import { StreamChat } from "stream-chat"
import { ENV } from "./env.js"

const apiKey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET_KEY

if( !apiKey || !apiSecret ){
    console.error("STREAM_API_KEY OR STREAM_API_SECRET_KEY is missing")
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret)

export const upsertStreamUser = async (userData) => {
    try {
        await chatClient.upsertUser(userData)
        console.log("Stream User upserted successfully: ", userData)
    } catch (error) {
        console.error("Error upserting stream user: ", error)
    }
}

export const deleteStreamUser = async (userId) => {
    try {
        await chatClient.deleteUser(userId)
        console.log("Stream User deleted successfully: ", userId)
    } catch (error) {
        console.error("Error deleting the stream user: ", error)
    }
}

//todo: add another method to generateToken
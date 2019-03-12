import axios from 'axios';

const KEY = "Enter your youtube key"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
});
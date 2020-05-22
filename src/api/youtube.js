import axios from 'axios'

const KEY = 'AIzaSyDBm5cpLZD4QJy-ykakO0ioJOHqnNepBRw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
})

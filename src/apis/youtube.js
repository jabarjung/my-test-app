import axios from 'axios';

const KEY = 'AIzaSyCwn7pK2dSN8BgHFJjCzbVvWc1UUDairSo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

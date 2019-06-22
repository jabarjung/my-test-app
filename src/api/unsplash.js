import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 63c8de006eae26a8006455d86fb6049b82dd61e0338ea4c27a7f9cd515eaba53',
  },
});

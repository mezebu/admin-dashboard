import axios from "axios";

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

export const fetchData = () => {
  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

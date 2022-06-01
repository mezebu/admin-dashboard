import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, TextField } from "@mui/material";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsData = () => {
  const [query, setQuery] = useState("soccer");
  const [search, setSearch] = useState("");
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNewsData = async (e) => {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

    try {
      setLoading(true);
      setQuery("");

      const { data } = await axios.get(url);

      setNewsItems(data.articles);
      setLoading(false);
      setSearch("");
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <Box>
      <Box component="form" onSubmit={getSearch}>
        <TextField
          id="filled-basic"
          label="Search Keyword or phrase. Eg: find all articles containing the word 'Sports'"
          variant="filled"
          value={search}
          onChange={handleSearch}
          fullWidth
        />
      </Box>
      {loading && (
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {newsItems.map(({ author, source, title, url, urlToImage }) => (
          <NewsItem
            key={title}
            author={author}
            source={source}
            title={title}
            url={url}
            urlToImage={urlToImage}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default NewsData;

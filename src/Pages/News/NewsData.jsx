import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import NewsItem from "./NewsItem";
import { Wrapper } from "./styles";

const url = "https://62986369f2decf5bb7410008.mockapi.io/news";

const NewsData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(url);

        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchNewsData();
  }, []);

  return (
    <Box>
      {loading && (
        <Wrapper>
          <CircularProgress />
        </Wrapper>
      )}
      {error && (
        <Wrapper>
          <CircularProgress />
        </Wrapper>
      )}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {data.map(({ source, title, url, urlToImage }) => (
          <NewsItem
            key={title}
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

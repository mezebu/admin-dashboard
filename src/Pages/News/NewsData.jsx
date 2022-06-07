import React from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import NewsItem from "./NewsItem";
import { Wrapper } from "./styles";
import useAxios from "../../useAxios";

const NewsData = () => {
  // prettier-ignore
  const { data, error, isLoading } = useAxios("https://62986369f2decf5bb7410008.mockapi.io/news");

  return (
    <Box>
      {isLoading && (
        <Wrapper>
          <CircularProgress />
        </Wrapper>
      )}
      {error && <Wrapper>{error}</Wrapper>}
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

import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Button, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { StyledTitle } from "./styles";

const NewsItem = ({ urlToImage, source, title, url }) => {
  return (
    <Grid item lg={4} md={6} sm={12} xs={12}>
      <Card elevation={0} sx={{ height: 350 }}>
        <CardMedia
          component="img"
          height="50%"
          image={urlToImage}
          alt="image source"
        />
        <CardContent>
          <StyledTitle>
            <Typography variant="button" sx={{ fontWeight: 900 }}>
              {source.name}
            </Typography>
            <Button
              sx={{ textTransform: "none" }}
              href={url}
              target="_blank"
              endIcon={<ArrowForwardIcon />}
            >
              Full story
            </Button>
          </StyledTitle>

          <Typography variant="subtitle1" fontWeight={500}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NewsItem;

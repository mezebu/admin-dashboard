import React from "react";
import { Button, CardActions, Grid, Typography } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";

import { green } from "@mui/material/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NewsItem = ({ urlToImage, source, title, url }) => {
  return (
    <Grid item lg={4} md={6} sm={12} xs={12}>
      <Card elevation={0} sx={{ height: 320 }}>
        <CardMedia
          component="img"
          height="160"
          image={urlToImage}
          alt="image source"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="span"
            sx={{ background: green[700], p: 0.5, borderRadius: 1 }}
          >
            {source.name}
          </Typography>
          <Typography variant="subtitle1" fontWeight={500}>
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={url} target="_blank" endIcon={<ArrowForwardIcon />}>
            Full story
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsItem;

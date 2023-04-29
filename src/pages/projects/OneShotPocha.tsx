import React from "react";
import { makeStyles, Theme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const OnesShotPocha = () => {
  return (
    <div >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card >
            <CardMedia
              image="/image1.jpg"
              title="Image 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Image 1 Description
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Some text about the image 1 here...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card >
            <CardMedia
              image="/image2.jpg"
              title="Image 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Image 2 Description
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Some text about the image 2 here...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card >
            <CardMedia
              image="/image3.jpg"
              title="Image 3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Image 3 Description
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Some text about the image 3 here...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h1">
            Project Title
          </Typography>
          <Typography variant="body1" component="p">
            Some text about the project here...
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2">
            Project Details
          </Typography>
          <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
            <li>Detail 3</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default OnesShotPocha;

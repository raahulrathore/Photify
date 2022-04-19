import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material//Grid";

export default function ImageCard(props) {
  console.log(props.imageData)
  return (
    <Grid
      container
      spacing={1}
      columns={4}
      justifyContent="space-evenly"
      alignItems="center"
    >
      {props.imageData.map((val) => (
        <Card sx={{ maxWidth: 345, padding: "20px", marginTop: "20px" }}>
          <CardMedia
            id={val.id}
            component="img"
            height="250"
            image={val.urls.regular}
            alt={val.alt_description}
            loading='Lazy'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {val.user.name}
            </Typography>
            <Typography
              variant="caption"
              component="div"
              sx={{ paddingBottom: "8px", marginTop: "-8px" }}
            >
              {val.created_at.split("T")[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {val.description ??
                `Awesome Image from Unsplash!! I personally love it, Hope you'll find this amazing too!`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open(val.links.html, "_blank");
              }}
            >
              Link
            </Button>
            <Button
              size="small"
              onClick={() => {
                window.open(val.links.download, "_blank");
              }}
            >
              Full Size
            </Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
}

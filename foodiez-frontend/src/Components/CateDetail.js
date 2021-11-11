import React from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router";
import cateStores from "../Stores/cateStores";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
  paddingTop: 65,

  // align: {
  //   center: align
  // },
  // style: {
  //   marginBottom: "70px"
  // },
});

function CateDetail({ category }) {
  const classes = useStyles();

  //   return (
  //     <Card className={classes.root}>
  //       <CardActionArea>
  //         <Link to={`/category/${category.slug}`}>
  //         <CardMedia
  //           className={classes.media}
  //           image={category.image}
  //           title="Contemplative Reptile"
  //         /></Link>
  //         <CardContent>
  //           <Typography gutterBottom variant="h5" component="h2">
  //             {category.name}
  //           </Typography>
  //           <Typography variant="body2" color="textSecondary" component="p">
  //             {category.slug}
  //           </Typography>
  //         </CardContent>
  //       </CardActionArea>
  //       <CardActions>
  //         <Button s ize="small" color="primary">
  //           Add Recipe
  //         </Button>
  //         <Button size="small" color="primary">
  //           Learn More
  //         </Button>
  //       </CardActions>
  //     </Card>
  //   );
  // }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/category/${category.slug}`}>
          <CardMedia
            className={classes.media}
            image={category.image}
            title="Contemplative Reptile"
            align={"center"}
            style={{ marginBottom: "70px" }}
            style={{ marginTop: "100px" }}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {category.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {category.slug}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          s
          ize="small"
          color="primary"
          align="center"
          // variant= {"contained"}
          textAlign="center"
          lineHeight="2"
        >
          Add Recipe
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

//   The duration of the category in months, Users that joined this category, Start date, End date,
// The user who created the category
export default observer(CateDetail);

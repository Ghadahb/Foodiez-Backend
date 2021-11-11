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
import recipeStore from "../Stores/recipeStore";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function RecipeItem({recipe}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/category/:categoryId/recipes/${recipe.slug}`}>
        <CardMedia
          className={classes.media}
          image={recipe.image}
          title="Contemplative Reptile"
        /></Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {recipe.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {recipe.slug}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button s ize="small" color="primary">
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
export default observer(RecipeItem);

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { observer } from "mobx-react";
import recipeStore from "../Stores/recipeStore";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function RecipeCard({ recipe }) {
    const classes = useStyles();
    const handleDelete = () => recipeStore.deleteRecipe(recipe._id);

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={recipe.image}
            title="Contemplative Reptile"
          />
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
          <Button size="small" color="primary">
            Add Recipe
          </Button>
          <Button size="small" color="primary" >
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
//   The duration of the category in months, Users that joined this category, Start date, End date,
// The user who created the category
export default observer(RecipeCard);
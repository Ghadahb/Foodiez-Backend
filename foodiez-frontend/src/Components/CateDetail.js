import React from "react";
import { observer } from "mobx-react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import RecipeList from "./RecipeList";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function CateDetail({ category }) {
    const classes = useStyles();

    return (
      <Link to="/recipes"> 
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={category.image}
            title="Contemplative Reptile"
          />
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
          <Button s
          ize="small" 
          color="primary"
          >
            Add Recipe
          </Button>
          <Button size="small" color="primary" >
            Learn More
          </Button>
        </CardActions>
      </Card>
      
      </Link>
      
    );
  }
//   The duration of the category in months, Users that joined this category, Start date, End date,
// The user who created the category
export default observer(CateDetail);

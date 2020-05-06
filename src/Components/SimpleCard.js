import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: "70vw",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ player }) {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={{ margin: "30px" }}>
      <CardContent>
        <Typography className={classes.title}>
          First Name: {player.first_name}
        </Typography>
        <Typography component="h1" className={classes.title}>
          Last Name: {player.last_name}
        </Typography>
        <Typography component="h2">Team Name: {player.team.name}</Typography>
        <Typography className={classes.pos}>
          Weight: {player.weight_pounds}
        </Typography>
        <Typography variant="body2" component="p">
          Division: {player.team.division}
        </Typography>
        <Typography variant="body2" component="p">
          City: {player.team.city}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

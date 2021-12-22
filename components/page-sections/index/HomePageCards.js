import React from 'react';
import MyCard from '../../card';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
}));

const HomePagerCards = () => {
    const classes = useStyles();
  return (
      <React.Fragment>
          <Container>
          <div className={classes.root}>
    <MyCard description="uday"/>
   
              <MyCard />
              </div>
              </Container>
    </React.Fragment>
  );
}

export default HomePagerCards;


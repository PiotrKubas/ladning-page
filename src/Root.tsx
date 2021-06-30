import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import background from './assets/background.jpg';
import Header from './components/Header';
import PlaceToTravel from './components/PlaceToTravel';

const useStyle = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflowY: 'hidden',
    },
}));

const Root = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Header />
            <PlaceToTravel />
        </div>
    );
};

export default Root;

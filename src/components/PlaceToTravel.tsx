import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../data/places';
import useWindowPosition from '../hooks/useWindowPosition';

const useStyle = makeStyles((theme) => ({
    wrapper: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
}));

const PlaceToTravel = () => {
    const classes = useStyle({});
    const checked = useWindowPosition('header');
    return (
        <div className={classes.wrapper} id="placeToTravel">
            <ImageCard place={places[1]} checked={checked} />
            <ImageCard place={places[0]} checked={checked} />
        </div>
    );
};

export default PlaceToTravel;

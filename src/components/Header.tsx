import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyle = makeStyles((theme) => ({
    wrapper: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        textAlign: 'center',
    },
    bar: {
        background: 'none',
        boxShadow: 'none',
        alignItems: 'center',
    },
    icon: {
        color: 'white',
        fontSize: '2rem',
    },
    barTitle: {
        flexGrow: 1,
        color: 'white',
        textAlign: 'left',
    },
    barWrapper: {
        width: '80%',
    },
    colorText: {
        color: '#8df9ab',
    },
    title: {
        fontSize: '4rem',
    },
    goDown: {
        fontSize: '5rem',
        color: '#8df9ab',
    },
}));

const Header = () => {
    const classes = useStyle({});
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.wrapper} id="header">
            <AppBar className={classes.bar}>
                <Toolbar className={classes.barWrapper}>
                    <h1 className={classes.barTitle}>
                        My <span className={classes.colorText}>Island.</span>
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse
                in={checked}
                {...(checked ? { timeout: 2000 } : {})}
                collapsedHeight={50}
            >
                <div>
                    <h1 className={classes.title}>
                        Welcome to <br /> My{' '}
                        <span className={classes.colorText}>Island.</span>
                    </h1>
                    <Scroll to="placeToTravel" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
};

export default Header;

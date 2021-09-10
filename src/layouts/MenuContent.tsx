import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

import Dashboard from '../pages/Dashboard';
import Recovery from '../pages/Recovery';
import Investment from '../pages/Investment';

import {isMobile} from 'react-device-detect';

interface Props {
    connected:any;
    onConnect: any;
    chainId: any;
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
        background: theme.palette.menucontent.dark,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 25,
        width: '100%',
        height: '100%'
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#666666',
        cursor: 'pointer',
    },
    item: {
        marginLeft: 15
    }
  }),
);

const MenuContent: React.FC<Props> = ({ connected, clickedItem }:any) => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} item xs={12} >
            {clickedItem==="Dashboard" && <Dashboard  connected={connected} />}
            {clickedItem==="Recovery" && <Recovery  connected={connected} />}
            {clickedItem==="Investment" && <Investment  connected={connected} />}
        </Grid>
    );
}

export default MenuContent;
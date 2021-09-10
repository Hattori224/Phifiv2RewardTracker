import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// import {isMobile} from 'react-device-detect';

import Sidebar from './Sidebar';
import MenuContent from './MenuContent';
import Sidebarmobile from './Sidebarmobile';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.default,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            position: 'relative'
        },
        sidebar: {
            backgroundColor: theme.palette.background.default,
            width: '100%',
            height: '100%',
            maxWidth: '250px',
            minWidth: '250px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        sidebarmobile: {
            backgroundColor: theme.palette.background.default,
            width: '100%',
            height: '100%',
            maxWidth: '250px',
            minWidth: '250px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            left: '0px',
        },
        menucontent: {
            backgroundColor: theme.palette.background.default,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    }),
);

interface Props {
    light: boolean,
    isMobile: boolean,
}

const Contentbody: React.FC<Props> = ({ light, menuShow, isClickMobile, isMobile, ...rest }: any) => {
    const classes = useStyles();
    const [clickedItem, setClickItem] = useState("Dashboard")
    const onClickMenuItem = (item: string) => {
        setClickItem(item);
    }

    return (
        <Grid className={classes.root}>
            {!isMobile &&
                <Grid className={classes.sidebar}>
                    <Sidebar light={light} {...rest} clickedItem={clickedItem} onClickMenuItem={onClickMenuItem} item xs={12} sm={3} />
                </Grid>
            }
            {isClickMobile && isMobile && <Grid className={classes.sidebarmobile}>
                <Sidebarmobile light={light} {...rest} clickedItem={clickedItem} onClickMenuItem={onClickMenuItem} item xs={12} sm={3} />
            </Grid>}
            <Grid className={classes.menucontent} item xs={12} sm={12}>
                <MenuContent light={light} {...rest} clickedItem={clickedItem} />
            </Grid>
        </Grid>
    );
}

export default Contentbody;
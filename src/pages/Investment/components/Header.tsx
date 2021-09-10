import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
// import { isWhiteSpaceLike } from 'typescript';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Mainnet from '../../../assets/images/layout/Mainnet.png';

interface Props {
    connected:any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        [theme.breakpoints.down("xs")]: {
            marginTop: 15,
            marginBottom: 12,
        }
    },
    title: {
        fontWeight: 700,
        fontSize: 30,
        color: theme.palette.text.primary,
        [theme.breakpoints.down("xs")]: {
            fontSize: 18,
        }
    },
    oneItem: {
        marginTop: 15,
        padding: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: theme.palette.background.paper,
        fontWeight: 400,
        color: theme.palette.text.primary,
    },
    oneItemEven: {
        marginTop: 15,
        padding: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: theme.palette.background.paper,
        fontWeight: 400,
        color: theme.palette.text.primary,
        "@media (min-width: 920px)": {
            marginLeft: 20
        },
        "@media (max-width: 920px)": {
            marginLeft: 0
        }
    },
    firstrow: {
        "@media (max-width: 920px)": {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
        "@media (min-width: 920px)": {
            display: 'flex',
            flexDirection: 'row'
        }
    }
  }),
);

const Header: React.FC<Props> = ({ connected }:any) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Tasks to boost your income
            </Box>
            <Box className={classes.title} style={{fontSize: 18, fontWeight: 400}}>
                The tasks outlined below can siginificantly impact the (future) value of your investment.
            </Box>
            <Box className={classes.title} style={{fontSize: 18, fontWeight: 400}}>
                As such, investors highly encourged to perform these tasks as often as possible.
            </Box>
            <Grid className={classes.firstrow}>
                <Grid className={classes.oneItem} style={{display: 'flex', flexDirection: 'column'}} item xs={12} sm={12}>
                    <Grid style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '90%'}}>
                        <Grid item xs={12} sm={4} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <img src='https://tikitoken.app/static/media/coinmarketcap.a72a0e25.png' style={{width: 80, height: 80}} />
                        </Grid>
                        <Grid item xs={12} sm={8} style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
                            <Box style={{textAlign: 'left',fontSize: 32, marginTop: 30}}>CoinMarketCap</Box>
                            <Box style={{textAlign: 'left', marginTop: 15}}>We are listed on CMC! To help get more exposure and enhance market value:</Box>
                            <Box style={{textAlign: 'left', marginTop: 15}}>✅Use <span style={{cursor: 'pointer'}}>keeprefreshing.com</span>  and set timer to 10 seconds. Open as many tabs as you can.</Box>
                            <Box style={{textAlign: 'left', marginTop: 5}}>✅Add Tiki Token to watchlist, and tell your friends to do the same.</Box>
                            <Box style={{textAlign: 'left', marginTop: 5}}>✅Vote 'Good' at the bottom of the page.</Box>
                            <span style={{cursor: 'pointer', textDecoration: 'underline', textAlign: 'left', marginTop: 15, marginBottom: 15}}>TIKI on CoinMarketCap</span>
                        </Grid>
                    </Grid>
                    <Grid style={{display: 'flex', alignItems: 'flex-start', cursor: 'pointer', marginTop: 10, borderTop: '1 solid black'}}>
                        <input type='checkbox' />
                        <span>Task completed for today</span>
                    </Grid>
                </Grid>
                <Grid className={classes.oneItemEven} style={{display: 'flex', flexDirection: 'column'}} item xs={12} sm={12}>
                    <Grid style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '90%'}}>
                        <Grid item xs={12} sm={4} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <img src='	https://tikitoken.app/static/media/logo_coingecko.30d53b9c.png' style={{width: 80, height: 80}} />
                        </Grid>
                        <Grid item xs={12} sm={8} style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
                            <Box style={{textAlign: 'left',fontSize: 32, marginTop: 30}}>CoinGeoko</Box>
                            <Box style={{textAlign: 'left', marginTop: 15}}>Go to TIKI's CoinGecko page and click on the STAR to LIKE TIKI!</Box>
                            <span style={{cursor: 'pointer', textDecoration: 'underline', textAlign: 'left', marginTop: 15, marginBottom: 15}}>TIKI on CoinMarketCap</span>
                        </Grid>
                    </Grid>
                    <Grid style={{display: 'flex', alignItems: 'flex-start', cursor: 'pointer', marginTop: 10, borderTop: '1 solid black'}}>
                        <input type='checkbox' />
                        <span>Task completed for today</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.firstrow}>
                <Grid className={classes.oneItem} style={{display: 'flex', flexDirection: 'column'}} item xs={12} sm={12}>
                    <Grid style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '90%'}}>
                        <Grid item xs={12} sm={4} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <img src='https://tikitoken.app/static/media/logo_google.b7727941.svg' style={{width: 80, height: 80}} />
                        </Grid>
                        <Grid item xs={12} sm={8} style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
                            <Box style={{textAlign: 'left',fontSize: 32, marginTop: 30}}>Google</Box>
                            <Box style={{textAlign: 'left', marginTop: 15}}>Searching for these terms on Google increases their ranking, causing more people to get them as suggestions.</Box>
                            <span style={{cursor: 'pointer', textDecoration: 'underline', textAlign: 'left', marginTop: 15}}>Search Google for "TIKI Token"</span>
                            <span style={{cursor: 'pointer', textDecoration: 'underline', textAlign: 'left', marginBottom: 5}}>Search Google for "TIKI free bnb"</span>
                            <Box style={{textAlign: 'left', marginTop: 15}}>Of course, feel free to do any amount of additional searches for even more effect!</Box>
                        </Grid>
                    </Grid>
                    <Grid style={{display: 'flex', alignItems: 'flex-start', cursor: 'pointer', marginTop: 10, borderTop: '1 solid black'}}>
                        <input type='checkbox' />
                        <span>Task completed for today</span>
                    </Grid>
                </Grid>
                <Grid className={classes.oneItemEven} style={{display: 'flex', flexDirection: 'column'}} item xs={12} sm={12}>
                    <Grid style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '90%'}}>
                        <Grid item xs={12} sm={4} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <img src='https://tikitoken.app/static/media/logo_youtube.46bc6904.svg' style={{width: 80, height: 80}} />
                        </Grid>
                        <Grid item xs={12} sm={8} style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
                            <Box style={{textAlign: 'left',fontSize: 32, marginTop: 30}}>YouTube</Box>
                            <Box style={{textAlign: 'left', marginTop: 15}}>Searching for these terms on YouTube increases their ranking, causing more people to get them as suggested videos or search suggestions.</Box>
                            <span style={{cursor: 'pointer', textDecoration: 'underline', textAlign: 'left', marginTop: 15}}>Search YouTube for "TIKI Token"</span>
                            <span style={{cursor: 'pointer', textDecoration: 'underline', textAlign: 'left', marginBottom: 5}}>Search YouTube for "TIKI free bnb"</span>
                        </Grid>
                    </Grid>
                    <Grid style={{display: 'flex', alignItems: 'flex-start', cursor: 'pointer', marginTop: 10, borderTop: '1 solid black'}}>
                        <input type='checkbox' />
                        <span>Task completed for today</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.firstrow}>
                <Grid className={classes.oneItem} style={{display: 'flex', flexDirection: 'column'}} item xs={12} sm={12}>
                    <Grid style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '90%'}}>
                        <Grid item xs={12} sm={4} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <img src='	https://tikitoken.app/static/media/logo_twitter.66649964.svg' style={{width: 80, height: 80}} />
                        </Grid>
                        <Grid item xs={12} sm={8} style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
                            <Box style={{textAlign: 'left',fontSize: 32, marginTop: 30}}>Twitter</Box>
                            <Box style={{textAlign: 'left', marginTop: 15}}>Using the following hashtags in your tweet(s) will increase their ranking, get them trending and attract the attention of potential new investors.</Box>
                            <Box style={{textAlign: 'left', marginTop: 15, fontSize: 17}}>#TIKIToken#TIKI1Dollar#TIKIBNB</Box>
                            <span style={{cursor: 'pointer', textDecoration: 'underline', textAlign: 'left', marginTop: 15}}>Composer a new tweet</span>
                        </Grid>
                    </Grid>
                    <Grid style={{display: 'flex', alignItems: 'flex-start', cursor: 'pointer', marginTop: 10, borderTop: '1 solid black'}}>
                        <input type='checkbox' />
                        <span>Task completed for today</span>
                    </Grid>
                </Grid>
                <Grid className={classes.oneItemEven} style={{display: 'flex', flexDirection: 'column'}} item xs={12} sm={12}>
                    <Grid style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '90%'}}>
                        <Grid item xs={12} sm={4} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <img src='https://tikitoken.app/static/media/logo_instagram.3c451c27.svg' style={{width: 80, height: 80}} />
                        </Grid>
                        <Grid item xs={12} sm={8} style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
                            <Box style={{textAlign: 'left',fontSize: 32, marginTop: 30}}>Instagram</Box>
                            <Box style={{textAlign: 'left', marginTop: 15}}>Use these hashtags on your posts to increase TIKI's exposure on this platform. For example, post your stats!</Box>
                            <Box style={{textAlign: 'left', marginTop: 15, fontSize: 17}}>#TIKI#TIKIToken</Box>
                            <span style={{cursor: 'pointer', textDecoration: 'underline', textAlign: 'left', marginTop: 15}}>Post on Instagram</span>
                        </Grid>
                    </Grid>
                    <Grid style={{display: 'flex', alignItems: 'flex-start', cursor: 'pointer', marginTop: 10, borderTop: '1 solid black'}}>
                        <input type='checkbox' />
                        <span>Task completed for today</span>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;
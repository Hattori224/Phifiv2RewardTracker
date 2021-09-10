import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';

interface Props {
    connected: any;
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
        width: '100%',
        minHeight: 'calc(100vh - 203px)'
    }
  }),
);

const Investment: React.FC<Props> = ({ connected }:any) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header  connected={connected} />
        </div>
    );
}

export default Investment;
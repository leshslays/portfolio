import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item sm={4} xs={12}>
                <Paper className={classes.control}>
                    <div className="img-with-text">
                        <ul>
                            <Link to="/about">
                                <img src="https://gbksoft.com/blog/wp-content/uploads/2019/07/trading-984x555.png" alt="Algorithmic Trading Pic"/>
                                <p>
                                    <a>Algorithmic Trading</a>
                                </p>
                            </Link>
                        </ul>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

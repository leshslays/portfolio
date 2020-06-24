import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        textAlign:'center',
        width: 275,
        height:60,
        backgroundColor:"gray"
    },
    title: {
        fontSize: 24,
        alignItems:"center",
        color:"aliceblue"
    }
});

export default function SimpleCard() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    &#60;ninja report/>
                </Typography>
            </CardContent>
        </Card>
    );
}
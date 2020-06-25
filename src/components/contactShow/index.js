import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TheCard from '../contactShow/card';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
        textAlign:'center'
    },
    container: {
        display: 'flex',
        alignItems:'center',
        alignContent:'center'
    },
    cardroot:{
        maxWidth: 345,
    },
    media: {
        height:140,
    }
}));

export default function SimpleGrow() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div className={classes.root}>
            <FormControlLabel
                control={<Switch checked={checked} color="secondary"  onChange={handleChange} />}
                label="Show contact information" style={{color:"aliceblue"}}
            />
            <div className={classes.container}>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <Grow in={checked}>
                    <center><TheCard /></center>
                </Grow>
            </div>
        </div>
    );
}
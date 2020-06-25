import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pic2 from '../assets/showpic2.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 100
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={pic2}
                    title="Contact Card"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Leshlye Rivera <Link href={"https://www.linkedin.com/in/leshlyerivera/"} target="_blank">
                        <LinkedInIcon style={{fontSize:40, color:"#547cb6"}}/>
                    </Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                            To reach me, feel free to connect with me on LinkedIn. Alternatively, you can text/call me or send me an email.
                    </Typography>
                </CardContent>

            <Button size="small" color="primary">
                    alexanderrivera98@gmail.com
                </Button>

                <Button size="small" color="primary">
                    (201)724-8266
                </Button>
        </Card>
    );
}
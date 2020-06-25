import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Image from 'material-ui-image';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../tileData/tileData';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: "#313333",
    },
    gridList: {
        width: 800,
        height: "auto",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function TitlebarGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList  cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div" style={{color:"white",fontSize:"large"}}>PROJECTS 2020</ListSubheader>
                </GridListTile>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <Image src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>Desc: {tile.details}</span>}
                            actionIcon={
                                <Link href ={tile.reference}>
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                                </Link>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
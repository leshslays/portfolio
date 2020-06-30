import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import emailTileData from './emailTileData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: "#313333",
    },
    gridList: {
        width: 700,
        height: "auto",
    },
}));

export default function ImageGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={200} className={classes.gridList} cols={6}>
                {emailTileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <Image src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
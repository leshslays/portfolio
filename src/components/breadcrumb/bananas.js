import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import Link from '@material-ui/core/Link';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: "aliceblue",
        height: theme.spacing(3),
        color: "#547cb6",
        fontWeight: theme.typography.fontWeightRegular,
        textDecoration:"none",
        '&:hover, &:focus': {
            backgroundColor: "#547cb6",
            color: "aliceblue"
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);

export default function CustomizedBreadcrumbs() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link href ='/'>
                <StyledBreadcrumb
                    component="a"
                    label="Projects"
                    icon={<SquareFootIcon fontSize="small" />}
                />
            </Link>
            <Link href ='/bananas'>
                <StyledBreadcrumb component="a" label="Bananas Potato Project"/>
            </Link>
        </Breadcrumbs>
    );
}
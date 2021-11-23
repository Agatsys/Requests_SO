import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import "./CustomSkeleton.scss"


const CustomSkeleton = ({
    height
}) => {
    return (
        <Box className="component-custom-skeleton">
            <Skeleton height={height} animation="wave" />
            <Skeleton height={height} animation="wave" />
            <Skeleton height={height} animation="wave" />
            <Skeleton height={height} animation="wave" />
            <Skeleton height={height} animation="wave" />
        </Box>
    )
}

export default CustomSkeleton;
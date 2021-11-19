import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


const CustomSkeleton = ({
    width,
    height
}) => {
    return (
        <Box width={width} >
            <Skeleton height={height} animation="wave" />
            <Skeleton height={height} animation="wave" />
            <Skeleton height={height} animation="wave" />
            <Skeleton height={height} animation="wave" />
            <Skeleton height={height} animation="wave" />
        </Box>
    )
}

export default CustomSkeleton;
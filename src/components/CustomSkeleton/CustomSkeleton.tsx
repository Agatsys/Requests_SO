import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


const CustomSkeleton = () => {
    return (
        <Box width={300} >
            <Skeleton height={100} animation="wave" />
            <Skeleton height={100} animation="wave" />
            <Skeleton height={100} animation="wave" />
            <Skeleton height={100} animation="wave" />
            <Skeleton height={100} animation="wave" />
        </Box>
    )
}

export default CustomSkeleton;
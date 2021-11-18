import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


const CustomSkeleton = () => {
    return (
        <Box width={800} >
            <Skeleton height={150} animation="wave" />
            <Skeleton height={150} animation="wave" />
            <Skeleton height={150} animation="wave" />
            <Skeleton height={150} animation="wave" />
            <Skeleton height={150} animation="wave" />
        </Box>
    )
}

export default CustomSkeleton;
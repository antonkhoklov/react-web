import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';

const LoadingComponent: React.FC<{ shrink?: boolean; content?: string }> = ({
    shrink = false,
    content
}) => {
    return (
        <Typography variant="subtitle1" component="h6" align='center'>
            <span>{content}<CircularProgress disableShrink={shrink} /></span>
        </Typography>
    );
};

export default LoadingComponent;

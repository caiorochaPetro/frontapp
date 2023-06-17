import * as React from 'react';
import { Grid, Box} from '@mui/material';

import { ProductList } from '../products/products';

function Home(){
    return(
        <Box display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={'column'}
        minWidth={1000}>
            <Grid container sx={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                flexFlow: 'column',
                minWidth: 1000,
            }}>
                <ProductList/>
            </Grid>
        </Box>
    );
};

export default Home;
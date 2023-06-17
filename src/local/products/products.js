import * as React from 'react';

import { Grid, Paper, Card, CardHeader, CardContent, CardMedia } from '@mui/material';

import { useQuery } from '@apollo/client';

import { QUERY_PRODUCTS } from '../queries/query';

export function ProductList(){
    const {data, loading, error} = useQuery(QUERY_PRODUCTS);
    if (loading){
        return(<>Loading...</>);
    }
    if (error){
        return(<>{error.message}...</>);
    }
    return(
        //request data
        <>
            {data.products.map((item, index)=>{
                return(
                <Grid item xs={4} key={index}>
                    <Paper>
                        <Card>
                            <CardHeader
                                title={item.nome}
                                subheader={item.short_description}
                                />
                            <CardContent>
                            <CardMedia
                                component="img"
                                height="194"
                                image={"http://localhost:8001/images/"+item.imagens[0]}
                                alt="Paella dish"
                            />
                                {item.long_description}
                                {item.peso}
                                {item.dimensoes}
                                {item.disponibilidade}
                                {item.categoria}
                                {item.cor}
                                {item.marca}
                                {item.tags}

                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                );
            })}
        </>
    );
}
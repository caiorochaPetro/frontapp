import * as React from 'react';

import { Box, Button } from '@mui/material'


export function Counter({initialValue}){

    let [value, setvalue] = React.useState(initialValue);

    const increment = () =>{
        let nValue = value+1;
        setvalue(nValue);
        console.log(value)

    }
    const decrement= () =>{
        let nValue = value-1;
        setvalue(nValue);
        
    }

    return(
        <>
            <Box>Número: {value}</Box>

                <Button onClick={()=>increment()}>Incrementar</Button>

            <Button onClick={()=>decrement()}>Decrementar</Button>
        </>
    );
}
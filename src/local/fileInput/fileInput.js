import * as React from 'react';
import axios from 'axios';

export function FileInput({textObj}){

    const handleFile = (FileObj) =>{
        let file = FileObj.target.files[0];
    
        const formData = new FormData();
        formData.append("file", file);
    
        axios.post('http://localhost:8001/upload/', formData).then(res=>{console.log(res.statusText)});
    
    }

    let [text, setTexte] = React.useState(textObj);
        return(
            <>
                <Grid>{text.Content}</Grid>
                <Input type='file' inputProps={{accept:'application/pdf'}} onChange={(e)=>handleFile(e)}></Input>
            </>
        );
};
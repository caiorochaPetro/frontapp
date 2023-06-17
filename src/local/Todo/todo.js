export function TodoList(){

    const style = {
        textDecoration: 'line-through'
    }

    let [value, setValue] = React.useState('Tarefa 1');
    let [list, setList] = React.useState([]);
    let [completeList, setCompleteList] = React.useState([]);

    const taskInput = (obj) =>{
        setList(list=>[obj, ...list]);
    }

    const taskRemove = (index) =>{
        let newState = list.map((element, indexInt)=>{
            if(index == indexInt){   
                return null;
            }
            else{
                return element;
            }
        })        
        let newListStyles = list.map((element, indexInt)=>{
            if(index == indexInt){   
                return null;
            }
            else{
                return element;
            }
        })
        let removed = newState.filter(element => element !== null);
        console.log(removed);
        setList(removed);

    }



    const completeh = (index) =>{
        let newState = list.map((element, indexInt)=>{
            if(index == indexInt){   
                return null;
            }
            else{
                return "style";
            }
        })
        let removed = newState.filter(element => element !== null);
        console.log(removed);
        setCompleteList(removed);
    }

    return(
        <>
            <TextField label="Nova Tarefa" value={value} onChange={(e) =>setValue(e.target.value)}/>
            <Button onClick={()=>{taskInput(value)}}>Add</Button>
            {
                list.map((item, index)=>{
                    /*completeList.map((item2, index2)=>{
                        if(index === index2){*/
                            return(
                                <>
                                    <div style={style}>{item}</div>
                                    <Button id="complete-button" onClick={()=>{completeh(index)}}>Finish</Button>
                                    <Button id="remove-button" onClick={()=>{taskRemove(index)}}>Remove</Button>
                                </>
                            );
                        /*}
                        else{
                            return(
                                <>
                                <div key={index}>
                                    <div>{item}</div>
                                    <Button id="complete-button" onClick={()=>{completeh(index)}}>Finish</Button>
                                    <Button id="remove-button" onClick={()=>{taskRemove(index)}}>Remove</Button>
                                </div>
                                </>
                            )};
                            });*/
                    })
                };
                
        </>
    );
}
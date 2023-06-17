export function LoginForm(){
    let [userName, setUserName] = React.useState('');
    let [userPassword, setuserPassword] = React.useState('');
    let [ value, setValue] = React.useState();
    const loginButton=()=>{
        setValue(userName);
        setUserName('');
        setuserPassword('');
        setTimeout(()=>{
            setValue();
        }, 2500);
    }
    return(
        <>
            <TextField type="text" label="Nome de Usuário" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
            <TextField type="text" label="Senha" onChange={(e)=>setuserPassword(e.target.value)} value={userPassword}/>
            <Button onClick={()=>loginButton()}>Login</Button>
            <p>Bem-vindo, {value}!</p>
        </>
    );
}

export function Login() {
    let [usuario, setUsuario] = React.useState('');
    let [password, setPassword] = React.useState('');
    let [status, setStatus] = React.useState(<></>);

    const usernameInput = () =>{

    }


    const loginButton = ()=>{
        if(password=="senha"){
            setStatus(
            <Box>
                Login bem-sucedido!
            </Box>);
        }
        else{
            setStatus(
            <Box>
                Login inválido!
            </Box>);
        }

    }

    return( 
        <>
            <TextField label="Nome de Usuário no Login" onChange={(e)=>{setUsuario(e.target.value)}}></TextField>
            <TextField label="Senha no login" onChange={(e2)=>{setPassword(e2.target.value)}}></TextField>
            <Button onClick={()=>loginButton()}>Faça Login</Button>

            {
                status
            }

            
        </>
    );
}
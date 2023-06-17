export function GetUsers(){
    const { loading, error, data } = useQuery(GET_USERS);
    
    if (loading) {
        return <p>Loading...</p>;
    }
    
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    
      return (
        <div>
          <h2>User List</h2>
          <ul>
            {data.usuarios.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
                <div>{user.address.map((ad)=>{
                    return(
                        <div>{ad.city}, <a href="">{ad.street}</a></div>
                    );
                })}</div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
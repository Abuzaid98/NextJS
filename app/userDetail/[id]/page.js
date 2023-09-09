import axios from "axios";

async function getUser (id){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    return response.data;
}

export const metadata = {
    title: 'UserDetail',
    description: 'React App | UserDetail'
  }

const Page = async ({params})=>{
    const user = await getUser(params.id) ;
    // console.log(user)
    return(
        <>
            <h1>This is details of {user.id} No id Person</h1> <br/>
            <h2>{user.name}</h2>
            <div>
                {user.username} <br/>
                {user.email} <br/>
                {user.phone} <br/>
                {user.website} <br/>
                {user.company.name} <br/>
                {user.address.city} <br/>
                <hr/>
                <hr/>
                <hr/>
            </div>

        </>
    )
}
export default Page ;
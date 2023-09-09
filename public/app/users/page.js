import axios from "axios";
import Link from "next/link";

async function getUsers() {   
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;  
}

export const metadata = {
    title: 'Users',
    description: 'React App | Users'
  }
const Page=async()=>{
    const users=await getUsers();
    //console.log(users);
    return(
       <>
            <h2>Users</h2>
            {
                users.map(user=>{return(
                    <div key={user.id}>
                        <Link href={"/userdetail/"+user.id}> {user.name} </Link> <hr />
                    </div>
                )})
            }
       </> 
    );
}
export default Page;
import axios from "axios"
import Link from "next/link"

async function getUsers() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data    
}

export const metadata = {
    title: 'users',
    descrtiption: 'React App | Users'
}
   
const Page = async()=>{
    const users = await getUsers() ;
    // console.log(users) ;
    return(
        <>
            <h1>This is a User page</h1>
            <h2>where you can see all users</h2>
            {
                users.map((user)=>{
                    return(
                        <div key={user.id}>
                            {user.name} <br/>
                            {user.username} <br/>
                            {user.email} <br/>
                            {user.phone} <br/>
                            <Link href={"/userDetail/"+user.id}>{user.name} </Link>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Page ;
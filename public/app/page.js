'use client'
import { useRouter } from "next/navigation";
export const metadata = {
  title: 'Home',
  description: 'React App | Home'
}
const Home=()=>{
  const router=useRouter();
  return(
    <>
      <h2>Home 2.0</h2>
      <p>
          Some text for Home goes here. Some text for Home goes here. Some text for Home goes here. Some text for Home goes here. Some text for Home goes here. Some text for Home goes here. 
      </p>
      
      <p>
        <input type="button" value="Go to users" onClick={()=>router.push("/users")} />
      </p>
    </>
  );
}
export default Home;
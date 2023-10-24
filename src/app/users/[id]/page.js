import Link from "next/link";
import getUsers from "../../../../services/getUsers"

const User = async ({params}) => {
    const users = await getUsers();
    let userData = users[Number(params.id)-1]
  return (
    <div>
        <h1>User Details</h1>
        {
            userData && 
            <>
                <h3>Name: {userData.name}, ({userData.username})</h3>
                <h4>Email: {userData.email}</h4>
                <h5>{userData.phone}</h5>
                <p>{userData.website}</p>
            </>
        }
    </div>
  )
}

export default User;

export async function generateStaticParams(){
    const users = await getUsers();
    return users.map((user=> ({
        id: user.id.toString()
    })))
}
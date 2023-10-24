import Link from "next/link";
import getUsers from "../../../services/getUsers"
const Users = async () => {
    const users = await getUsers();
  return (
    <div>
        <h1>users</h1>
        {
            users.map((user, index)=> (
                <div key={index}>
                    <h3>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </h3>
                </div>
            ))
        }
    </div>
  )
}

export default Users
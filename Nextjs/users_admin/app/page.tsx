import Image from "next/image";

async function fechUsers(id: string) {
  let url = id
    ? `http://127.0.0.1:8080/users/${_id}`
    : "http://127.0.0.1:8080/users";
  const datos = await fetch(url);
  const res = await datos.json();
  return res
}

export default async function Home() {
  const users = await fechUsers();
  return (
    <div>
      <h1>Home page</h1>

      <ul>
        {
          users.map((user: any) => (
            <li key={user.id}>
              <div>

                <h5>{user.name} {user.lastname}</h5>

                <p>Tienes:
                  {user.Citas.length} <strong>citas pendientes</strong></p>
              </div>
              <img src="profile_user.jpg" alt="userProfile" width={200} height={40} />
            </li>
          ))
        }

      </ul>
    </div>
  )
}

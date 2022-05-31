import { useState } from "react";
import { User } from "./interfaces";

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () =>
    setUser({
      name: "Mitchel",
      age: 23,
      country: "New York",
      address: {
        street: "Main st.",
        number: 38,
        zip: "23345"
      },
      admin: false
    });

  return (
    <>
      <button onClick={fetchUser}>Fetch user on click</button>
      {user && <p>{`Welcome ${user.name}`}</p>}
    </>
  );
}

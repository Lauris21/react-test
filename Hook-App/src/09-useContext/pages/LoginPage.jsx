import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>
        LoginPage - <small>{user?.name}</small>
      </h1>
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>

      <button
        onClick={() => setUser({ id: 3, name: "Jh", email: "jhh@gmail.com" })}
        className="btn btn-primary"
      >
        Add User
      </button>
    </>
  );
};

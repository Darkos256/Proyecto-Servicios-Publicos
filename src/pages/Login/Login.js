import useAuth from "../../Components/Auth/useAuth"

const userCredentials = {};

export default function Login() {
  const {login} = useAuth();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => login(userCredentials)}>Login</button>
    </div>
  )
}

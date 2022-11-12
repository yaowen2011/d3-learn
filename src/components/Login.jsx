import { useState } from 'react';
import axios from 'axios';

function Login() {

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const [user, setUser] = useState({})
  const handleClick = async (evt) => {
    evt.preventDefault();
    setLoading(true)
    try {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1")
      setUser(data)
    } catch(e) {
      setError(true)
    } finally {
      // setLoading(false)
    }
    setLoading(false)
  }
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="username" value={username} onChange={evt => setUsername(evt.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={evt => setPassword(evt.target.value)} />
        <button disabled={!username || !password} onClick={handleClick}>{loading? 'loading':'Login'}</button>
        <p data-testid="error" style={{ visibility: error ? "visible" : "hidden" }}>Something went wrong</p>
      </form>
    </div>
  )
}

export default Login;
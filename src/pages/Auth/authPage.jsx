import { useState } from "react"
import { Login } from "../../components/Login.jsx"
import { Register } from "../../components/Register.jsx"


export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev)
  }

  return (
    <div className="auth-container">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle}/>
      ) : (
        <Register switchAuthHandler={handleAuthPageToggle}/>
      )}
    </div>
  )
}

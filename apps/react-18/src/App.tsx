import { useAuth } from '@aroma/sdk-react-17'

export const App = () => {
  const { isAuthenticated, logout, login } = useAuth()

  const buttonText = isAuthenticated ? 'Logout' : 'Login'

  const onClick = () => {
    isAuthenticated ? logout() : login()
  }

  return (
    <div>
      <h1>React 18 App</h1>
      <button type="button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  )
}

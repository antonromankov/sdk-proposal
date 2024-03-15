import { type FC, createContext, useContext, useEffect, useState } from 'react'

interface AuthContextType {
	isAuthenticated: boolean
	login: () => void
	logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider: FC = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

	useEffect(() => {
		const storedAuth = localStorage.getItem('auth')
		if (storedAuth) {
			setIsAuthenticated(true)
		}
	}, [])

	const login = () => {
		localStorage.setItem('auth', 'true')
		setIsAuthenticated(true)
	}

	const logout = () => {
		localStorage.removeItem('auth')
		setIsAuthenticated(false)
	}

	return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}

export { AuthProvider, useAuth }

import { AuthProvider } from '@aroma/sdk-react-18'
import React from 'react'
import { render } from 'react-dom'

import { App } from './App.tsx'

render(
	<React.StrictMode>
		<AuthProvider>
			<App />
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <GoogleOAuthProvider clientId="466239135989-jm77mg48lhtoivv13918e38cip98rpl6.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </GoogleOAuthProvider>,
  // document.getElementById('root');
)

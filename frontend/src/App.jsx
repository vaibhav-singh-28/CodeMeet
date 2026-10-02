import { SignInButton , Show, SignOutButton, UserButton, useUser } from '@clerk/react'
import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'

function App() {
  const { isSignedIn, isLoaded } = useUser();

  if(!isLoaded) return null

  return (
    <>
      <Routes>
        <Route path="/" element= {!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element= {isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />

      </Routes>
    </>
  )
}

export default App

import './App.css'
import { SignInButton , Show, SignOutButton, UserButton } from '@clerk/react'

function App() {

  return (
    <>
      <h1>Welcome to the app</h1>
      
      <Show when='signed-out'>
      <SignInButton mode='modal'/>
      </Show>

      <Show when="signed-in">
        <SignOutButton />
        <UserButton />
      </Show>

      
    </>
  )
}

export default App

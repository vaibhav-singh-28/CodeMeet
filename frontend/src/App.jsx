import { SignInButton , Show, SignOutButton, UserButton } from '@clerk/react'

function App() {

  return (
    <>
      <h1>Welcome to the app</h1>

      <button className='btn btn-secondary'>Click Me</button>
      
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

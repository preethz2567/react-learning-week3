// TOPIC: Components
// A component is just a function that returns JSX.

function Greeting() {
  return (
    <div>
      <h2>Hello there!</h2>
      <p>This is my first component.</p>
    </div>
  )
}

// Components can be nested inside other components
function App() {
  return (
    <div>
      <Greeting />
      <ProfileCard />
    </div>
  )
}

function ProfileCard(){
  return(
    <>
    <h3>My name is Preethi</h3>
    <p>I like to code.</p>
    </>
  )
}

export default App

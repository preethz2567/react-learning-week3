// TOPIC: Conditional Rendering
// Showing or hiding things based on a condition.
// Two common ways: ternary (? :) and && shorthand.

// --- EXAMPLE ---

function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back! You are logged in.</p>
      ) : (
        <p>Please log in to continue.</p>
      )}

      {/* && shorthand - only shows if isLoggedIn is true */}
      {isLoggedIn && <button>Log Out</button>}
    </div>
  )
}

function App() {
  return (
    <>
        <div>
          <LoginStatus isLoggedIn={true} />
          <LoginStatus isLoggedIn={false} />
        </div>  

        <div>
          <TemperatureAlert temp={20}/>
          <TemperatureAlert temp={40}/>
        </div>

    </>


  )
}


//  PRACTICE EXERCISE 
// Create a component called "TemperatureAlert" that gets a "temp" prop (number).
// If temp > 35 → show " It's too hot outside!"
// If temp < 10 → show " It's freezing!"
// Otherwise  → show " Weather is nice today."
//
// Test it by rendering with temps: 40, 5, 22

// write TemperatureAlert here:

function TemperatureAlert({temp}){

  return(
    <>
     {temp>35 ? (<p>It's too hot outside</p>): 
     temp<10 ? (<p>It's freezing</p>) :
     (<p>Weather is nice today.</p>)}
    
    </>

  )
}


export default App

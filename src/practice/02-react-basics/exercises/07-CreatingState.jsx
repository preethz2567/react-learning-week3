// TOPIC: Creating State (useState)
// State is data that lives inside a component and causes re-render when it changes.
// useState(initialValue) returns [currentValue, setter].

import { useState } from "react"

function LightSwitch() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div>
      <p>Light is: {isOn ? "ON 💡" : "OFF 🌑"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle
      </button>
    </div>
  )
}

function App() {
  return(
  <div>
      <LightSwitch />
      <p>Practise exercise</p>
      <LikeButton/>
  </div>
  )

}


// --- PRACTICE EXERCISE ---
// Create a component called "LikeButton".
// It should have:
//   - a state called "liked" that starts as false
//   - a button that shows "❤️ Unlike" if liked, or "🤍 Like" if not
//   - clicking the button toggles liked
//
// Bonus: show a message "You liked this!" below the button when liked is true.

// write LikeButton here:

function LikeButton(){

  const[liked,setLiked] = useState(false)

  return (
    <>
      <p>The post is {liked ? "Liked" : "Not Liked"}</p>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Unlike" : "🤍 Like"}
      </button>
      {liked && <p>You liked this!</p>}
    </>
  )
}

export default App

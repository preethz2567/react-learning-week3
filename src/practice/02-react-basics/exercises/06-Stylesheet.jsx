// TOPIC: CSS Stylesheet
// Instead of inline styles,  import a .css file
// and use className to apply the styles.

import "./06-Stylesheet.css"

function AlertBox({ type, message }) {
  // the class name changes based on the type
  return (
    <div className={`alert alert-${type}`}>
      <strong>{type.toUpperCase()}:</strong> {message}
    </div>
  )
}

function App() {
  return (
    <>
      <div className="alert-wrapper">
        <AlertBox type="success" message="Your profile was saved." />
        <AlertBox type="error" message="Something went wrong." />
        <AlertBox type="warning" message="Your session will expire soon." />
      </div>

      <div>
        <SimpleCard title="Card1" text="I'm the firstt"/>
        <SimpleCard title="Card2" text="I'm the secondd"/>
      </div>
    </>
  )
}


// PRACTICE EXERCISE
// Open 06-Stylesheet.css and add styles for:
//   .card-box { border, padding, border-radius, margin }
//   .card-title { font-size, color }
//   .card-text { font-size, color: gray }
//
// Then create a "SimpleCard" component below that uses these class names
// and receives "title" and "text" as props.
// Render 2-3 SimpleCard components in App.

// write SimpleCard here:

function SimpleCard({title,text}){

  return(
    <div className="card-box">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </div>
  )
}

export default App

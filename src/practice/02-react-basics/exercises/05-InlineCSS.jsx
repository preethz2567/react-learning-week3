// TOPIC: Inline CSS
// In JSX, you pass styles as a JS object using double curly braces.
// CSS property names become camelCase: background-color → backgroundColor.

// EXAMPLE

function ColorBox({ color, label }) {
  const boxStyle = {
    backgroundColor: color,
    padding: "20px",
    borderRadius: "8px",
    margin: "10px",
    color: "white",
    fontWeight: "bold"
  }

  return (
    <div style={boxStyle}>
      {label}
    </div>
  )
}

function App() {
  return (
    <>
        <div style={{ display: "flex", gap: "10px" }}>
          <ColorBox color="#e74c3c" label="Red Box" />
          <ColorBox color="#3498db" label="Blue Box" />
          <ColorBox color="#2ecc71" label="Green Box" />
        </div>

        <div  style={{display : "grid" , gap:"20px"}}>
          <PriceTag price={105}/>
          <PriceTag price={50}/>
        </div>
    </>
  )
}


//  PRACTICE EXERCISE
// Create a component called "PriceTag" that receives a "price" (number) prop.
// Style it with inline CSS so that:
//   - if price > 100 → text is red and background is #ffe0e0
//   - if price <= 100 → text is green and background is #e0ffe0
// Show the price as "$XX" inside the component.

// write PriceTag here:

function PriceTag({ price }) {

  const tagStyle =
    price > 100
      ? { color: "red", backgroundColor: "#ffe0e0" }
      : { color: "green", backgroundColor: "#e0ffe0" };

  return (
    <div style={tagStyle}>
      ${price}
    </div>
  );
}

export default App

// TOPIC: Props
// Props = data you pass INTO a component, like function arguments.
// Parent passes them, child receives them.

function MovieCard({ title, year, rating }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <p>Rating: {rating}/10</p>
    </div>
  )
}

//  PRACTICE EXERCISE 
// Create a component called "FruitCard" that receives:
//   - name (string)
//   - color (string)
// 
// and displays them in a <div>.
//
// Then render 3 different fruits in App below.

// write FruitCard here:

function FruitCard({name,color}){

  return(
    <>
       <h3>Hi Im {name}</h3>
       <p>My color is {color}</p>  
    </>
  )
}

function App(){

  return(
    <>

        <div>
          <MovieCard title="Inception" year={2010} rating={8.8} />
          <MovieCard title="Interstellar" year={2014} rating={8.6} />
        </div>

        <div>
          <FruitCard name="Apple" color="red"/>
          <FruitCard name="Strawberry" color="Pink"/>

    </div>

    </>
  )
}

export default App

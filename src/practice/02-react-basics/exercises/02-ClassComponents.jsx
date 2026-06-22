// TOPIC: Class Components
// Old way of writing React components (before hooks).
// You extend React.Component and use this.state and this.props.

import React from "react";

class WelcomeBanner extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome back!</h2>
        <p>Good to see you here.</p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <WelcomeBanner />
        <BookCard />
      </div>
    )
  }
}


class BookCard extends React.Component {

  render() {
    return (
      <>
        <h3>Book Title : Clean Code</h3>
        <p> Author: Robert Martin</p>
        <p> This book is about Agile Coding</p>
      </>
    );
  }
}


export default App

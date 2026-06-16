// ============================================================
// App.jsx — Main App: Putting everything together
// Week 3 Day 2 — React Basics
// ============================================================
// This is the root component. All other components are rendered here.
// Not perfectly organized, just want to see everything working together.

import Counter from "./practice/02-react-basics/Counter";
import TodoList from "./practice/02-react-basics/TodoList";
import UserCard from "./practice/02-react-basics/UserCard";
import UseEffectDemo from "./practice/02-react-basics/UseEffectDemo";
import "./App.css";

// Hardcoding 3 users to demo props — in real apps this comes from an API/DB
const USERS = [
  { name: "Dr. Mehta",  role: "Instructor", email: "mehta@university.edu" },
  { name: "Priya Sharma", role: "Student",    email: "priya@student.edu"  },
  { name: "Raj Admin",  role: "Admin",      email: "raj@admin.edu"       },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>⚛️ React Learning — Week 3</h1>
        <p className="app-subtitle">
          Hands-on practice. Coming from Java so some things are weird but getting there.
        </p>
      </header>

      <main className="app-main">

        {/* --- COUNTER PRACTICE --- */}
        <section className="practice-section">
          <h2 className="section-title">🔢 useState — Counter</h2>
          <p className="section-desc">
            First useState practice. Simple counter with increment, decrement, reset.
          </p>
          <Counter />
        </section>

        {/* --- TODO LIST PRACTICE --- */}
        <section className="practice-section">
          <h2 className="section-title">📝 useState — Todo List</h2>
          <p className="section-desc">
            useState with arrays. Add todos, press Enter or click Add.
          </p>
          <TodoList />
        </section>

        {/* --- PROPS PRACTICE (USER CARDS) --- */}
        <section className="practice-section">
          <h2 className="section-title">👤 Props — User Cards</h2>
          <p className="section-desc">
            Same component, different props. Props are like Java method params.
          </p>
          {/* Rendering same component 3 times with different data */}
          <div className="user-cards-grid">
            {USERS.map((user, index) => (
              <UserCard
                key={index}
                name={user.name}
                role={user.role}
                email={user.email}
              />
            ))}
          </div>
        </section>

        {/* --- USE EFFECT PRACTICE --- */}
        <section className="practice-section">
          <h2 className="section-title">⚡ useEffect Demo</h2>
          <p className="section-desc">
            Side effects! Open the console to see the useEffect logs.
            Still figuring out the dependency array.
          </p>
          <UseEffectDemo />
        </section>

      </main>

      <footer className="app-footer">
        <p>🚀 Week 3 Practice | React + Vite | Learning in progress...</p>
      </footer>
    </div>
  );
}

export default App;

import "./App.css";
import Button from "./components/button/Button";
import Profile from "./components/profile/Profile";
import { appLinks } from "./assets/appLinks";

function App() {
  return (
    <main className="app">
      <Profile />

      {appLinks.map((link) => (
        <div key={link.id}>
          <Button href={link.link} alt={link.alt}>
            {link.title}
          </Button>
        </div>
      ))}
    </main>
  );
}

export default App;

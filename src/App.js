import "./App.css";
import Button from "./components/button/Button";
import Profile from "./components/profile/Profile";
import { appLinks } from "./assets/appLinks";

function App() {
  return (
    <main className="app">
      <Profile />

      <div className="button_container">
        {appLinks.map((link) => (
          <Button href={link.link} alt={link.alt} key={link.id}>
            {link.title}
          </Button>
        ))}
      </div>
    </main>
  );
}

export default App;

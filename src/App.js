import "./App.css";
import Button from "./components/button/Button";
import Profile from "./components/profile/Profile";
import { appLinks } from "./assets/appLinks";
import Socials from "./components/socials/Socials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <main className="app">
        <div>
          <section>
            <Profile />
          </section>

          <section>
            <div className="button_container">
              {appLinks.map((link) => (
                <Button href={link.link} alt={link.alt} key={link.id}>
                  {link.title}
                </Button>
              ))}
            </div>
          </section>

          <section>
            <Socials />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

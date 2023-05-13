import Navbar from "./componen/Navbar";
import Footer from "./componen/Footer";
import "./App.css";
import Profile from "./componen/Profile";
import ListDigimon from "./componen/ListDigimon";
import Counter from "./componen/counter";
import CartList from "./componen/CardList";
import Register from "./componen/Register";
import RegisterRefactor from "./componen/RegisterReafactor";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <>
        <Profile />
      </>
      <main>
        <ListDigimon />
      </main>
      <Counter />
      <CartList />
      <Register />
      <RegisterRefactor/>
      <Footer />
    </>
  );
}

export default App;

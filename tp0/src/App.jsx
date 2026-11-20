
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import"./App.css"
import Login from "./components/Login/Login"
function App() {
  return (
    <div className="app">
    <Header/>
    <main>
      <Login/>
    </main>
    <Footer/>
    </div>
  );
}

export default App;

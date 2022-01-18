import Toolbar from "./components/toolbar/Toolbar";
import SignIn from "./components/SignIn/SignIn";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./pages/about";
import Footer from "./components/footer/Footer";
import {Header} from "./components/header/Header";
import {useState} from "react";


function App() {
    const [login, setLogin] = useState(false);
  return (
    <Router>
        <div>
            <Toolbar />
            <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route  path = '/about' element={<About />} />
                <Route  path = '/kursy' element={!login && <SignIn/>} />
                <Route  path = '/znanie-resursy' element={!login && <SignIn/>} />
                <Route  path = '/programs' element={!login && <SignIn/>} />
                <Route  path = '/seminars' element={!login && <SignIn/>} />
                <Route  path = '/quiz' element={!login && <SignIn/>} />
                <Route path = '/' element={<Header />} />
            </Routes>
            <Footer />
        </div>

    </Router>
  );
}

export default App;

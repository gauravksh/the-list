import "./App.css";

import { Header } from "./components/Header/Header";

import { Signin } from "./components/SignIn/Signin";
import { Signup } from "./components/SignUp/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userhome from "./components/Userhome/Userhome";
import AuthProvider from "./components/context/auth";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Loghome from "./components/LoggedHome/Loghome";
import SearchForm from "./components/SearchForm/SearchForm";
import Plan from "./components/Plan/Plan";
import Watched from "./components/Watched/Watched";
import Favs from "./components/Favs/Favs";

import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div className="bound">
            <div className="App">
              <Header />

              {/* <Container> */}
              <Routes>
                {/* <PrivateRoute exact path="" */}
                <PrivateRoute path="/profile" element={<Profile />} />
                <PrivateRoute path="/search" element={<SearchForm />} />
                <PrivateRoute path="/watched" element={<Watched />} />
                <PrivateRoute path="/Plan" element={<Plan />} />
                <PrivateRoute path="/Favs" element={<Favs />} />
                <PrivateRoute path="/home" element={<Loghome />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/register" element={<Signup />} />
                <Route exact path="/the-list" element={<Userhome />} />
                <Route exact path="/" element={<Userhome />} />
              </Routes>

              {/* </Container> */}
            </div>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

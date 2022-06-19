import { Route, Routes, Navigate } from "react-router-dom";
import Main from './components/Main';
import Signup from "./components/Singup";
import Login from "./components/Login";

//Indica cual render hacer con la dirección web que tenga 
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;

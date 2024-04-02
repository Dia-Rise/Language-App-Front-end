import { Navigate, Route, Routes } from "react-router-dom";
import { RoutePaths } from "./enums";
import { ErrorScreen } from "./screens/error/ErrorScreen";
import { HomeScreen } from "./screens/home/HomeScreen";

function App() {
	return (
		<>
			<Routes>
				<Route path={RoutePaths.HOME} element={<HomeScreen />} />

				<Route path={RoutePaths.DICTIONARY} element={<p>HELLO WORLD</p>} />

				<Route path={`${RoutePaths.ERROR}/*`} element={<ErrorScreen />} />
				<Route path="*" element={<Navigate replace to={`${RoutePaths.ERROR}/404`} />} />
			</Routes>
		</>
	);
}

export default App;

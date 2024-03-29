import { Navigate, Route, Routes } from "react-router-dom";
import { RoutePaths } from "./enums";
import { ErrorScreen } from "./screens/error/ErrorScreen";

function App() {
	return (
		<>
			<Routes>
				<Route path={RoutePaths.HOME} element={<></>} />

				<Route path={RoutePaths.DICTIONARY} element={<></>} />

				<Route path={`${RoutePaths.ERROR}/*`} element={<ErrorScreen />} />
				<Route path="*" element={<Navigate replace to={`${RoutePaths.ERROR}/404`} />} />
			</Routes>
		</>
	);
}

export default App;

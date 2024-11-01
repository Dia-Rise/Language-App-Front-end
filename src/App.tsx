import { Navigate, Route, Routes } from "react-router-dom";
import { RoutePaths } from "./enums";
import { HomeScreen, DictionaryScreen, QuizScreen, ErrorScreen } from "./screens";
import { QuizProvider } from "./hooks";

function App() {
	return (
		<>
			<Routes>
				<Route path={RoutePaths.HOME} element={<HomeScreen />} />

				<Route path={RoutePaths.DICTIONARY} element={<DictionaryScreen />} />
				<Route
					path={RoutePaths.QUIZ}
					element={
						<QuizProvider>
							<QuizScreen />
						</QuizProvider>
					}
				/>

				<Route path={`${RoutePaths.ERROR}/*`} element={<ErrorScreen />} />
				<Route path="*" element={<Navigate replace to={`${RoutePaths.ERROR}/404`} />} />
			</Routes>
		</>
	);
}

export default App;

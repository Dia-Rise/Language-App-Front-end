import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Error404Message } from "./Error404Message";
import { Button, ButtonColors, ButtonVariant } from "../../components";

// type ErrorScreenProps = {};

export function ErrorScreen() {
	const [errorCode, setErrorCode] = useState<string | null>(null);
	const location = useLocation();

	useEffect(() => {
		setErrorCode(location.pathname.replace("/error/", ""));
	}, [errorCode]);

	return (
		<div className="error-screen">
			<div className="error-screen__content">
				{(() => {
					switch (errorCode) {
						case "404":
							return <Error404Message />;
					}
				})()}

				<Button variant={ButtonVariant.ReactRouterNavLink} color={ButtonColors.Primary} href="/">
					Return Home
				</Button>
			</div>
		</div>
	);
}

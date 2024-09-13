import classnames from "classnames";
import {
	Alert,
	AlertState,
	Button,
	ButtonColors,
	ButtonShape,
	ButtonSize,
	ButtonVariant,
	Icon,
	IconSVG,
} from "../../components";
import { useState } from "react";

type DictionaryScreenDisclaimerProps = {
	className?: string;
};

export function DictionaryScreenDisclaimer({ className }: DictionaryScreenDisclaimerProps) {
	const [isVisable, setIsVisable] = useState<boolean>(true);

	const baseClassname = "dictionary-screen-disclaimer";
	const classNames = classnames(baseClassname, className);

	return isVisable ? (
		<Alert
			className={classNames}
			state={AlertState.Warning}
			icon={IconSVG.Warning}
			header="Disclaimer"
			content="The information provided is generated automatically so may not be 100% correct."
			dismissable
			onDismiss={() => setIsVisable(false)}
		/>
	) : (
		<Button
			className={classNames}
			variant={ButtonVariant.Button}
			color={ButtonColors.Warning}
			shape={ButtonShape.Circular}
			size={ButtonSize.SM}
			onClick={() => setIsVisable(true)}
		>
			<Icon svg={IconSVG.Warning} />
		</Button>
	);
}

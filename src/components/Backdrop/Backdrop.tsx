export type BackdropProps = {
	isVisible: boolean;
	onClick?: () => void;
	className?: string;
};

export function Backdrop({ isVisible, onClick, className = "" }: BackdropProps) {
	return isVisible ? <div className={`backdrop ${className}`} {...{ onClick }}></div> : <></>;
}

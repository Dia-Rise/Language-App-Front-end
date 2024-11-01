import { createContext, ReactNode, useContext, useState } from "react";

// CONTEXT
type AccordionItemContextProps = {
	isOpen: boolean;
	disabled?: boolean;
	readOnly?: boolean;
	isAnimating: boolean;
	id: string;
	setIsAnimating: (newValue: boolean) => void;
};

export const AccordionItemContext = createContext<AccordionItemContextProps>({
	id: "",
	isOpen: false,
	isAnimating: false,
	setIsAnimating: () => {},
});

// PROVIDER
type AccordionItemProviderProps = {
	isOpen: boolean;
	disabled?: boolean;
	readOnly?: boolean;
	id: string;
	children: ReactNode;
};

export function AccordionItemProvider({ id, isOpen, disabled, readOnly, children }: AccordionItemProviderProps) {
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	return (
		<AccordionItemContext.Provider value={{ id, isOpen, disabled, readOnly, isAnimating, setIsAnimating }}>
			{children}
		</AccordionItemContext.Provider>
	);
}

// HOOK
export function useAccordionItem() {
	return useContext(AccordionItemContext);
}

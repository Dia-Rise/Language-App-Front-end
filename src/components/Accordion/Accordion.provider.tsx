import { createContext, ReactNode, useContext, useState } from "react";

// CONTEXT
type AccordionContextProps = {
	openedItems: string[];
	toggleOpenedItem: (itemId: string) => void;
};

export const AccordionContext = createContext<AccordionContextProps>({
	openedItems: [],
	toggleOpenedItem: () => {},
});

// PROVIDER
type AccordionProviderProps = {
	children: ReactNode;
};

export function AccordionProvider({ children }: AccordionProviderProps) {
	const [openedItems, setOpenedItems] = useState<string[]>([]);

	function toggleOpenedItem(itemId: string) {
		openedItems.includes(itemId)
			? // Remove from array
				setOpenedItems((prev) => prev.filter((item) => item !== itemId))
			: // Add to array
				setOpenedItems((prev) => [...prev, itemId]);
	}

	return <AccordionContext.Provider value={{ openedItems, toggleOpenedItem }}>{children}</AccordionContext.Provider>;
}

// HOOK
export function useAccordion() {
	return useContext(AccordionContext);
}

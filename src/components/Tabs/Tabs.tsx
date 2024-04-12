import { ReactNode, useEffect, useState } from "react";
import { IconSVG } from "..";
import { TabButton } from "./TabButton";

export type TabDataProps = {
	id: string;
	label: string;
	icon?: IconSVG;
	content: ReactNode;
};

export type TabsProps = {
	data: TabDataProps[];
	className?: string;
};

export function Tabs({ data, className = "" }: TabsProps) {
	//* VARIABLES ====================

	const [activeTab, setActiveTab] = useState<string | null>(null);
	const tabIds: string[] = data.map((tabData: TabDataProps) => tabData.id);

	const baseClassName = "tabs";

	//* UTILITY FUNCTIONS ====================

	/**
	 * Will run everytime a tab button is clicked.
	 *
	 * @param String id
	 */
	function handleTabClick(id: string) {
		setActiveTab(id);
	}

	/**
	 * Set the active tab on load.
	 */
	useEffect(() => {
		if (typeof activeTab !== "string" || !tabIds.includes(activeTab)) {
			setActiveTab(data[0].id);
		}
	}, [data, activeTab, tabIds]);

	//* RENDER FUNCTIONS ====================

	/**
	 * Renders all the tab buttons per the data given.
	 */
	function buildTabButtons() {
		return data.map(({ id, label, icon }: TabDataProps) => (
			<TabButton key={id} onClick={() => handleTabClick(id)} isActive={activeTab == id} {...{ label, icon }} />
		));
	}

	/**
	 * Renders the content within the tabs.
	 */
	function buildTabContent() {
		return data.map(({ id, content }: TabDataProps) => (
			<div className={`${baseClassName}__content-container`} key={id} hidden={activeTab !== id}>
				{content}
			</div>
		));
	}

	//TODO - Make Tabs Responsive.
	return (
		<div className={`${baseClassName} ${className}`}>
			<div className={`${baseClassName}__container`}>{buildTabButtons()}</div>
			{buildTabContent()}
		</div>
	);
}

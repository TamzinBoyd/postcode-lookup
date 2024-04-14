import { useState } from "react";
import TabHeading from "./TabHeading";
import PostalTab from "./PostalTab";
import CollectTab from "./CollectTab";

export enum TabOptions {
	postal = "Postal address",
	collect = "Click & Collect",
}

const TabContainer = () => {
	const [selectedTab, setSelectedTab] = useState<TabOptions>(
		TabOptions.postal,
	);

	return (
		<div>
			<section className='delivery'>
				<div className='delivery__tabs-container flex'>
					<TabHeading
						text={TabOptions.postal}
						isSelected={selectedTab === TabOptions.postal}
						onClick={() => setSelectedTab(TabOptions.postal)}
						wrapperClass={selectedTab === TabOptions.postal ? 'border-r border-gray-700' : 'border-b border-gray-700'}
					/>
					<TabHeading
						text={TabOptions.collect}
						isSelected={selectedTab === TabOptions.collect}
						onClick={() => setSelectedTab(TabOptions.collect)}
						wrapperClass={selectedTab === TabOptions.collect ? 'border-l border-gray-700' : 'border-b border-gray-700'}

					/>
				</div>
				<div className='delivery__content w-full'>
					{selectedTab === TabOptions.postal ? (
						<PostalTab />
					) : (
						<CollectTab />
					)}
				</div>
			</section>
		</div>
	);
};

export default TabContainer;

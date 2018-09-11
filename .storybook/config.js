import { configure, setAddon } from '@storybook/react';
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';
import { addDecorator } from "@storybook/react";

setAddon(chaptersAddon);
setDefaults({
	sectionOptions: {
		showSource: true,
		allowSourceToggling: true,
		showPropTables: false,
		allowPropTablesToggling: true,
	}
});

function requireAll(context) {
	return context.keys().map(context);
}

function loadStories() {
	requireAll(require.context('..', true, /_story\.jsx?$/));
}

configure(loadStories, module);

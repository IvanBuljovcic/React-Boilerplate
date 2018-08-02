import React from 'react';
import { configure, setAddon } from "@storybook/react";
import { addDecorator } from "@storybook/react";

/* StoryBook Addons */
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';
import { withKnobs } from "@storybook/addon-knobs/react";
import StoryRouter from 'storybook-react-router';
/* END StoryBook Addons */

// chaptersAddon
setAddon(chaptersAddon);
setDefaults({
	sectionOptions: {
		showSource: true,
		allowSourceToggling: false,
		showPropTables: true,
		allowPropTablesToggling: false,
	}
});

// withKnobsAddon
addDecorator(withKnobs);

// StoryRouter Addon
addDecorator(StoryRouter());

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

/* Comments */
// 1.
	// Every Project subfolder should have his own storybook folder
	// Example:
	// dasPay: `${components}/Das Pay/`,

	// Component name in storybook folder should be define in the yourStory.stories.js file
	// Example:
	// storiesOf( `${ storyPaths.components.dasPay }Authorization`, module )
/* END Comments */


/* Consts */
const components = 'Components';
/* END Consts */

// Paths
const storyPaths = {
	components: {
		// 1. Comment

		common: `${components}/Common/`,
	},
};

module.exports = storyPaths;

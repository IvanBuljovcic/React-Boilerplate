import React from 'react';
import { storiesOf } from '@storybook/react';

// - Component
import Loader from './Loader';

const stories = storiesOf('Common', module);


stories.addWithChapters('Loader', {
	chapters: [
		{
			sections: [
				{
					title: 'Default',
					sectionFn: () => <Loader />
				}
			]
		}
	]
})

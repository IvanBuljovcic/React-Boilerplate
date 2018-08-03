import React from 'react';

// Addons
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs/react';

// Paths
import storyPaths from '../../../../.storybook/storyPaths';

// Components
import StoryExampleButton from './StoryExampleButton';


storiesOf( `${ storyPaths.components.common }Button`, module )
	.addWithChapters(
		'Style Default', // Story Title
		{
			// subtitle: 'Optional subtitle', // Story Subtitle
			// info: 'Optional info/description', // Story info/description
			chapters: [
				{
					sections: [
						{
							sectionFn: () =>
								<StoryExampleButton buttonText="Button Text" />
						}
					]
				}
			]
		}
	)
	.addWithChapters(
		'Style Primary', // Story Title
		{
			// subtitle: 'Optional subtitle', // Story Subtitle
			// info: 'Optional info/description', // Story info/description
			chapters: [
				{
					sections: [
						{
							sectionFn: () =>
								<StoryExampleButton
									buttonText="Button Text"
									buttonStylePrimary
								/>
						}
					]
				}
			]
		}
	)
	.addWithChapters(
		'Style Secondary', // Story Title
		{
			// subtitle: 'Optional subtitle', // Story Subtitle
			// info: 'Optional info/description', // Story info/description
			chapters: [
				{
					sections: [
						{
							sectionFn: () =>
								<StoryExampleButton
									buttonText="Button Text"
									buttonStyleSecondary
								/>
						}
					]
				}
			]
		}
	)
	.addWithChapters(
		'Style Disabled', // Story Title
		{
			// subtitle: 'Optional subtitle', // Story Subtitle
			info: 'Open Addon Panel to toggle disabled button option', // Story info/description
			chapters: [
				{
					sections: [
						{
							sectionFn: () =>
								<StoryExampleButton
									buttonText="Button Text"
									buttonDisabled={boolean('Disabled', true)}
								/>
						}
					]
				}
			]
		}
	)
	.addWithChapters(
		'On Click', // Story Title
		{
			// subtitle: 'Optional subtitle', // Story Subtitle
			info: 'Click the button and see Action Logger', // Story info/description
			chapters: [
				{
					sections: [
						{
							sectionFn: () =>
								<StoryExampleButton
									buttonText="Button Text"
									buttonOnClick={ action( 'clicked' ) }
								/>
						}
					]
				}
			]
		}
	)
	.addWithChapters(
		'Link', // Story Title
		{
			subtitle: 'buttonLinkPath prop will render <Link> instead of <button> component', // Story Subtitle
			info: 'inside buttonLinkPath define your path ex: buttonLinkPath={ \'your-path\' }', // Story info/description
			chapters: [
				{
					sections: [
						{
							sectionFn: () =>
								<StoryExampleButton
									buttonText="Button Text"
									buttonLinkPath={ 'your-path' }
								/>
						}
					]
				}
			]
		}
	)
;

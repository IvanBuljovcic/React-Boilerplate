import React from 'react';
import { storiesOf } from '@storybook/react';

// - Component
import Title from './Title';

const stories = storiesOf('Common', module);

stories.addWithChapters('Title', {
  chapters: [
    {
      sections: [
        {
          title: 'Default',
          subtitle: `Default title, accepts a **text** prop`,
          sectionFn: () => <Title text="Hello World" />
        },
        {
          title: 'Subtitle',
          info: 'Subtitle title, accepts a **text** prop',
          sectionFn: () => <Title text="Hello World Subtitle" isSubtitle />
        },
        {
          title: 'With Modifier',
          info: 'Title with a class modifier. The modifier appends a class to the element with the **app-title--modifier** pattern',
          sectionFn: () => <Title text="Hello World modified" classModifier="modifier" />
        }
      ]
    }
  ]
});

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import StoryRouter from 'storybook-react-router';

// - Component
import Button from './Button';

const stories = storiesOf('Common', module);

stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter());

stories.addWithChapters('Buttons', {
  chapters: [
    {
      sections: [
        {
          title: 'Default',
          info: 'Default button component. Accepts a text prop.',
          sectionFn: () => <Button />,
        },
        {
          title: 'Submit',
          info: 'Submit button, does not accept the text prop',
          sectionFn: () => <Button type="submit" />,
        },
        {
          title: 'Reset',
          info: 'Reset button, does not accept the text prop',
          sectionFn: () => <Button type="reset" />,
        },
      ],
    },
  ],
});

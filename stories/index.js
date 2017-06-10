import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
// import Button from './Button';
import Button from '../components/Button'
import Welcome from './Welcome'
import TextField from '../components/Form/TextField'

import { ThemeProvider } from 'styled-components'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

const defaultTheme = {
  primary: 'palevioletred',
  secondary: 'white'
}
const greenTheme = {
  primary: 'mediumseagreen',
  secondary: 'white'
}

storiesOf('Buttons', module)
  .add('Primary Button', () =>
    <ThemeProvider theme={defaultTheme}>
      <Button primary onClick={action('clicked')}>Primary Button</Button>
    </ThemeProvider>
  )
  .add('Secondary Button', () =>
    <ThemeProvider theme={defaultTheme}>
      <Button onClick={action('clicked')}>Secondary Button</Button>
    </ThemeProvider>
  )

storiesOf('Themes', module)
  .add('Default Theme Button', () =>
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Button primary onClick={action('clicked')}>Primary Button</Button>
        <Button onClick={action('clicked')}>Secondary Button</Button>
      </div>
    </ThemeProvider>
  )
  .add('Green Theme Button', () =>
    <ThemeProvider theme={greenTheme}>
      <div>
        <Button primary onClick={action('clicked')}>Primary Button</Button>
        <Button onClick={action('clicked')}>Secondary Button</Button>
      </div>
    </ThemeProvider>
  )

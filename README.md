# react-inln 🖍️
Define react component style for multiple breakpoints directly in props

## Motivation
In every project I find my self lost about defining styles and media queries.
So this simple component pretends to make my and your life easier.

## Usage
```sh
$ npm i react-inln
```

```js
import Box from 'react-inln'

export default () => (
  <Box tag='section'
    color="red"
    color_xs="blue"
    width_l="1400px"
    width_s="200px"
    onClick={() => ...}
  >
  ...
  </Box>
)
```

## Props
 - **tag** Element to use for rendering (eg. 'div' or Component). Defaults to 'div'.
 - **{ ...css rules }**: normal css rules in camelCase. For responsive, add '_[breakpoint]' to css rule, where breakpoint should be an alias for breakpoint (eg. fontSize_m="22px")
 - **{ ...other props }** - props to pass to element defined in tag (eg. 'onInput={() => ...}' for 'tag="input"')

## Breakpoints
The default breakpoints are:
```js
    { match: '(min-width: 1px) and (max-width: 575px)', alias: 'xs' },
    { match: '(min-width: 576px) and (max-width: 768px)', alias: 's' },
    { match: '(min-width: 769px) and (max-width: 991px)', alias: 'm' },
    { match: '(min-width: 992px) and (max-width: 1199px)', alias: 'l' },
    { match: '(min-width: 1200px) and (max-width: 9999px)', alias: 'xl' },

```
but they are easy to modify. To do so, consider the following example:
```js
//components/Element.js
import RootElement from 'react-inln'
export default class Element extends RootElement {
  breakpoints: [
        { match: '(min-width: 1px) and (max-width: 320px)', alias: 'verySmall' },
    { match: '(min-width: 321px) and (max-width: 768px)', alias: 'small' },
    { match: '(min-width: 769px) and (max-width: 991px)', alias: 'medium' },
    { match: '(min-width: 992px) and (max-width: 1199px)', alias: 'large' },
    { match: '(min-width: 1200px) and (max-width: 9999px)', alias: 'extraLarge' },
  ]
}

import React, { Component } from 'react'
import Element from 'components/Element.js'

class Somenthig extends Component{
  ...
  render() {
    return <Element tag="input" color="red" color_extraLarge="orange" />
  }
}
```

## Contributing
- Fork it
- Create a branch with proper name in kebab-case (eg. fix-something)
  > Optional: Create React app in other folder and install this package with npm link or npm i path/to/react-inln
- Create a PR describing what you did
- Grab a coffee

## Author
[Jose Varela](https://github.com/joselcvarela)\
(joselcvarela@gmail.com)

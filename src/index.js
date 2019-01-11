import React, { Component } from 'react'

class Element extends Component {
  state = { css: {} }
  breakpoints = [
    { match: 'only screen and (max-width: 575px)', alias: 'xs' },
    { match: 'only screen and (max-width: 768px)', alias: 's' },
    { match: 'only screen and (max-width: 992px)', alias: 'm' },
    { match: 'only screen and (max-width: 1200px)', alias: 'l' },
    { match: 'only screen and (min-width: 1201px)', alias: 'xl' },
  ]
  _breakpoints = []
  ignoreAttributes =  ['length', 'src']
  cssAttributes = (() => { // this, could be simple Object.keys....filter but firefox and ie doesn't support
    const attrs = []
    for (const attr in document.body.style) {
      if (['length', 'src'].indexOf(attr) !== -1) break;
      if (document.body.style[attr].constructor && [String, Number].indexOf(document.body.style[attr].constructor) > -1) {
        attrs.push(attr)
      }
    }
    return attrs
  })()

  equalCss = (prev, next) => {
    return JSON.stringify(prev, this.cssAttributes) === JSON.stringify(next, this.cssAttributes)
  }

  componentDidMount() {
    this._breakpoints = this.breakpoints.map(({ match, alias }) => (
      { alias, mql: window.matchMedia(match), listener: (mql) => this.matchedMedia(alias, mql) }
    ))
    this._breakpoints.forEach(({ mql, listener }) => mql.addListener(listener))
    this._breakpoints.forEach(({ mql, listener }) => listener(mql))
  }

  componentWillUnmount() {
    this._breakpoints.forEach(({ mql, listener }) => mql.removeListener(listener))
  }

  componentDidUpdate(prevProps) {
    if (!this.equalCss(prevProps, this.props)) {
      this._breakpoints.forEach(({ mql, listener }) => listener(mql))
    }
  }

  extractFromProps = (props) => {
    const { tag: Tag = 'div', children, ...rest } = props
    let cssRules = {}
    let otherProps = {}
    for (let prop in rest) {
      const value = rest[prop]
      let [ key, breakpoint = '' ] = prop.split('_')
      if (this.cssAttributes.includes(key)) {
        cssRules[breakpoint] = { ...cssRules[breakpoint], [key]: value }
      } else {
        otherProps = { ...otherProps, [key]: value }
      }
    }
    return { Tag, children, cssRules, props: otherProps }
  }

  matchedMedia = (breakpoint, mql) => {
    const { cssRules } = this.extractFromProps(this.props)
    let css = cssRules[''] || {}
    if (breakpoint in cssRules && mql.matches) {
      css = { ...css, ...cssRules[breakpoint] }
    } else {
      const brk = this._breakpoints.find(b => {
        return b.alias in cssRules && b.mql.matches
      })
      if (brk) {
        css = { ...css, ...cssRules[brk.alias] }
      }
    }

    if (css && Object.keys(css).length) {
      if (!this.equalCss(this.state.css, css)) {
        this.setState({ css })
      }
    }
  }

  render () {
    const { Tag, children, props } = this.extractFromProps(this.props)
    return <Tag {...props} style={this.state.css}>{children}</Tag>
  }
}

export default Element

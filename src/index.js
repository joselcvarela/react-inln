import React, { Component } from 'react'

class Element extends Component {
  state = { css: {} }
  breakpoints = [
    { match: '(min-width: 1px) and (max-width: 575px)', alias: 'xs' },
    { match: '(min-width: 576px) and (max-width: 768px)', alias: 's' },
    { match: '(min-width: 769px) and (max-width: 991px)', alias: 'm' },
    { match: '(min-width: 992px) and (max-width: 1199px)', alias: 'l' },
    { match: '(min-width: 1200px) and (max-width: 9999px)', alias: 'xl' },
  ]
  _breakpoints = []

  componentDidMount() {
    this._breakpoints = this.breakpoints.map(({ match, alias }) => (
      { mql: window.matchMedia(match), listener: (mql) => this.matchedMedia(alias, mql) }
    ))
    this._breakpoints.forEach(({ mql, listener }) => mql.addListener(listener))
    this._breakpoints.forEach(({ mql, listener }) => listener(mql))
  }

  componentWillUnmount() {
    this._breakpoints.forEach(({ mql, listener }) => mql.removeListener(listener))
  }

  componentDidUpdate(prevProps) {
    const { cssRules: prevCssRules } = this.extractFromProps(prevProps)
    const { cssRules } = this.extractFromProps(this.props)
    if (Object.keys(cssRules).length !== Object.keys(prevCssRules).length ||
      JSON.stringify(prevCssRules) !== JSON.stringify(cssRules)) {
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
      if (key in document.body.style) {
        cssRules[breakpoint] = { ...cssRules[breakpoint], [key]: value }
      } else {
        otherProps = { ...otherProps, [key]: value }
      }
    }
    return { Tag, children, cssRules, props: otherProps }
  }

  matchedMedia = (breakpoint, mql) => {
    if (mql.matches) {
      const { cssRules } = this.extractFromProps(this.props)
      let css = { ...cssRules[''], ...cssRules[breakpoint] }

      if (css && Object.keys(css).length) {
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
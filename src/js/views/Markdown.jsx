import React from 'react'
import MarkdownGen from '../common/components/Markdown'

export default class Markdown extends React.Component {
  render() {
    const { payload: {markdownFile} } = this.props
    const md = require(`../../site/markdown/${markdownFile}`)

    return (
      <MarkdownGen source={md} />
    )
  }
}

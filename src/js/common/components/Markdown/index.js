import React, { Component } from 'react'
import MarkdownIt from 'markdown-it'
import markdownItFontawesome from 'markdown-it-fontawesome'
import markdownItEmoji from 'markdown-it-emoji'
// import markdownItAttrs from 'markdown-it-attrs'
import markdownItTaskLists from 'markdown-it-task-lists'
import markdownItCenterText from 'markdown-it-center-text'
import hljs from 'highlight.js'

// Actual default values
const highlightCode = {
  highlight: function (str, lang) {
    if (window.mermaid && lang === 'mermaid') {
      return `<div class="mermaid">${str}</div>`
    }

    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) { }
    }

    return '' // use external default escaping
  }
}

const markdown = function (markup) {
  var md = new MarkdownIt(highlightCode)
    .use(markdownItFontawesome)
    .use(markdownItEmoji)
    // .use(markdownItAttrs)
    .use(markdownItTaskLists)
    .use(markdownItCenterText)

  md.renderer.rules.emoji = function (token, idx) {
    return '<span class="emoji">' + token[idx].content + '</span>'
  }

  md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    return '<table class="ui celled table">'
  }

  md.renderer.rules.table_close = function (tokens, idx, options, env, self) {
    return '</table>'
  }

  return {
    __html: md.render(markup)
  }
}

export default class HighlightCode extends Component {
  mermaidInit() {
    window.mermaid && window.mermaid.init(undefined, document.getElementsByClassName('mermaid'))
  }

  componentDidMount() {
    this.mermaidInit()
  }

  componentDidUpdate() {
    this.mermaidInit()
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={markdown(this.props.source)}></div>
    )
  }
}

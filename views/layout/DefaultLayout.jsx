const React = require('react')

class DefaultLayout extends React.Component {
  render() {

    return (
      <html lang="en">
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/styles.css" />
        </head>
        <body>
          <h1>{this.props.title}</h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout


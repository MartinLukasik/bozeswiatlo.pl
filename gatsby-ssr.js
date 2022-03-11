const React = require('react')
const { Layout } = require('./src/components/Layout.tsx')
const { ScrollProvider } = require('./src/contexts/ScrollProvider')

exports.wrapPageElement = ({ element, props }) => {
  return (
    <ScrollProvider>
      <Layout {...props}>{element}</Layout>
    </ScrollProvider>
  )
}

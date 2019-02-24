import React from 'react'
import styled from '@emotion/styled'

const PageDiv = styled('div')`
  padding: 5px;
  border: 1px solid black;
`

const Page = ({ doc, children }) => {
  console.log('>> Page.doc', doc)

  return (
    <PageDiv>
      Custom var: {doc.customprop}<br/>
      Children: {children}
    </PageDiv>
  )
}

export default Page

import styled from '@emotion/styled'

const H1 = styled('h1')`
  position: relative;
  display: table;

  // Retrieve theme object
  ${p => {console.log('>> theme Object', p); } };

  &:before {
    position: absolute;
    content: '';
    bottom: 5%;
    left: 0;
    width: 30%;
    height: 3px;
  }
`
export default H1

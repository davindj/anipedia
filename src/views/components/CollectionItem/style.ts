import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const CollectionItemWrapper = styled(NavLink)`
  display: block;
  background-color: white;
  box-shadow: 0px 4px 4px 0px #0003;
  text-decoration: none;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
`
const ItemImage = styled.img`
  display: block;
  width: 100px;
  height: calc(400px / 3);
  object-fit: cover;
`
const ItemBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`
const ItemBodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ItemTitle = styled.p`
  margin: 0px;
  font-weight: bold;
  color: black;
`
const ItemSubtitle = styled.p`
  margin: 0px;
  font-size: 0.8em;
  color: black;
`
const ItemBodyActionContainer = styled.div`
  display: flex;
  justify-content: end;
`

export {
  CollectionItemWrapper,
  ItemImage,
  ItemBody,
  ItemBodyTextContainer,
  ItemTitle,
  ItemSubtitle,
  ItemBodyActionContainer,
}

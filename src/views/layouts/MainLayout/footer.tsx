import { NavLink } from 'react-router-dom'
import { ContainerPadding } from '../../../utils/style'
import ROUTE_PATH from '../../../routes/path'
import { PageFooter } from './style'
import { Tv, Folder } from 'react-feather'
import styled from '@emotion/styled'

const FooterNav = styled(ContainerPadding)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
`

const FooterNavlink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  color: green;
  font-weight: light;
  font-size: 0.8em;

  &.active {
    font-weight: bold;
  }
`

const Footer = () => {
  return (
    <PageFooter>
      <FooterNav>
        <FooterNavlink
          to={ROUTE_PATH.ANIME_LIST_PAGE}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          <Tv size={18} />
          Animes
        </FooterNavlink>
        <FooterNavlink
          to={ROUTE_PATH.COLLECTION_LIST_PAGE}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          <Folder size={18} />
          Collections
        </FooterNavlink>
      </FooterNav>
    </PageFooter>
  )
}

export default Footer

import Header from './header'
import Footer from './footer'
import { PageMainSection, PageWrapper } from './style'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <PageWrapper>
      <Header />
      <PageMainSection>{children}</PageMainSection>
      <Footer />
    </PageWrapper>
  )
}

export default MainLayout

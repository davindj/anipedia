import MainLayout from '../../layouts/MainLayout'

import { useParams } from 'react-router-dom'

const CollectionDetailPage = () => {
  const { id } = useParams()
  return (
    <MainLayout>
      <h1>Collection Detail Page for id: {id}</h1>
    </MainLayout>
  )
}

export default CollectionDetailPage

import MainLayout from '../../layouts/MainLayout'
import { useParams } from 'react-router-dom'

const AnimeDetailPage = () => {
  const { id } = useParams()
  return (
    <MainLayout>
      <h1>Anime Detail Page id: {id}</h1>
    </MainLayout>
  )
}

export default AnimeDetailPage

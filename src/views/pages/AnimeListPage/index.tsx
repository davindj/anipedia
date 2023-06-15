import { AnimeList } from '../../components/AnimeList'
import MainLayout from '../../layouts/MainLayout'
import useAnimeListPageHook from './hook'
import { SelectedAnimeToast } from '../../components/SelectedAnimeToast'
import { AnimeListPageWrapper, TitlePage } from './style'
import { Container } from '../../../utils/style'

const AnimeListPage = () => {
  const {
    isToastOpen,
    animes,
    selectedIdxs,
    skeletonCount,
    onSelect,
    onAddToCollection,
    onClearSelection,
  } = useAnimeListPageHook()

  return (
    <MainLayout>
      <Container>
        <AnimeListPageWrapper>
          <TitlePage>Animes</TitlePage>
          <AnimeList
            isItemSelectable
            animes={animes}
            selectedIndexs={selectedIdxs}
            skeletonCount={skeletonCount}
            onSelectItem={onSelect}
          />
          <SelectedAnimeToast
            isOpen={isToastOpen}
            selectedAnimesCount={selectedIdxs.length}
            onAddToCollection={onAddToCollection}
            onClearSelectedAnimes={onClearSelection}
          />
        </AnimeListPageWrapper>
      </Container>
    </MainLayout>
  )
}

export default AnimeListPage

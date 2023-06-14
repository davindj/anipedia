import { AnimeList } from '../../components/AnimeList'
import MainLayout from '../../layouts/MainLayout'
import useAnimeListPageHook from './hook'
import { SelectedAnimeToast } from '../../components/SelectedAnimeToast'

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
    </MainLayout>
  )
}

export default AnimeListPage

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache({}),
})

type AppApolloProviderProps = {
  children: React.ReactNode
}

const AppApolloProvider = ({ children }: AppApolloProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default AppApolloProvider

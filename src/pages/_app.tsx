import { type AppType } from 'next/dist/shared/lib/utils'

import '@/styles/globals.css'
import {
  type DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const MyApp: AppType<{ dehydratedState: DehydratedState }> = ({
  Component,
  pageProps
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp

import { Feed } from '@/components/feed'
import { Navbar } from '@/components/navbar'
import { usePosts } from '@/hooks/usePosts'
import { curiousProfile } from '@/schemas/curiousProfile'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { type GetServerSideProps, type NextPage } from 'next'
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    ['curiouscat-posts', { username: 'brenoliradev' }],
    () =>
      fetch(`https://curiouscat.live/api/v2.1/profile?username=brenoliradev`)
        .then((res) => res.json())
        .then((r) => curiousProfile.parse(r))
        .catch((error) => console.log(error))
  )

  return {
    props: { dehydratedState: dehydrate(queryClient) }
  }
}

const Home: NextPage = () => {
  const { data } = usePosts('brenoliradev')

  if (!data) return <></>

  return (
    <>
      <Head>
        <title>Curiouscat - Clone</title>
        <meta name="description" content="A clone of Curiouscat UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full bg-medium">
        <Navbar />
        <Feed username="brenoliradev" />
      </main>
    </>
  )
}

export default Home

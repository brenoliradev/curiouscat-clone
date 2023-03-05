import { Feed } from '@/components/feed'
import { Floating } from '@/components/floating'
import { Navbar } from '@/components/navbar'
import { Profile } from '@/components/profile'
import { usePosts } from '@/hooks/usePosts'
import { PrefetchProfile } from '@/server/prefetchProfile'
import { type GetServerSideProps, type NextPage } from 'next'
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async () => {
  const _dehydrate = await PrefetchProfile('brenoliradev')

  return {
    props: { dehydratedState: _dehydrate }
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
        <section className="mx-auto flex w-full max-w-[890px] flex-col pt-16">
          <Profile username="brenoliradev" />
          <Feed username="brenoliradev" />
        </section>
        <Floating />
      </main>
    </>
  )
}

export default Home

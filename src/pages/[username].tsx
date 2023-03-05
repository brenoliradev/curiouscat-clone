import { Feed } from '@/components/feed'
import { Floating } from '@/components/floating'
import { Navbar } from '@/components/navbar'
import { Profile } from '@/components/profile'
import { usePosts } from '@/hooks/usePosts'
import { PrefetchProfile } from '@/server/prefetchProfile'
import { type GetServerSideProps, type NextPage } from 'next'
import Head from 'next/head'
import { z } from 'zod'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const username = z.string().parse(ctx.query.username)

  const _dehydrate = await PrefetchProfile(username)

  return {
    props: { dehydratedState: _dehydrate, username }
  }
}

const Userpage: NextPage<{ username: string }> = ({
  username
}: {
  username: string
}) => {
  const { data } = usePosts(username)

  if (!data) return <></>

  return (
    <>
      <Head>
        <title>{username}</title>
        <meta name="description" content="A clone of Curiouscat UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen min-w-full bg-medium">
        <Navbar />
        <section className="mx-auto flex w-full max-w-[890px] flex-col pt-16">
          <Profile key={username} username={username} />
          <Feed username={username} />
        </section>
        <Floating />
      </main>
    </>
  )
}

export default Userpage

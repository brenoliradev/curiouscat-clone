import { Feed } from '@/components/feed'
import { Navbar } from '@/components/navbar'
import { usePosts } from '@/hooks/usePosts'
import { curiousProfile } from '@/schemas/curiousProfile'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { type GetServerSideProps, type NextPage } from 'next'
import Head from 'next/head'
import { z } from 'zod'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient()

  const username = z.string().parse(ctx.query.username)

  await queryClient.prefetchQuery(['curiouscat-posts', { username }], () =>
    fetch(
      `https://curiouscat.live/api/v2.1/profile?username=${String(username)}`
    )
      .then((res) => res.json())
      .then((r) => curiousProfile.parse(r))
      .catch((error) => console.log(error))
  )

  return {
    props: { dehydratedState: dehydrate(queryClient), username }
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
        <Feed username={username} />
      </main>
    </>
  )
}

export default Userpage

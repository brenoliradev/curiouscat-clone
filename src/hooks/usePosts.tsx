import { curiousProfile } from '@/schemas/curiousProfile'
import { useQuery } from '@tanstack/react-query'

export const usePosts = (username: string) => {
  const { data, isLoading, isError } = useQuery(
    ['curiouscat-posts', { username }],
    () =>
      fetch(`https://curiouscat.live/api/v2.1/profile?username=${username}`)
        .then((res) => res.json())
        .then((r) => curiousProfile.parse(r))
        .catch((error) => console.log(error))
  )

  return { data, isLoading, isError }
}

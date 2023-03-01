import { z } from 'zod'

export const userData = z.object({
  id: z.number(),
  verified: z.boolean(),
  username: z.string(),
  twitterid: z.string().or(z.boolean()),
  facebookid: z.string().or(z.boolean()),
  facebooklink: z.string().or(z.boolean()),
  answers: z.number(),
  askboxtext: z.unknown(),
  avatar: z.string(),
  banner: z.string(),
  following: z.boolean(),
  follows_you: z.boolean(),
  is_followed_by_me: z.boolean(),
  is_following_me: z.boolean(),
  stickers: z.unknown(),
  created_at: z.number(),
  status_emoji: z.unknown(),
  last_online: z.unknown()
})

export const senderData = z.object({
  id: z.boolean(),
  avatar: z.string()
})

export const post = z.object({
  id: z.number(),
  likes: z.number(),
  timestamp: z.number(),
  seconds_elapsed: z.number(),
  comment: z.string(),
  reply: z.string(),
  media: z
    .object({
      w: z.number(),
      h: z.number(),
      img: z.string()
    })
    .or(z.null()),
  senderData: userData.or(senderData),
  addresseeData: userData
})

export type PostContent = z.infer<z.Schema<typeof post>>

export const posts = z.array(z.object({ type: z.string(), post })).optional()

export const curiousProfile = z.object({
  id: z.number(),
  twitterid: z.string().or(z.boolean()),
  facebookid: z.boolean().or(z.boolean()),
  facebooklink: z.boolean().or(z.boolean()),
  username: z.string(),
  verified: z.boolean(),
  followers: z.number(),
  following_count: z.number(),
  followers_count: z.number(),
  answers: z.number(),
  avatar: z.string(),
  banner: z.string(),
  following: z.number(),
  created_at: z.number(),
  posts,
  userData
})

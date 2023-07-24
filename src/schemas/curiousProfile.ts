import { z } from 'zod'

export const userData = z.object({
  id: z.number(),
  verified: z.boolean(),
  username: z.string(),
  twitterid: z.string().or(z.boolean()).or(z.number()),
  facebookid: z.string().or(z.boolean()),
  facebooklink: z.string().or(z.boolean()),
  answers: z.number(),
  askboxtext: z.unknown(),
  avatar: z.string(),
  banner: z.string(),
  following: z.boolean().or(z.number()).optional(),
  follows_you: z.boolean(),
  is_followed_by_me: z.boolean(),
  is_following_me: z.boolean(),
  stickers: z.unknown(),
  created_at: z.number(),
  status_emoji: z.unknown(),
  last_online: z.unknown(),
  followers: z.number().optional()
})

export const senderData = z
  .object({
    id: z.boolean(),
    avatar: z.string()
  })
  .or(userData)

export const post = z
  .object({
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
        img: z.string().optional(),
        mp4: z.string().optional()
      })
      .or(z.null())
      .optional(),
    senderData,
    addresseeData: userData
  })
  .optional()

export const status = z
  .object({
    author: userData,
    emoji_id: z.number(),
    id: z.number(),
    status: z.string(),
    timestamp: z.number(),
    likes: z.number()
  })
  .optional()

export const posts = z
  .array(z.object({ type: z.string(), post, status }))
  .optional()

export const apiError = z.object({
  error: z.number(),
  errorCode: z.string(),
  error_code: z.string()
})

export const curiousProfile = z.object({
  id: z.number(),
  twitterid: z.string().or(z.boolean()).or(z.number()),
  facebookid: z.string().or(z.boolean()),
  facebooklink: z.string().or(z.boolean()),
  username: z.string(),
  verified: z.boolean(),
  followers: z.number().optional(),
  following_count: z.number().optional(),
  followers_count: z.number().optional(),
  answers: z.number(),
  avatar: z.string(),
  banner: z.string(),
  following: z.boolean().or(z.number()).optional(),
  created_at: z.number(),
  posts,
  userData
})

export const apiReturn = apiError.or(curiousProfile)

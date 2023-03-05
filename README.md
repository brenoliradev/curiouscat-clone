# Curiouscat Clone

- A simple App created as a [Challenge](https://twitter.com/zanfranceschi/status/1630207364405264385) using the [T3](https://create.t3.gg/) template as base.
- The motivation behind was to just test Zod and see how would be to parse things from another API (tbh I missed tRPC lol).
  - You can see alive [here](https://curiouscat-clone.vercel.app/) and compare it to [curiouscat](https://curiouscat.live/brenoliradev).

![image](https://user-images.githubusercontent.com/86065449/222268663-3a1939ff-ba1f-47df-8716-161a76f6c23b.png)

---

- Stack:
  - react.js / next.js / typescript
  - @tanstack/react-query to handle infinite querie and cache.
  - zod to validate and parse data / schemas from curiouscat API.
  - tailwind to styles and curiouscat UI as base.
  - react-infinite-scroll-component to consume the infinite scroll and make things simple for me.

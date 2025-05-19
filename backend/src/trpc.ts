import { initTRPC } from '@trpc/server'

const ideas = [
  {
    nick: 'cool-idea-nick-1',
    name: 'Idea 1',
    descriptions: 'Descriptions of idea 1...',
  },
  {
    nick: 'cool-idea-nick-2',
    name: 'Idea 2',
    descriptions: 'Descriptions of idea 2...',
  },
  {
    nick: 'cool-idea-nick-3',
    name: 'Idea 3',
    descriptions: 'Descriptions of idea 3...',
  },
  {
    nick: 'cool-idea-nick-4',
    name: 'Idea 4',
    descriptions: 'Descriptions of idea 4...',
  }
]

export const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter
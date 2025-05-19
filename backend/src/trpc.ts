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
    descriptions: 'Descriptions of idea 1...',
  },
  {
    nick: 'cool-idea-nick-3',
    name: 'Idea 3',
    descriptions: 'Descriptions of idea 1...',
  },
  {
    nick: 'cool-idea-nick-4',
    name: 'Idea 4',
    descriptions: 'Descriptions of idea 1...',
  },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

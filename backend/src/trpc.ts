import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import { z } from 'zod'

const ideas = _.times(15, (i) => ({
  nick: `cool-idea-nick-${i}`,
  name: `Idea ${i}`,
  descriptions: `Descriptions of idea ${i}...`,
  text: _.times(5, (j) => `<p>Text paragrph ${j} of idea ${i}...<p></br>`).join(
    ''
  ),
}))

export const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return {
      ideas: ideas.map((idea) =>
        _.pick(idea, ['nick', 'name', 'descriptions'])
      ),
    }
  }),
  getIdea: trpc.procedure
    .input(
      z.object({
        ideaNick: z.string(),
      })
    )
    .query(({ input }) => {
      const idea = ideas.find((idea) => idea.nick === input.ideaNick)
      return { idea: idea || null }
    }),
})

export type TrpcRouter = typeof trpcRouter

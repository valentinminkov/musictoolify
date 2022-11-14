'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/auth', async function (request, reply) {
    return { authenticated: true }
  })
}

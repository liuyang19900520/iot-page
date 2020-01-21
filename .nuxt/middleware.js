const middleware = {}

middleware['i18n'] = require('..\\middleware\\i18n.js')
middleware['i18n'] = middleware['i18n'].default || middleware['i18n']

middleware['user-agent'] = require('..\\middleware\\user-agent.js')
middleware['user-agent'] = middleware['user-agent'].default || middleware['user-agent']

middleware['visits'] = require('..\\middleware\\visits.js')
middleware['visits'] = middleware['visits'].default || middleware['visits']

export default middleware

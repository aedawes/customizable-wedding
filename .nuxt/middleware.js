const middleware = {}

middleware['init'] = require('../middleware/init.js')
middleware['init'] = middleware['init'].default || middleware['init']

middleware['lastRoute'] = require('../middleware/lastRoute.js')
middleware['lastRoute'] = middleware['lastRoute'].default || middleware['lastRoute']

export default middleware

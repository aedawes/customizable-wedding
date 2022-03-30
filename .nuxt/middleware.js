const middleware = {}

middleware['lastRoute'] = require('../middleware/lastRoute.js')
middleware['lastRoute'] = middleware['lastRoute'].default || middleware['lastRoute']

export default middleware

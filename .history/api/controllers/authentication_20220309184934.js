module.exports = function (passport) {
    const authenticate = passport.authenticate('local')

    return {
        login (req, res, next) {
            authenticate(req, res, err => {
                if (err) return next(err)
                res.cookie('user', JSON.stringify(req.user.username), {
                    maxAge: 36000000 // expires in 10 hours
                })
                res.enforcer.status(200).send()
            })
        },

        logout (req, res) {
            if (req.user) req.logout()
            res.clearCookie('user')
            res.enforcer.status(200).send()
        }
    }
}
module.exports = function (passport) {
    const authenticate = passport.authenticate('local')

    return {
        login (req, res, next) {
            authenticate(req, res, err => {
                if (err) return next(err)
                res.enforcer.status(200).send()
            })
        },

        logout (req, res) {
            if (req.user) req.logout()
            res.enforcer.status(200).send()
        }
    }
}
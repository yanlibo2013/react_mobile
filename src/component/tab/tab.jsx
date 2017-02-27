

module.exports = {
    path: 'tab',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./index'))
        })
    }
}

const Utils = {};
Utils.getComponentLazily=(importor, name = 'default') => {
    return (location, cb) => {
        importor.then((module) => {
            //如果是默认模块，则是 module.default
            cb(null, module[name]);
        })
            .catch((err) => {
                console.error(`动态路由加载失败：${err}`)
            });
    }
}

export default Utils;
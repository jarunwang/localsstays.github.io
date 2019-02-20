
let utils = {}

/** 异步引入WOWjs 需要放到 componentDidMount 里面执行**/
utils.importWOW = function(){
    if (typeof window !== 'undefined') {
        let wow = require('wowjs')
        new wow.WOW().init()
    }
} 
export default utils
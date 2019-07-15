// 处理趋势数据
function processTrendData(list, key, targe) {
    var temp = {
        category: [],
        data: [],
        targetData: []
    }
    if(list && list.length) {
        _.filter(list, function (item) {
            temp.category.push(moment(item.SPT).format(FORMAT))
            temp.data.push(item[key])
            if(targe) temp.targetData.push(targe)
        })
    }
    return temp
}
// 设置全屏
function setFullScreen () {
    api.setFullScreen({fullScreen: true})
    api.setScreenOrientation({orientation: 'landscape_left'}) // 屏幕方向
}

// 退出全屏
function closeFullScrren () {
    api.setFullScreen({fullScreen: false})
    api.setScreenOrientation({orientation: 'portrait_up'}) // 屏幕方向
}

// 通知引用win页面设置frm高度
function emitWinFullScreen (type) {
    api.execScript({
        name: 'win_site_detail',
        script: 'setSonFrmFullScreen(' + type + ')'
    })
}
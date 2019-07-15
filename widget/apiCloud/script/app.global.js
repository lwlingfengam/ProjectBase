
var publicAppConfig = {
  /**
     * 是否使用环境变量来区分Api的host地址
     */
  isUseENVWay: false,
  /**
     * 是否使用网关
     */
  isUseGateWare: false,
  /**
    * 网关地址
    */
  gatewayAddress: '',

  /** 不启用网关时配置模块host地址,其中webHost是用于web端配置接口代理，appHost是用于手机端配置真实接口 */
  hostConfig: {
    webHost: {
      admin: '/framework',
      file: '/filesystem',
      test: '/easymock',
      sospApiURL: '/sosp/api', // 业务接口地址
      mapImgUrl: '/sosp/mapImg', // 图片
      frameworkApiUrl: '/framework/api', // 框架接口地址
      baseDataApiUrl: '/basedata/api', // 基础数据接口地址
      convergeApiUrl: '/converge', // 数据汇聚
      ciApiUrl: '/ci/api' // 综合巡检
    },
    appHost: {
      admin: 'http://192.168.0.118:562/framework',
      file: 'http://192.168.0.200:21771/filesystem',
      test: 'https://www.easy-mock.com/mock/5caacf05828c3a52184cd2a0/wjfrontframe',
      sospApiURL: 'http://192.168.0.118:562/sosp/api', // 业务接口地址
      mapImgUrl: 'http://192.168.0.118:562/sosp/mapImg', // 图片
      frameworkApiUrl: 'http://192.168.0.118:562/framework/api', // 框架接口地址
      baseDataApiUrl: 'http://192.168.0.118:562/basedata/api/v1', // 基础数据接口地址
      convergeApiUrl: 'http://192.168.0.118:562/converge/api/v1', // 数据汇聚
      ciApiUrl: 'http://192.168.0.118:562/ci/api' // 综合巡检
    }
  },
  /** 是否需要登录 */
  isNeedLogin: true,
  /** 登录页面 */

  /** loginUrl: 'http://192.168.0.118:562/framework/account/loginApp?appkey=999916790593128802', */
  loginUrl: 'http://192.168.0.118:562/framework/account/loginApp?appkey=1096678610636509184',
  /** 使用web调试时配置对于host，用于登录回调 */
  webPackUrl: 'http://localhost:8080',
  /**
    * 请求超时的毫秒数
    */
  httpClientTimeout: 50000,
  /**
   * signalr服务端地址
   */
  signalrServerUrl: 'http://192.168.0.200:63192/IMHub'
}

localStorage.setItem('publicAppConfig', JSON.stringify(publicAppConfig))

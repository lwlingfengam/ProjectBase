// 站点详情 - 信息组
const GROUP_NAME = 'site_detail_group'
// 时间格式化
const FORMAT = 'YYYY-MM-DD'
// 最大最小值时间格式化
const MAX_MIN_FORMAT = 'HH:mm MM-DD'
// 最大水质等级
const LEVEL_MAX = 6
// 站点详情 - 信息类型
const INFO_TYPES = [
    {
        label: '水质类别',
        name: 'type'
    },
    {
        label: '实时参数',
        name: 'realtime'
    },
    // {
    //     label: '历史参数',
    //     name: 'history'
    // },
    // {
    //     label: '站点故障',
    //     name: 'malfunction'
    // }
]
// 站点详情 - 实时参数 - 全部实时取值类型
const VIEW_DATA_TYPES = [
    // {
    //     label: '水温',
    //     name: '',
    //     unit: '℃',
    //     key: 'WT'
    // },
    {
        label: 'ph',
        name: '',
        unit: '',
        key: 'PH'
    },
    /* {
        label: '电导率',
        name: '',
        unit: 's/m',
        key: 'COND'
    },
    {
        label: '浊度',
        name: '',
        unit: '',
        key: 'TURB'
    }, */
    {
        label: '氨氮',
        name: '',
        unit: 'mg/L',
        key: 'NH3N'
    },
    {
        label: 'COD',
        name: '',
        unit: '℃',
        key: 'DOX'
    },
    {
        label: 'BOD',
        name: '',
        unit: 'mg/L',
        key: 'CODMN'
    },
    {
        label: '总磷',
        name: '',
        unit: 'mg/L',
        key: 'TP'
    },
    /* {
        label: '流量',
        name: '',
        unit: 'm³/s',
        key: 'WT'
    },
    {
        label: '流速',
        name: '',
        unit: 'm/s',
        key: 'WT'
    },
    {
        label: '水位',
        name: '',
        unit: 'm',
        key: 'WT'
    } */
]
// 水质等级
const LEVELS = [
    {},
    {
        name: 'Ⅰ类',
        arabicNum: 'Ⅰ',
        color: '#69FAA2',
        borderColor: '#369602'
    },
    {
        name: 'Ⅱ类',
        arabicNum: 'Ⅱ',
        color: '#15B4F8',
        borderColor: '#0056B4'
    },
    {
        name: 'Ⅲ类',
        arabicNum: 'Ⅲ',
        color: '#33D786',
        borderColor: '#236300'
    },
    {
        name: 'Ⅳ类',
        arabicNum: 'Ⅳ',
        color: '#F8FA00',
        borderColor: '#515200'
    },
    {
        name: 'Ⅴ类',
        arabicNum: 'Ⅴ',
        color: '#F7AD15',
        borderColor: '#7B5300'
    },
    {
        name: '劣Ⅴ类',
        arabicNum: '劣Ⅴ',
        color: '#BD2B2E',
        borderColor: '#690001'
    }
]

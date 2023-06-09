var pipelinePrototype = {
    number: '',//管线编号
    type: '',//管线类型
    radius: 0,//管线半径
    length: 0,//管线长度（由起止经纬度和起止深度确定）
    color: '',//管线渲染颜色（由管线种类确定）
    rotation: '',//方位角（由起止经纬度和起止深度确定）
    startLongitude: 0,//起点经度
    endLongitude: 0,//终点经度
    startLatitude: 0,//起点纬度
    endLatitude: 0,//终点纬度
    startDepth: 0,//起点深度
    endDepth: 0,//终点深度
    centerLongitude: 0,//中点经度
    centerLatitude: 0,//中点经度
    centerDepth: 0,//中点经度
    DegreeY: 0,//水平角
    DegreeZ: 0,//俯仰角
};

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function getDistance(lon1, lat1, lon2, lat2) {
    const earthRadius = 6371000; // 地球半径（单位：米）

    // 将经纬度转换为弧度
    const lat1Rad = toRadians(lat1);
    const lon1Rad = toRadians(lon1);
    const lat2Rad = toRadians(lat2);
    const lon2Rad = toRadians(lon2);

    // 计算经纬度差值
    const dLat = lat2Rad - lat1Rad;
    const dLon = lon2Rad - lon1Rad;

    // 应用 Haversine 公式计算球面距离
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadius * c;
}

// 辅助函数：将角度转换为弧度


// 定义管线类型和颜色的映射关系
var colorMapping = {
    waterSupply: '#0070C0',
    drainage: '#500000',
    gas: '#FF7F50',
    electricity: '#FF0050',
    communication: '#00FF50',
    heatSupply: '#FF00FF',
    industrial: '#FF00FF',
    oil: '#9000CF',
    utilityTrench: '#000000',
    vacuumWaste: '#90484F',
};

// 定义管线类型和中文的映射关系
var nameMapping = {
    waterSupply: '给水',
    drainage: '排气',
    gas: '燃气',
    electricity: '电力',
    communication: '通信',
    heatSupply: '热力',
    industrial: '工业',
    oil: '石油',
    utilityTrench: '综合管沟',
    vacuumWaste: '垃圾真空'
};

pipelines = [];

function InitPipeData(number, type, radius, startLongitude, endLongitude, startLatitude, endLatitude, startDepth, endDepth) {
    let pipeline = Object.create(pipelinePrototype);
    pipeline.number = number;
    pipeline.type = type;
    pipeline.radius = radius;
    pipeline.startLongitude = startLongitude;
    pipeline.endLongitude = endLongitude;
    pipeline.startLatitude = startLatitude;
    pipeline.endLatitude = endLatitude;
    pipeline.startDepth = startDepth;
    pipeline.endDepth = endDepth;

    pipeline.color = colorMapping[pipeline.type];
    Distance = getDistance(pipeline.startLongitude, pipeline.startLatitude, pipeline.endLongitude, pipeline.endLatitude);//起止经纬度距离
    dLongitude = getDistance(pipeline.startLongitude, 0, pipeline.endLongitude, 0);//起止经度距离
    Depth = Math.abs(pipeline.startDepth - pipeline.endDepth);
    pipeline.length = Math.sqrt(Distance * Distance + Depth * Depth)
    pipeline.DegreeY = Math.asin(dLongitude / Distance) * (180 / Math.PI);//计算水平角
    pipeline.DegreeZ = 90 + Math.atan(Depth / Distance) * (180 / Math.PI);//计算俯仰角
    console.log(Distance, dLongitude, Depth);
    pipeline.rotation = '0 ' + pipeline.DegreeY + ' ' + pipeline.DegreeZ;
    pipeline.centerLongitude = ((pipeline.startLongitude + pipeline.endLongitude) / 2);
    pipeline.centerLatitude = ((pipeline.startLatitude + pipeline.endLatitude) / 2);
    pipeline.centerDepth = -(pipeline.startDepth + pipeline.endDepth) / 2;
    console.log(pipeline);
    return pipeline;
}

function write(pipelines, i) {
    var temp = pipelines[i].number.replace("new", "");
    temp = temp.replace("old", "")
    // return temp + ' ' + pipelines[i].type + ' ' + pipelines[i].radius + ' ' + pipelines[i].length + ' ' +
    //     pipelines[i].centerLongitude + ' ' + pipelines[i].centerLatitude + ' ' + pipelines[i].centerDepth + ' ' +
    //     pipelines[i].DegreeY + '° ' + (pipelines[i].DegreeZ - 90) + '°'
    return temp + ' ' + pipelines[i].type + ' ' + pipelines[i].radius + ' ' + pipelines[i].startLongitude + ' ' +
        pipelines[i].endLongitude + ' ' + pipelines[i].startLatitude + ' ' + pipelines[i].endLatitude + ' ' +
        pipelines[i].startDepth+ pipelines[i].endDepth
}
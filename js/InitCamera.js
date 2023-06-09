const longitude = localStorage.getItem('longitude');
const latitude = localStorage.getItem('latitude');
var nowlongitude;
var nowlatitude;
console.log(longitude, latitude);
cameraLatitude =  parseFloat(latitude);
cameraLongitude = parseFloat(longitude);
// cameraLatitude = 23.133266;
// cameraLongitude = 113.283274;
// 创建 <a-camera> 元素
var newEntity = document.createElement('a-camera');
// 设置属性
newEntity.setAttribute('arjs-device-orientation-controls', 'smoothingFactor: 0.8');
// newEntity.setAttribute('gps-new-camera', 'gpsMinDistance: 5');
newEntity.setAttribute('gps-camera', 'simulateLatitude: ' + cameraLatitude + '; simulateLongitude: ' + cameraLongitude);
newEntity.setAttribute('cursor', 'rayOrigin: mouse');
document.querySelector('a-scene').appendChild(newEntity);

function calculateMercatorOffset(lon1, lat1, lon2, lat2) {
    var R = 6378137; // 地球半径，单位：米

    var x1 = R * lon1 * Math.PI / 180;
    var y1 = R * Math.log(Math.tan((90 + lat1) * Math.PI / 360));

    var x2 = R * lon2 * Math.PI / 180;
    var y2 = R * Math.log(Math.tan((90 + lat2) * Math.PI / 360));

    var offsetX = x2 - x1;
    var offsetY = y2 - y1;

    return [offsetX, offsetY];
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(onSuccess, onError, {
        enableHighAccuracy: true,
        maximumAge: 3000,
        timeout: 5000
    });
} else {
    alert("Your browser does not support geolocation.");
}

function onSuccess(position) {
    let coords = wgs84togcj02(position.coords.latitude,position.coords.longitude);
    nowlatitude = coords[0];
    nowlongitude = coords[1];
    console.log(cameraLongitude,cameraLatitude);
    console.log(nowlongitude,nowlatitude);
    var temp=calculateMercatorOffset(cameraLongitude,cameraLatitude,nowlongitude,nowlatitude);
    var offsetX=temp[0];
    var offsetY=temp[1];
    console.log(temp);
    console.log(offsetX);
    console.log(offsetY);
    var newCamera = document.querySelector('a-camera');
    var newPosition = newCamera.getAttribute('position');
    newPosition.z += offsetY;
    newPosition.x += offsetX;
    newCamera.setAttribute('position',newPosition);
    console.log(newPosition);
}

function onError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        default:
            alert("An unknown error occurred.");
            break;
    }
}
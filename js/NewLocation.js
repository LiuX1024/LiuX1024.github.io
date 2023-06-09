var startIcon = new AMap.Icon({
    // 图标尺寸
    size: new AMap.Size(25, 34),
    // 图标的取图地址
    image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
    // 图标所用图片大小
    imageSize: new AMap.Size(135, 40),
    // 图标取图偏移量
    imageOffset: new AMap.Pixel(-9, -3)
});
var endIcon = new AMap.Icon({
    size: new AMap.Size(25, 34),
    image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
    imageSize: new AMap.Size(135, 40),
    imageOffset: new AMap.Pixel(-95, -3)
});

// 将 icon 传入 marker
var endMarker;
var startMarker;

map = new AMap.Map("container", {
    zoom: 20,
    center: [cameraLongitude, cameraLatitude]
});

var circle = new AMap.Circle({
    center: [cameraLongitude, cameraLatitude],
    radius: 10, //半径
    borderWeight: 3,
    strokeColor: "#FF33FF",
    strokeOpacity: 1,
    strokeWeight: 6,
    strokeOpacity: 0.2,
    fillOpacity: 0.4,
    strokeStyle: 'dashed',
    strokeDasharray: [10, 10],
    // 线样式还支持 'dashed'
    fillColor: '#1791fc',
    zIndex: 50,
    bubble: true
})
map.add(circle);

startMarker = new AMap.Marker({
    position: new AMap.LngLat(cameraLongitude, cameraLatitude),
    icon: startIcon,
    offset: new AMap.Pixel(-13, -30)
});
startMarker.setMap(map);

endMarker = new AMap.Marker({
    position: new AMap.LngLat(cameraLongitude, cameraLatitude),
    icon: endIcon,
    offset: new AMap.Pixel(-13, -30)
});
endMarker.setMap(map);

var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
map.on('click', function (e) {
    if (option1.checked) {
        document.getElementById('startLongitude').value = e.lnglat.getLng();
        document.getElementById('startLatitude').value = e.lnglat.getLat();
        document.getElementById('AstartLongitude').value = e.lnglat.getLng();
        document.getElementById('AstartLatitude').value = e.lnglat.getLat();
        console.log(e.lnglat.getLng(), e.lnglat.getLat());
        map.setCenter([e.lnglat.getLng(), e.lnglat.getLat()]);
        map.setZoom(20);
        map.remove(startMarker);
        startMarker = new AMap.Marker({
            position: new AMap.LngLat(e.lnglat.getLng(), e.lnglat.getLat()),
            icon: startIcon,
            offset: new AMap.Pixel(-13, -30)
        });
        startMarker.setMap(map);
    } else if (option2.checked) {
        document.getElementById('endLongitude').value = e.lnglat.getLng();
        document.getElementById('endLatitude').value = e.lnglat.getLat();
        document.getElementById('AendLongitude').value = e.lnglat.getLng();
        document.getElementById('AendLatitude').value = e.lnglat.getLat();
        map.setCenter([e.lnglat.getLng(), e.lnglat.getLat()]);
        map.setZoom(20);
        map.remove(endMarker);
        endMarker = new AMap.Marker({
            position: new AMap.LngLat(e.lnglat.getLng(), e.lnglat.getLat()),
            icon: endIcon,
            offset: new AMap.Pixel(-13, -30)
        });
        endMarker.setMap(map);
    }
});
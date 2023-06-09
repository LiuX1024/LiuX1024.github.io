var collide_flag = false;
var click_id="";

function InitPipeModel(pipelines, i) {
    let newEntity = document.createElement('a-cylinder')
    newEntity.setAttribute('id', pipelines[i].number);
    newEntity.setAttribute('radius', pipelines[i].radius);
    newEntity.setAttribute('type', pipelines[i].type);
    newEntity.setAttribute('height', pipelines[i].length);
    newEntity.setAttribute('color', pipelines[i].color);
    newEntity.setAttribute('rotation', pipelines[i].rotation);
    newEntity.setAttribute('position', {x: 0, y: pipelines[i].centerDepth, z: 0});
    newEntity.setAttribute('gps-entity-place', {
        latitude: pipelines[i].centerLatitude,
        longitude: pipelines[i].centerLongitude
    });
    newEntity.setAttribute('event-set__enter', '_event: mouseenter; color: black');
    newEntity.setAttribute('event-set__leave', '_event: mouseleave; color: ' + pipelines[i].color);
    newEntity.setAttribute('event-set__click', '_event: click; color: ' + pipelines[i].color);
    newEntity.setAttribute('static-body', '');
    newEntity.addEventListener('click', function () {
        console.log(newEntity)
        click_id = newEntity.getAttribute('id');
        var initialPosition = newEntity.getAttribute('gps-entity-place');
        var rotation = newEntity.getAttribute('rotation');
        var id = click_id.replace('new', "");
        id = id.replace('old', "");
        var type = newEntity.getAttribute('type');
        document.getElementById('failurePipe').value = id;
        document.getElementById('failureSelect').value = type;
        document.getElementById('p1').textContent = '管线编号：' + id;
        document.getElementById('p2').textContent = '管线类型：' + nameMapping[type];
        document.getElementById('p3').textContent = '管线半径：' + newEntity.getAttribute('radius') + 'm';
        document.getElementById('p4').textContent = '管线长度：' + parseFloat(newEntity.getAttribute('height')).toFixed(3) + 'm';
        document.getElementById('p5').textContent = '中点经度：' + initialPosition.longitude.toFixed(6);
        document.getElementById('p6').textContent = '中点纬度：' + initialPosition.latitude.toFixed(6);
        document.getElementById('p7').textContent = '中点深度：' + (-newEntity.getAttribute('position').y) + 'm';
        document.getElementById('p8').textContent = '水平角：' + rotation.y.toFixed(3) + '°';
        document.getElementById('p9').textContent = '俯仰角：' + (rotation.z - 90).toFixed(3) + '°';
        chart(type);
        document.getElementById('pipeData').style.display = 'block';
    });
    newEntity.addEventListener('collide', function () {
        if (!collide_flag && id) {
            var temp = newEntity.getAttribute('id').replace('new', "");
            temp = temp.replace('old', "");
            document.querySelector('#' + id).setAttribute('color', 'yellow');
            document.getElementById('warn').textContent = '当前模拟管线与管线' + temp + '碰撞！请重新移动';
            document.getElementById('collide').style.display = 'block';
            collide_flag = true;
            setTimeout(function () {
                document.querySelector('#' + id).setAttribute('color', colorMapping[document.querySelector('#' + id).getAttribute('type')]);
                console.log(newEntity);
                document.getElementById('collide').style.display = 'none';
                collide_flag = false;
            }, 1000);
        }
    });
    var pipetype = '#' + pipelines[i].type;
    document.querySelector(pipetype).appendChild(newEntity);
    console.log(newEntity);
}

for (var i = 0; i < pipelines.length; i++) {
    InitPipeModel(pipelines, i);
}
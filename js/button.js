function choose() {
    document.getElementById('choose').style.display = 'block';
}

function closeChoose() {
    document.getElementById('choose').style.display = 'none';
}

function finishChoose() {
    document.getElementById('choose').style.display = 'none';
}

function simulate() {
    var child = document.getElementById('newPipe').querySelectorAll('input');
    child.forEach(function (child) {
        child.value = '';
    });
    document.getElementById('newPipe').style.display = 'block';

}

function closePipeData() {
    document.getElementById('pipeData').style.display = 'none';
}

function submitfailure() {
    document.getElementById('pipeData').style.display = 'none';
    document.getElementById('failureWindow').style.display = 'block';
    var child = document.getElementById('failureWindow').querySelectorAll('input');
    child.forEach(function (element, index) {
        if (index !== 2) {
            element.value = '';
        }
    });
}

function Exit() {
    window.location.href = "Data.html";
    // newC=document.querySelector('a-camera');
    // iniPosition = newC.getAttribute('position');
    // iniPosition.x += 1;
    // newC.setAttribute('position', iniPosition);
}

function closeNewPipe() {
    document.getElementById('newPipe').style.display = 'none';
    document.getElementById('ar-button2').style.display = 'none';
    document.getElementById('ar-button1').style.display = 'flex';
}

function closeTurnBackWindow() {
    document.getElementById('turnBackWindow').style.display = 'none';
}

function getMap() {
    document.getElementById('gpsWindow').style.display = 'block';
    document.getElementById('startLongitude').value = '';
    document.getElementById('startLatitude').value = '';
    document.getElementById('endLongitude').value = '';
    document.getElementById('endLatitude').value = '';
}

function closeMap(map) {
    document.getElementById('gpsWindow').style.display = 'none';
}

function closeFailure() {

    document.getElementById('pipeData').style.display = 'block';
    document.getElementById('failureWindow').style.display = 'none';

}

function finishFailure() {
    document.getElementById('failureWindow').style.display = 'block';
    var child = document.getElementById('failureWindow').querySelectorAll('input');
    document.getElementById(click_id).setAttribute('value1', child[0].value);//故障标题
    document.getElementById(click_id).setAttribute('value2', child[1].value);//管线地点
    document.getElementById(click_id).setAttribute('value3', child[3].value);//问题描述
    document.getElementById('pipeData').style.display = 'block';
    document.getElementById('failureWindow').style.display = 'none';
}

function failureWindow() {

    var child = document.getElementById('failureWindow').querySelectorAll('input');
    var id = click_id.replace('new', "");
    id = id.replace('old', "");
    if (document.getElementById(click_id).getAttribute('value1')) {
        child[0].value = document.getElementById(click_id).getAttribute('value1');//故障标题
        child[1].value = document.getElementById(click_id).getAttribute('value2');//管线地点
        child[2].value = id;
        child[3].value = document.getElementById(click_id).getAttribute('value3');//问题描述
        document.getElementById('failureSelect').value = document.getElementById(click_id).getAttribute('type');
    }
    else{
        child[0].value = '该管线暂无故障';//故障标题
        child[1].value = '';//管线地点
        child[3].value = '';//问题描述
    }
    document.getElementById('pipeData').style.display = 'none';
    document.getElementById('failureWindow').style.display = 'block';

}


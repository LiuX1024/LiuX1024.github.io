newpipelines = [];
var i = 0;
var id = '';


function CreateNewPipe() {
    var child = document.getElementById('newPipe').querySelectorAll('input');
    pipeline = InitPipeData('new' + child[0].value, document.getElementById('firstSelect').value,
        parseFloat(child[1].value), parseFloat(child[4].value), parseFloat(child[5].value), parseFloat(child[6].value),
        parseFloat(child[7].value), parseFloat(child[2].value), parseFloat(child[3].value));
    //console.log('new'+child[0].value, document.querySelector('#firstSelect').value, parseFloat(child[1].value), parseFloat(child[4].value), parseFloat(child[5].value), parseFloat(child[6].value), parseFloat(child[7].value), parseFloat(child[2].value), parseFloat(child[3].value));
    //pipeline=InitPipeData('new002', 'gas', 1, 113.283174, 113.283074, 23.133166, 23.133266, 0, 10);
    newpipelines.push(pipeline);
    InitPipeModel(newpipelines, i);
    let newEntity = document.querySelector('#' + newpipelines[i].number)
    newEntity.removeAttribute('static-body');
    newEntity.setAttribute('dynamic-body', 'mass:1e100');
    var newEntityColor=newEntity.getAttribute('color');
    var isWhite=false;
    setInterval(function() {
        if (isWhite) {
            newEntity.setAttribute('color', newEntityColor);
        } else {
            newEntity.setAttribute('color', 'white');
        }
        isWhite = !isWhite;
    }, 500);
    id = newpipelines[i].number;
    document.getElementById('newPipe').style.display = 'none';
    document.getElementById('ar-button1').style.display = 'none';
    document.getElementById('ar-button2').style.display = 'flex';

}

function addWest() {
    let newEntity = document.querySelector('#' + id);
    newEntity.removeAttribute('dynamic-body');
    initialPosition = newEntity.getAttribute('position');
    initialPosition.x -= 1;
    newEntity.setAttribute('position', initialPosition);
    newEntity.setAttribute('dynamic-body', "mass:1e100");
    console.log('Location:X' + initialPosition.x + ' Y:' + initialPosition.y + ' Z:' + initialPosition.z);
}

function addEast() {
    let newEntity = document.querySelector('#' + id);
    newEntity.removeAttribute('dynamic-body');
    initialPosition = newEntity.getAttribute('position');
    initialPosition.x += 1;
    newEntity.setAttribute('position', initialPosition);
    console.log('Location:X' + initialPosition.x + ' Y:' + initialPosition.y + ' Z:' + initialPosition.z);
    newEntity.setAttribute('dynamic-body', "mass:1e100");
}

function addUp() {
    let newEntity = document.querySelector('#' + id);
    newEntity.removeAttribute('dynamic-body');
    initialPosition = newEntity.getAttribute('position');
    initialPosition.y += 1;
    newEntity.setAttribute('position', initialPosition);
    newEntity.setAttribute('dynamic-body', "mass:1e100");
}

function addDown() {
    let newEntity = document.querySelector('#' + id);
    newEntity.removeAttribute('dynamic-body');
    initialPosition = newEntity.getAttribute('position');
    initialPosition.y -= 1;
    newEntity.setAttribute('position', initialPosition);
    newEntity.setAttribute('dynamic-body', "mass:1e100");
}

function addNorth() {
    let newEntity = document.querySelector('#' + id);
    newEntity.removeAttribute('dynamic-body');
    initialPosition = newEntity.getAttribute('position');
    initialPosition.z += 1;
    newEntity.setAttribute('position', initialPosition);
    newEntity.setAttribute('dynamic-body', "mass:1e100");
}

function addSouth() {
    let newEntity = document.querySelector('#' + id);
    newEntity.removeAttribute('dynamic-body');
    initialPosition = newEntity.getAttribute('position');
    initialPosition.z -= 1;
    newEntity.setAttribute('position', initialPosition);
    newEntity.setAttribute('dynamic-body', "mass:1e100");
}

function addYaw() {
    let newEntity = document.querySelector('#' + id);
    newEntity.removeAttribute('dynamic-body');
    rotation = newEntity.getAttribute('rotation');
    rotation.y += 5;
    newEntity.setAttribute('rotation', rotation);
    newEntity.setAttribute('dynamic-body', "mass:1e100");
}

function reduceYaw() {
    let newEntity = document.querySelector('#' + id);
    newEntity.removeAttribute('dynamic-body');
    rotation = newEntity.getAttribute('rotation');
    rotation.y -= 5;
    newEntity.setAttribute('rotation', rotation);
    newEntity.setAttribute('dynamic-body', "mass:1e100");
}

function turnBackWindow() {
    document.getElementById('turnBackWindow').style.display = 'block';
}

function turnBack() {
    document.getElementById('turnBackWindow').style.display = 'none';
    document.querySelector('#' + id).remove();
    newpipelines.splice(i, 1);
    i--;
    document.getElementById('ar-button1').style.display = 'flex';
    document.getElementById('ar-button2').style.display = 'none';
}

function finishNewpipe() {
    let newEntity = document.querySelector('#' + id);
    newEntity.removeAttribute('dynamic-body');
    newEntity.setAttribute('static-body', "");
    document.getElementById('downloadTXT').style.display = 'block';
    document.getElementById('ar-button1').style.display = 'flex';
    document.getElementById('ar-button2').style.display = 'none';
    i++;

}

function closeDownload() {
    document.getElementById('downloadTXT').style.display = 'none';
    document.getElementById('ar-button1').style.display = 'flex';
}

function downTXT() {
    var textContent = "管线编号 管线类型 管线半径 管线长度 中点经度 中点纬度 中点深度 水平角 俯仰角\n"
    for (var j = 0; j < newpipelines.length; j++) {
        textContent += write(newpipelines, j) + '\n';
    }
    const fileName = "simulatePipe.txt";
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(textContent));
    element.setAttribute("download", fileName);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    document.getElementById('downloadTXT').style.display = 'none';
    document.getElementById('ar-button1').style.display = 'flex';
}

function returnTXT() {
    document.getElementById('downloadTXT').style.display = 'none';
    document.getElementById('ar-button1').style.display = 'flex';
}
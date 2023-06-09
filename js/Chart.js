var intervalId;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function chart(type) {
    clearInterval(intervalId);
    if (type === 'waterSupply') {
        var chart = echarts.init(document.getElementById('chartContainer'));
        var option = {
            series: [
                {
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    detail: {formatter: '{value}m³'},
                    data: [{value: 20, name: '流量'}]
                }
            ]
        };
        chart.setOption(option);
        intervalId = setInterval(function () {
            // 生成随机数或根据需求更新 value 的逻辑
            var newValue = getRandomInt(0, 100);

            // 更新数据
            option.series[0].data[0].value = newValue;

            // 刷新图表
            chart.setOption(option);
        }, 2000); // 每隔 2 秒更新一次
    }


    if (type === 'drainage') {
        clearInterval(intervalId);
        var chart = echarts.init(document.getElementById('chartContainer'));
        var option = {
            series: [
                {
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    detail: {formatter: '{value}m³'},
                    data: [{value: 20, name: '流量'}]
                }
            ]
        };
        chart.setOption(option);
        intervalId = setInterval(function () {
            // 生成随机数或根据需求更新 value 的逻辑
            var newValue = getRandomInt(0, 100);

            // 更新数据
            option.series[0].data[0].value = newValue;

            // 刷新图表
            chart.setOption(option);
        }, 2000); // 每隔 2 秒更新一次
    }
    if (type === 'gas') {
        clearInterval(intervalId);
        var chart = echarts.init(document.getElementById('chartContainer'));
        var option = {
            series: [
                {
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    detail: {formatter: '{value}m³'},
                    data: [{value: 20, name: '流量'}]

                }
            ]
        };
        chart.setOption(option);
        intervalId = setInterval(function () {
            // 生成随机数或根据需求更新 value 的逻辑
            var newValue = getRandomInt(0, 100);

            // 更新数据
            option.series[0].data[0].value = newValue;

            // 刷新图表
            chart.setOption(option);
        }, 2000); // 每隔 2 秒更新一次
    }
    if (type === 'electricity') {
        clearInterval(intervalId);
        var chart = echarts.init(document.getElementById('chartContainer'));
        var option = {
            series: [
                {
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    detail: {formatter: '{value}V'},
                    data: [{value: 20, name: '电压'}]
                }
            ]
        };
        chart.setOption(option);
        intervalId = setInterval(function () {
            // 生成随机数或根据需求更新 value 的逻辑
            var newValue = getRandomInt(0, 100);

            // 更新数据
            option.series[0].data[0].value = newValue;

            // 刷新图表
            chart.setOption(option);
        }, 2000); // 每隔 2 秒更新一次
    }
    if (type === 'communication') {
        clearInterval(intervalId);
        var chart = echarts.init(document.getElementById('chartContainer'));
        var option = {
            series: [
                {
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    detail: {formatter: '{value}Mbps'},
                    data: [{value: 20, name: '数据'}]
                }
            ]
        };
        chart.setOption(option);
        intervalId = setInterval(function () {
            // 生成随机数或根据需求更新 value 的逻辑
            var newValue = getRandomInt(0, 100);

            // 更新数据
            option.series[0].data[0].value = newValue;

            // 刷新图表
            chart.setOption(option);
        }, 2000); // 每隔 2 秒更新一次
    }
    if (type === 'heatSupply') {
        clearInterval(intervalId);
        var chart = echarts.init(document.getElementById('chartContainer'));
        var option = {
            series: [
                {
                    type: 'gauge',
                    min: -10,
                    max: 100,
                    detail: {formatter: '{value}℃'},
                    data: [{value: 20, name: '温度'}]
                }
            ]
        };
        chart.setOption(option);
        intervalId = setInterval(function () {
            // 生成随机数或根据需求更新 value 的逻辑
            var newValue = getRandomInt(-10, 100);

            // 更新数据
            option.series[0].data[0].value = newValue;

            // 刷新图表
            chart.setOption(option);
        }, 2000); // 每隔 2 秒更新一次
    }
    if (type === 'industrial') {
        clearInterval(intervalId);
        var chart = echarts.init(document.getElementById('chartContainer'));
        var option = {
            series: [
                {
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    detail: {formatter: '{value}Pa'},
                    data: [{value: 20, name: '压力'}]
                }
            ]
        };
        chart.setOption(option);
        intervalId = setInterval(function () {
            // 生成随机数或根据需求更新 value 的逻辑
            var newValue = getRandomInt(0, 100);

            // 更新数据
            option.series[0].data[0].value = newValue;

            // 刷新图表
            chart.setOption(option);
        }, 2000); // 每隔 2 秒更新一次
    }
    if (type === 'oil') {
        clearInterval(intervalId);
        var chart = echarts.init(document.getElementById('chartContainer'));
        var option = {
            series: [
                {
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    detail: {formatter: '{value}m³'},
                    data: [{value: 20, name: '流量'}]
                }
            ]
        };
        chart.setOption(option);
        intervalId = setInterval(function () {
            // 生成随机数或根据需求更新 value 的逻辑
            var newValue = getRandomInt(0, 100);

            // 更新数据
            option.series[0].data[0].value = newValue;

            // 刷新图表
            chart.setOption(option);
        }, 2000); // 每隔 2 秒更新一次
    }
    if (type === 'utilityTrench') {
        clearInterval(intervalId);
        var chart = echarts.init(document.getElementById('chartContainer'));
        var option = {
            series: [
                {
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    detail: {formatter: '{value}m³'},
                    data: [{value: 20, name: '流量'}]
                }
            ]
        };
        chart.setOption(option);
        intervalId = setInterval(function () {
            // 生成随机数或根据需求更新 value 的逻辑
            var newValue = getRandomInt(0, 100);

            // 更新数据
            option.series[0].data[0].value = newValue;

            // 刷新图表
            chart.setOption(option);
        }, 2000); // 每隔 2 秒更新一次
    }
    if (type === 'vacuumWaste') {
        clearInterval(intervalId);
        var chart = echarts.init(document.getElementById('chartContainer'));
        var option = {
            series: [
                {
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    detail: {formatter: '{value}m³'},
                    data: [{value: 20, name: '流量'}]
                }
            ]
        };
        chart.setOption(option);
        intervalId = setInterval(function () {
            // 生成随机数或根据需求更新 value 的逻辑
            var newValue = getRandomInt(0, 100);

            // 更新数据
            option.series[0].data[0].value = newValue;

            // 刷新图表
            chart.setOption(option);
        }, 2000); // 每隔 2 秒更新一次
    }

}
// 等页面完全加载后再执行（防止 map div 还没渲染）
document.addEventListener('DOMContentLoaded', function () {

  // 初始化地图
  var map = L.map('map').setView([22.543, 114.058], 11);  // 中心：深圳香港交界，缩放级别11

  // 添加 OpenStreetMap 瓦片层
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

  // 加一个测试标记（未来替换成你的探险点）
  L.marker([22.543, 114.058])
    .addTo(map)
    .bindPopup('测试点：这里可以写备注<br>比如：铁坨山白骨洞入口附近')
    .openPopup();

  // 控制台输出，方便调试
  console.log('地图初始化成功！');
});
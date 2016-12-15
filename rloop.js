var loop = function(data, n) {
  n = n || 0;
  var dn = data[n] || data[Object.keys(data)[n]];
  if(dn) {  
    if(typeof dn === "object") {
      loop(dn);
    } else {
      console.log(dn);
    }
    loop(data, n+1);
  }
};

var data1 = [1, 2, 3, 4, 5];

var data2 = [
  {a:1,b:2,c:3},
  {a:4,b:5,c:6},
  {a:7,b:8,c:9},
];

var data3 = {
  x:{a:1,b:2,c:3},
  y:{a:4,b:5,c:6},
  z:{a:7,b:8,c:9}
};

var data4 = [
  {a:1,b:2,c:[11,12,{d:"x",e:"y",f:"z"}]},
  {a:4,b:5,c:{d:"a",e:"b",f:"c"}},
  {a:7,b:8,c:9},
];

loop(data4);

//var http = require("http");
//http.createServer(function (request,response){
//	response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.end('Hello World\n');
//}).listen(8888);
//
//console.log('Server running at http://127.0.0.1:8888/');

var obj = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10,10]];
var sum = 0;
var flag = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
for(var i=0; i<obj.length; i++){
    var first_try = obj[i][0];
    var second_try = obj[i][1];

    if(i != 9){
        if(first_try + second_try < 10){
            sum += (first_try*flag[i][0] + second_try*flag[i][1]);
            continue;
        }
        else if(first_try + second_try == 10 && first_try != 10){
            flag[i+1][0]++;
        }
        else if(first_try + second_try == 10 && first_try == 10){
            if(obj[i+1][0] != 10){
                flag[i+1][0]++;
                flag[i+1][1]++;
            }
            else{
                if(i!=8){
                    flag[i+1][0]++;
                    flag[i+2][0]++;
                }
                else{
                    flag[9][0]++;
                    flag[9][1]++;
                }
            }
        }
    }
    sum += (first_try*flag[i][0] + second_try*flag[i][1]);
}

if(typeof(obj[9][2]) != "undefined"){
    sum += obj[9][2];
}

console.log(sum);

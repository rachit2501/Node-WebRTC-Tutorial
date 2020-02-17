function readFile(filename , cb){
   var sq = ASQ();
    fs.readFile(filename , sq.errfcb())
    return sq
    };

function delayMsg(done , contents){
    setTimeout(function(){
        done(contents);
    },1000)
}
function asq(filename){
    return readFile(filename).then(delayMsg);
}
var fs = require('fs');
var ASQ = require('asynquence');
require('asynquence-contrib');
module.exports = {asq};
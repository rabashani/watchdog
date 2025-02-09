
function processesToArr(consoleOutput) {
    return consoleOutput.split('\n');
}

function getPid(process) {
    return parseInt(process.match(/\d+/)[0]);
}

function mergeFfmpegPhp (phpObj, ffmpegArr) {
 return ffmpegArr.map((item) => {
     const userPhp = phpObj[item.userId];
     item.phpProcesses = userPhp ? userPhp : [];
     return item;
 })
}

module.exports = {
    processesToArr,
    getPid,
    mergeFfmpegPhp
}

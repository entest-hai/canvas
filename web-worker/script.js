// self.addEventListener('message', (ev) => {
//     console.log('web worker started with data: ', ev.data)
//     let data = ev.data
//     var i = 0 
//     switch (data) {
//         case 'Get Started':
//             // doing something here such as get/post request 
//             self.postMessage('Web Worker Started')
//             i = i + 1
//             self.postMessage(i)
//             break;
//         case 'Other':
//             self.postMessage('Other task ...')
//             break;
//         default:
//             console.log("Invalid access")
//             self.postMessage("Closing web worker")
//             self.close()
//     }
// })

var i = 0; 

function timedCount() {
    i = i + 1 
    self.postMessage(i);
    setTimeout("timedCount()", 500)
}

timedCount()
const Ws = require('ws');
((Ws) => {
        //  实例化
        const server = new Ws.Server({ port: 8000 })
        const init = () => {
            bindEvent()
        }
        function bindEvent() {
            server.on('open', handleOpen);
            server.on('close', handleClose);
            server.on('error', handleError);
            server.on('connection', handleConnection);
        }
        function handleOpen() {
            console.log('handleOpen')
        
        }
        function handleClose() {
            console.log(' handleClose')

        }
        function handleError() {
            console.log(' handleError')
        }
        function handleConnection(ws) {
            // 通过连接里的参数里的on进行监听前端发送的数据
            console.log('cnnection')
            ws.on('message', handleMessage)
        }

        function handleMessage(msg) {
            // console.log(msg.toString())
            // 广播给所有人 ,clients:客户端的意思
            server.clients.forEach(function(c){
                c.send(msg.toString())  //前端message方法会接收到
            })

        }
        init()
    })(Ws)
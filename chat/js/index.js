((doc, WebSocket, storage, location) => {
    const oList = doc.querySelector('#list')
    const oMsg = doc.querySelector('#message')
    const oSendBtn = doc.querySelector('#send')
    const ws = new WebSocket('ws:localhost:8000'); //服务地址
    let username = ''
    const init = () => {
        bindEvent();
    }

    function bindEvent() {

        oSendBtn.addEventListener('click', handleSendBtnClick, false)
        ws.addEventListener('open', handleOpen, false)
        ws.addEventListener('close', handleClose, false)
        ws, addEventListener('error', handleError, false)
        ws.addEventListener('message', handleMessage, false)
    }
    function handleSendBtnClick() {
        console.log('websocket-Click')
        // 拿到输入框的值
        const message = oMsg.value
        if (!message.trim().length) {
            return
        }
        // console.log(username)
        // 发送
        ws.send(JSON.stringify({
            username: username,
            time: new Date(),
            msg: message
        }))
           
        oMsg.value = ''
    }
    function handleOpen(e) {
        console.log('handleOpen', e)
        // 拿到用户名
        username = storage.getItem('username')
        if (!username) {
            location.href = 'entry.html'
            return
        }
    }
    function handleClose(e) {
        console.log('websocket-close', e)
    }
    function handleError(e) {
        console.log('websocket error', e)
    }
    function handleMessage(e) {
        console.log('websocket Message', e)
        // 拿到后端广播的数据
        const myData = JSON.parse(e.data)
        oList.append(createLi(myData))
    }
    //   创建li
    function createLi(data) {
        const { msg, time, username } = data
        const oItem = doc.createElement('li')
        console.log(oItem)
        oItem.innerHTML = `
             <p>
             <span>${username}</span>
             <i>${new Date(time)}</i>
             </p>
             <p>消息：${msg}</p>
        `;
        return oItem
    }

    init()

})(document, WebSocket, localStorage, location)
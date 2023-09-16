((doc,stoage,location) => {
    const oUsername = doc.querySelector('#username')
    const oEnterBtn = doc.querySelector('#enter')
    
    const init = () => {
        bindEvent()
    }

    function bindEvent() {
        oEnterBtn.addEventListener('click', handleBtnClick, false)
    }

    function handleBtnClick() {
          const username = oUsername.value.trim()
          if(username.length < 6){
            alert('用户名不能小于6')
            return
          }
     stoage.setItem('username',username)
     location.href = 'index.html'
      
    }

    init()

})(document,localStorage,location)
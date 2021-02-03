Vue.component('user-profile', {
    template: `
    <div class="chats__chat friend friend--lg">
        <div class="friend__column">
        <img
            src="images/avatar.jpg"
            alt=""
            class="m-avatar friend__avatar"/>
        <div class="friend__content">
            <span class="friend__name">{{ userName }}</span>
            <span class="friend__bottom-text">{{ statusMsg }}</span>
        </div>
        </div>
        <div class="friend__column">
            <div class="friend__now-listening">
                <span class="chat__timestamp">{{ lastChat }}</span>
            </div>
        </div>
    </div> 
    `,
    data: function() {
        return {
        userName : 'Hannah',
        statusMsg : 'Wanna Sleep!',
        lastChat : 'March 8'
        }
    }
})

const uapp = new Vue({
    el: '#profileCon'
})

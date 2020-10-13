

Vue.component('user-profile', {
    template: `
    <div class="chats__chat friend friend--lg">
        <div class="friend__column">
        <img
            src="images/avatar.jpg"
            alt=""
            class="m-avatar friend__avatar"/>
        <div class="friend__content">
            <span class="friend__name">{{ profile.userName }}</span>
            <span class="friend__bottom-text">{{ profile.statusMsg }}</span>
        </div>
        </div>
        <div class="friend__column">
            <div class="friend__now-listening">
                <span class="chat__timestamp">{{ chatInfo.lastChat }}</span>
            </div>
        </div>
    </div> 
    `,
    date: function() {
        return {
        userName : '',
        statusMsg : '',
        lastChat : ''
        }
    },
    computed: {
        userName() { return store.state.profile.userName },
        statusMsg() { return store.state.profile.statusMsg },
        lastChat() { return store.state.chatInfo.lastChat }
    }
})

const store = new Vuex.Store({
    state: model
})

const uapp = new Vue({
    el: '#profileCon',
    store
})

      
var model = {
    profile: {
        userName: "Hanna",
        statusMsg: "Wanna sleep!"
    },
    chatInfo: {
        lastChat: "March 8"
    }
}
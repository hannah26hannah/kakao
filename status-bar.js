

Vue.component('status-bar', {
    template: `
    <div class="status-bar">
      <div class="status-bar__column">
        <span class="status-bar__colck">{{ timestamp }}</span>
      </div>
      <div class="status-bar__column">
        <i class="fas fa-clock"></i>
        <i class="fas fa-volume-mute"></i>
        <i class="fas fa-wifi"></i>
        <span class="status-bar__battery-level">100%</span>
        <i class="fas fa-battery-full"></i>
      </div>
    </div>
    `,
    data: function() {
        timestamp = ''
        return {
            timestamp
        }
    },
    created() {
        setInterval(this.getNow, 1000);
    },
    methods: {
        getNow: function() {
            let d = new Date();
            let hour = d.getHours();
            let minute = d.getMinutes(); 
            let second = d.getSeconds();
            let date = `${hour < 10 ? "0" + hour : hour}`+":"+`${minute < 10 ? "0" + minute : minute}`;
            this.timestamp = date;
        }
    }
  })
  const app = new Vue({
    el: '#headerBar'
  })


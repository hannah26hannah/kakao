Vue.component('footer-bar', {
    template: `
    <ul class="nav__list">
      <li class="nav__list-item">
        <a href="friends.html" class="nav__list-link">
          <i class="far fa-user"></i>
        </a>
      </li>
      <li class="nav__list-item">
        <a href="index.html" class="nav__list-link">
          <div class="nav__badge">8</div>
          <i class="fas fa-comment"></i>
        </a>
      </li>
      <li class="nav__list-item">
        <a href="find.html" class="nav__list-link">
          <i class="fas fa-search"></i>
        </a>
      </li>
      <li class="nav__list-item">
        <a href="more.html" class="nav__list-link">
          <i class="fas fa-ellipsis-h"></i
        ></a>
      </li>
    </ul>
    `
})
const vapp = new Vue({
    el: '#footerBar'
})
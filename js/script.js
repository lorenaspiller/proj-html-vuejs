var app = new Vue({
  el: '#app',
  data: {
    shoppingItems: 0,
    navbar: [
      {
        name: 'home',
        icon: false,
        position: {
          header: true,
          footer: false
        },
        dropDown: [
          'Classic Shop',
          'Extended Width'
        ]
      },
      {
        name: 'shop',
        icon: false,
        position: {
          header: true,
          footer: true
        }
      },
      {
        name: 'about',
        icon: false,
        position: {
          header: true,
          footer: true
        }
      },
      {
        name: 'gallery',
        icon: false,
        position: {
          header: true,
          footer: true
        }
      },
      {
        name: 'locations',
        icon: false,
        position: {
          header: true,
          footer: true
        }
      },
      {
        name: 'journal',
        icon: false,
        position: {
          header: true,
          footer: true
        }
      },
      {
        name: 'contact',
        icon: false,
        position: {
          header: true,
          footer: true
        }
      },
      {
        name: 'my account',
        icon: false,
        position: {
          header: true,
          footer: false
        }
      },
      {
        name: 'orders',
        icon: false,
        position: {
          header: false,
          footer: true
        }
      },
      {
        title: 'shopping-cart',
        family: 'fas',
        prefix: 'fa-',
        icon: true,
        position: {
          header: true,
          footer: true
        },
      }
    ],
    socials: [
      {
        address: 'instagram',
        title: 'instagram',
        family: 'fab',
        prefix: 'fa-',
      },
      {
        address: 'twitter',
        title: 'twitter',
        family: 'fab',
        prefix: 'fa-',
      },
      {
        address: 'facebook',
        title: 'facebook-f',
        family: 'fab',
        prefix: 'fa-',
      },
      {
        address: 'pinterest',
        title: 'pinterest-p',
        family: 'fab',
        prefix: 'fa-',
      },
    ]
  },
  methods: {

  }

})

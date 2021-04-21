var app = new Vue({
  el: '#app',
  data: {
    shoppingItems: 0,
    slideIndex: 0,
    slideIndexSlice: 4,
    slideIndexSliceProd: 2,
    chevronBackToTop: false,
    headerTopSticky: false,
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
    ],
    products: [
      {
        name: "choco chip cookies",
        type: "Cookies, Pastries",
        img: 'img/choco-chip-cookies.jpg',
        price: "$18.00 - $32.00"
      },
      {
        name: "strawberry jam cookies",
        type: "Cookies, Pastries",
        img: 'img/strawberry-jam-cookies.jpg',
        price: "$36.00 - $60.00"
      },
      {
        name: "strawberry donut",
        type: "Cookies, Pastries",
        img: 'img/strawberry-donut.jpg',
        price: "$24.00 - $48.00"
      },
      {
        name: "perfect macarons",
        type: "Cookies, Pastries",
        img: 'img/perfect-macarons.jpg',
        price: "$32.00 - $56.00"
      },
      {
        name: "cookies with ice cream",
        type: "Cookies, Pastries",
        img: 'img/cookies-with-ice-cream.jpg',
        price: "$18.00 - $34.00"
      },
      {
        name: "homemade bread",
        type: "Breads, Pastries",
        img: 'img/home-bread.jpg',
        price: "$26.00 - $68.00"
      },
      {
        name: "premium bread",
        type: "Breads, Pastries",
        img: 'img/premium-bread.jpg',
        price: "$32.00 - $68.00"
      },
      {
        name: "cake with cherry topping",
        type: "Cookies, Pastries",
        img: 'img/cherry-cake.jpg',
        price: "$99.00"
      },
      {
        name: "blackberry stuffed bread",
        type: "Breads, Pastries",
        img: 'img/blackberry-stuffed-bread.jpg',
        price: "$22.00 - $46.00"
      },
      {
        name: "glazed bread with fruits",
        type: "Breads, Pastries",
        img: 'img/glazed-pancake-with-lemon.jpg',
        onSale: "$36.00",
        price: "$24.00"
      },
      {
        name: "chocolate cupcake",
        type: "Cookies, Pastries",
        img: 'img/small-cupcake.jpg',
        price: "$26.00 - $68.00"
      },
    ],
    smallSelection: [
      {
        name: "choco chip cookies",
        type: "Cookies, Pastries",
        img: 'img/choco-chip-cookies.jpg',
        price: "$18.00 - $32.00"
      },
      {
        name: "strawberry jam cookies",
        type: "Cookies, Pastries",
        img: 'img/strawberry-jam-cookies.jpg',
        price: "$36.00 - $60.00"
      },
      {
        name: "cookies with ice cream",
        type: "Cookies, Pastries",
        img: 'img/cookies-with-ice-cream.jpg',
        price: "$18.00 - $34.00"
      },
      {
        name: "homemade bread",
        type: "Breads, Pastries",
        img: 'img/home-bread.jpg',
        price: "$26.00 - $68.00"
      },
    ]
  },
  mounted: function() {
    document.addEventListener('scroll', this.scrollHandler);
  },

  methods: {
    // carousel on 2 slides of products section
    prev: function() {
      this.slideIndex = this.slideIndex - 2;
      this.slideIndexSliceProd = this.slideIndexSliceProd - 2;

      if(this.slideIndex < 0){
        this.slideIndexSliceProd = this.smallSelection.length;
        this.slideIndex = this.slideIndexSliceProd - 2;
      }
    },

    // carousel on 2 slides of products section
    next: function() {
      this.slideIndex = this.slideIndex + 2;
      this.slideIndexSliceProd = this.slideIndexSliceProd + 2;

      if(this.slideIndexSliceProd > this.smallSelection.length){
        this.slideIndex = 0;
        this.slideIndexSliceProd = 2;
      }

    },

    prevAll: function() {
      this.slideIndex = this.slideIndex - 1;
      this.slideIndexSlice =  this.slideIndexSlice - 1;

      if(this.slideIndex < 0){
        this.slideIndexSlice = this.products.length;
        this.slideIndex = this.slideIndexSlice - 4;
      }
    },

    nextAll: function() {
      this.slideIndex = this.slideIndex + 1;
      this.slideIndexSlice =  this.slideIndexSlice + 1;

      if(this.slideIndexSlice > this.products.length){
        this.slideIndex = 0;
        this.slideIndexSlice = 4;
      }
    },

    backToTop: function() {
      window.scrollTo({
        top: 0,
      })
    },
    scrollHandler: function() {
      if (window.scrollY > 100) {
        this.headerTopSticky = false;
      } else {
        this.headerTopSticky = true;
      }
      if (window.scrollY > 150) {
        this.chevronBackToTop = true;
      } else {
        this.chevronBackToTop = false;
      }


    },
  }

})

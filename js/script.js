var app = new Vue({
  el: '#app',
  data: {
    shoppingItems: 0,

    //index for products carousel
    slideIndexProd: 0,
    slideIndexSliceProd: 2,

    // index for shopping all carousel
    sliceIndexMin: 0,
    sliceIndex: 4,

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
        price: "$18.00 - $32.00",
        selection: true
      },
      {
        name: "strawberry jam cookies",
        type: "Cookies, Pastries",
        img: 'img/strawberry-jam-cookies.jpg',
        price: "$36.00 - $60.00",
        selection: true
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
        price: "$18.00 - $34.00",
        selection: true
      },
      {
        name: "homemade bread",
        type: "Breads, Pastries",
        img: 'img/home-bread.jpg',
        price: "$26.00 - $68.00",
        selection: true
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
    smallSelection: [],
    // piero: 3,
    // franco: -1
  },
  mounted: function() {
    // event listener on scroll
    document.addEventListener('scroll', this.scrollHandler);

    // filtering products items in a small selection
    this.products.forEach((item, i) => {
      if (true) {
        if (item.selection) {
          this.smallSelection.push(item);
        }
      }
    });

  },

  methods: {
    // carousel on 2 slides of products section
    prev: function() {
      this.slideIndexProd = this.slideIndexProd - 2;
      this.slideIndexSliceProd = this.slideIndexSliceProd - 2;

      if(this.slideIndexProd < 0){
        this.slideIndexSliceProd = this.smallSelection.length;
        this.slideIndexProd = this.slideIndexSliceProd - 2;
      }
    },

    // carousel on 2 slides of products section
    next: function() {
      this.slideIndexProd = this.slideIndexProd + 2;
      this.slideIndexSliceProd = this.slideIndexSliceProd + 2;

      if(this.slideIndexSliceProd > this.smallSelection.length){
        this.slideIndexProd = 0;
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

    nextAll: function(index) {
      this.sliceIndexMin = this.sliceIndexMin + 1; //4
      this.sliceIndex =  this.sliceIndex + 1; //8

      if(this.sliceIndex > this.products.length){
        this.sliceIndex = 4;
        this.sliceIndexMin = 0;
      }



      // this.piero ++;
      // this.franco ++;
      // if (this.piero > 10) {
      //   this.franco = -1;
      //   this.piero = 8;
      // }
      // console.log(index);











      //
      // this.slideIndexSlice = this.slideIndexSlice + 4
      //
      //
      // if (this.slideIndexSlice < 8) {
      //   this.slideIndex = this.slideIndex + 4;
      //   this.slideIndexSlice =  this.slideIndexSlice + 4;
      //   this.carouselShoppingAll = this.products.slice(this.slideIndex, this.slideIndexSlice);
      // }
      //
      // if (this.slideIndexSlice == 8) {
      //   this.carouselShoppingAll.concat(this.products);
      //
      // }

      // if (this.slideIndexSlice < this.products.length) {
      //   this.slideIndex = this.slideIndex + 4;
      //   this.slideIndexSlice =  this.slideIndexSlice + 4;
      //   this.carouselShoppingAll = this.products.slice(this.slideIndex, this.slideIndexSlice);
      //
      // } else  {
      //   this.carouselShoppingAll.concat(this.products);
      // }
    },

    backToTop: function() {
      window.scrollTo({
        top: 0,
      })
    },
    scrollHandler: function() {
      if (window.scrollY > 150) {
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

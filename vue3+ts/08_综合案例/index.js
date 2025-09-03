Vue.createApp({
  template: "#my-app",
  data() {
    return {
      books: [
        {
          id: 1,
          name: "《算法导论》",
          date: "2006-09",
          price: 85.0,
          count: 1,
        },
        {
          id: 2,
          name: "《UNIX编程艺术》",
          date: "2006-02",
          price: 59.0,
          count: 1,
        },
        {
          id: 3,
          name: "《编程珠玑》",
          date: "2008-10",
          price: 39.0,
          count: 1,
        },
        {
          id: 4,
          name: "《代码大全》",
          date: "2006-03",
          price: 128.0,
          count: 1,
        },
      ],
    };
  },
  methods: {
    decrement(index) {
      console.log(index);
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeBook(index) {
      this.books.splice(index, 1);
    },
    formatPrice(price) {
      return "￥" + price;
    }
  },
  computed: {
    totalPrice() {
      let finalPrice = 0;
      for (let book of this.books) {
        finalPrice += book.price * book.count;
      }
      return finalPrice;
    },
    filterBooks() {
      return this.books.map((item) => {
        const newItem = Object.assign({}, item);
        // const newItem = { ...item };
        newItem.price = "￥" + item.price;
        return newItem;
      });
    },
  },
}).mount("#app");

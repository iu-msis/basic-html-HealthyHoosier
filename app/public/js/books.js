const BookApp = {
  data() {
    return {
      "books":[],
    }
  },
  
  computed: {},
  
  methods: {
    fetchBookData(b) {
      fetch('/api/books/')
      .then( response => response.json() )
      .then( (responseJson) => {
          console.log(responseJson);
          this.books = responseJson;
        })
      .catch( (err) => {
        console.error(err);
      })
    }
  },
  
  created() {
    this.fetchBookData();
  }
}

Vue.createApp(BookApp).mount('#BookApp');
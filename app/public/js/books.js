const BookApp = {
  data() {
    return {
      "books":[],
      bookForm:{},
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
    },
    postNewBook(evt) {
      console.log("Creating!", this.bookForm);

      fetch('api/books/create.php', {
          method:'POST',
          body: JSON.stringify(this.bookForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.books = json;
          // Reset the form
          this.bookForm = {};
        });
    }
  },
  
  created() {
    this.fetchBookData();
  }
}

Vue.createApp(BookApp).mount('#BookApp');
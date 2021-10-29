const BookApp = {
  data() {
    return {
      "books":[],
      bookForm:{},
    }
  },
  
  computed: {},
  
  methods: {
    // PRETTY DOLLARS
    prettyDollar(n) {
      const d = new Intl.NumberFormat("en-US").format(n);
      return "$ " + d;
    },
    // GET BOOK DATA FOR TABLE
    postBook(evt) {
      if (this.selectedBook === null) {
          this.postNewBook(evt);
      } else {
          this.postEditBook(evt);
      }
    },
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
    // POST A NEW BOOK TO DATABASE
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
    },
    // EDIT A BOOK IN THE DATABASE
    postEditBook(evt) {
      console.log("Updating", this.bookForm);

      fetch('api/books/update.php', {
          method:'POST',
          body: JSON.stringify(this.bookForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.books = json;
          // RESET
          this.resetBookForm();
        });
    },
    // DELETE A BOOK FROM THE DATABASE
    postDeleteBook(o) {
      if (!confirm("Are you sure you want to delete the book"+o.title+"?")) {
        return;
      }
      console.log("Delete", o);
    
      fetch('api/books/delete.php', {
        method:'POST',
        body: JSON.stringify(o),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.books = json;
  
        // RESET THE FORM
        this.resetBookForm();
      });
    },
    // SELECT BOOK TO EDIT
    selectBookToEdit(o) {
      this.selectedBook = o;
      this.bookForm = Object.assign({}, this.selectedBook);
    },
    // RESET THE BOOK FORM
    resetBookForm() {
      this.selectedBook = null;
      this.bookForm = {};
    }
  },
  
  created() {
    this.fetchBookData();
  }
}

Vue.createApp(BookApp).mount('#BookApp');
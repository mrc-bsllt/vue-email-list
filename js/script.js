var app = new Vue (
  {
    el: "#mails_list",
    data: {
      emails: []
    }, //fine data
    methods: {

    }, //fine methods
    mounted: function() {

      for(var i = 0; i < 10; i++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (result) => {
          this.emails.push(result.data.response);
          }
        );
      }

    } //fine mounted

  } //fine vue
);

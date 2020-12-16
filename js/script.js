var app = new Vue (
  {
    el: "#mails_list",
    data: {
      emails: [],
      colors: [
        "#b26f64",
        "#5795dc",
        "#791558",
        "#73c9bd",
        "#9868ac",
        "#9c9d41",
        "#476402",
        "#a73652",
        "#7fce2d",
        "#feb509"
      ]
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

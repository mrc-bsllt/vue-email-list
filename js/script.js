var app = new Vue (
  {
    el: "#mails_list",
    data: {
      emails: [],
      colors: []
    }, //fine data
    methods: {
      colorGenerator: function() {
        var hexadecimalNumber = "#";
        for(var i = 0; i < 6; i++) {
          var number = Math.floor(Math.random()*(9-0+1)+0).toString();
          hexadecimalNumber += number
        };
        return hexadecimalNumber;
      }

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

    }, //fine mounted
    created: function() {
      for (var i = 0; i < 10; i++) {
        var newColor = this.colorGenerator();
        this.colors.push(newColor);
      }
    }

  } //fine vue
);

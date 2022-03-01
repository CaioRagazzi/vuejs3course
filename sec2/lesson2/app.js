const app = Vue.createApp({
  data() {
    return {
      name: '',
      confirmedName: '',
      counter: 0,
    };
  },
  methods: {
    increment(num){
      this.counter += num;
    },
    decrement(num){
      if (this.counter <= 0) return;

      this.counter -= num;
    },
    setName(event){
      this.name = event.target.value;
    },
    submitForm(){
    },
    confirmName(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');

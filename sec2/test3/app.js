const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            isWatching: false
        }
    },
    watch: {
        counter(value) {
            const self = this;
            if (!this.isWatching) {
                this.isWatching = true;
                setInterval(() => {
                    self.counter = 0
                    self.isWatching = false;
                }, 5000);
            }
        }
    },
    computed: {
        getResult() {
            if (this.counter < 37) {
                return 'Not there yet'
            } else if (this.counter === 37) {
                return this.counter
            } else {
                return 'Too much!'
            }
        }
    },
    methods: {
        incremet(number) {
            this.counter += number;
        },
        decrement(number) {
            this.counter -= number;
        }
    }
});

app.mount('#assignment');
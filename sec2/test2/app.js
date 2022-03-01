const app = Vue.createApp({
    data() {
        return {
            nameKeyDown: '',
            nameEnter: '',
            enteredName: ''
        }
    },
    methods: {
        showAlert() {
            alert('Showing alert!')
        },
        setName(event) {
            this.nameKeyDown = event.target.value
        },
        setNameEnter(event) {
            this.nameEnter = event.target.value
        },
        setEnteredName() {
            this.enteredName = this.nameEnter
        }
    }
});

app.mount('#assignment');
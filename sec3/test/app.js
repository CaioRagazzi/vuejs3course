const app = Vue.createApp({
    data() {
        return {
            taskToBeAdded: '',
            taskList: [],
            showList: true
        }
    },
    computed: {
        getCaption() {
            return this.showList ? 'Hide' : 'Show'
        }
    },
    methods: {
        addTask() {
            if (this.taskToBeAdded === '') return;
            this.taskList.push(this.taskToBeAdded);
            this.taskToBeAdded = ''
        },
        toggleList() {
            this.showList = !this.showList
        }
    }
})

app.mount('#assignment')
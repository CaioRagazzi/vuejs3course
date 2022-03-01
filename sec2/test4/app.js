const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            isParagraphVisible: true,
            color: ''
        }
    },
    computed: {
        paragraphCssClass(){
            if (this.isParagraphVisible) {
                return 'visible'
            }
            return 'hidden'
        }
    },
    methods: {
        toggleParagraph(){
            this.isParagraphVisible = !this.isParagraphVisible
        }
    }
});

app.mount('#assignment')
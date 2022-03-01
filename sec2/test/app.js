const app = Vue.createApp({
    data(){
        return {
            name: 'Caio Ragazzi',
            age: 32,
            imageURL: 'https://www.vets4pets.com/siteassets/species/dog/puppy/husky-puppy-on-dog-walk.jpg?w=585&scale=down'
        }
    },
    methods: {
        getRandomNumber(){
            return Math.random();
        }
    }
});

app.mount('#assignment');
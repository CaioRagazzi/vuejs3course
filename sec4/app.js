const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logs: []
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterBarStyles < 0) {
                return { width: this.monsterHealth + '0%' }
            }
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles() {
            if (this.playerBarStyles < 0) {
                return { width: this.playerHealth + '0%' }
            }
            return { width: this.playerHealth + '%' }
        },
        specialAtackDisable() {
            return this.currentRound % 3 !== 0
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++
            const attackValue = this.getRandomNumber(5, 12);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.addLog('player', 'attack', attackValue)
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = this.getRandomNumber(8, 15);
            this.playerHealth = this.playerHealth - attackValue;
            this.addLog('monster', 'attack', attackValue)
        },
        getRandomNumber(min, max) {
            const attackValue = Math.floor(Math.random() * (max - min)) + min;
            return attackValue
        },
        specialAttackMonster() {
            this.currentRound++
            const attackValue = this.getRandomNumber(10, 25);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.addLog('player', 'special attack', attackValue)
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++
            const healValue = this.getRandomNumber(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
                this.addLog('player', 'heal', healValue)
                return;
            }
            this.playerHealth += healValue;
            this.addLog('player', 'heal', healValue)
            this.attackPlayer()
        },
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logs = []
        },
        surrender() {
            this.winner = 'monster';
        },
        addLog(who, what, value) {
            this.logs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount('#game');
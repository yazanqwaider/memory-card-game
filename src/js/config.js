module.exports = {
    env: "production",
    prefixURL: function() {
        return this.env == 'development'? '' : '/memory-card-game';
    }
}
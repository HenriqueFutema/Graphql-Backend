const users = [
    { id: 1, name: 'Henrique', email: 'henrique.futema01@gmail.com' },
    { id: 2, name: 'Test', email: 'test@gmail.com' }

]

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        createUser: () => users[0]
    }
}
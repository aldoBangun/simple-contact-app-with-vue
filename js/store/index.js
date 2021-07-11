const store = Vuex.createStore({
   modules: {},
   state() {
      return {
         contacts: []
      }
   },
   getters: {
      contacts(state) {
         return state.contacts
      }
   },
   mutations: {
      SET_CONTACT(state, payload) {
         state.contacts = payload
      }
   },
   actions: {
      async addContact(context, payload) {
         const { contacts } =context.state;
         
         payload.id = contacts.length + 1
         contacts.push(payload)

         context.commit('SET_CONTACT', contacts)
      }
   }
})

export default store;
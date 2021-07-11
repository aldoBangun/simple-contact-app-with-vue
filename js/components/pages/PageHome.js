export default {
   template: `
      <div class="bg-white p-8 rounded-md shadow-md w-80">
         <h1 class="text-2xl mb-4 pb-4 border-b-2 border-gray-100">Add Contact</h1>
         <form @submit.prevent="addContact">
            <div class="mb-4">
               <label for="name">Name</label>
               <input type="text" class="bg-gray-100 w-full py-1 px-2 rounded-sm" id="name" v-model.trim="name">
            </div>

            <div class="mb-4">
               <label for="phone">Phone</label>
               <input type="text" class="bg-gray-100 w-full py-1 px-2 rounded-sm" id="phone" v-model.trim="phone">
            </div>

            <button type="submit" class="inline-flex items-center mt-4 h-8 min-w-20 px-4 rounded-full text-white bg-green-600 hover:bg-green-700">Add Contact</button>
         </form>
      </div>
      `,
   data() {
      return {
         name: '',
         phone: null
      }
   },
   methods: {
      addContact() {
         const { name, phone } = this
         this.$store.dispatch('addContact', { name, phone })

         this.name = ''
         this.phone = null
      }
   }   
}
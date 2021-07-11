import ContactItem from './ContactItem.js';

const { mapGetters } = Vuex;

export default {
   components: {
      ContactItem
   },
   template: `
      <h1 class="text-4xl font-semibold mb-8"> My Contacts </h1>
      <ul class="grid grid-cols-3 gap-4" v-if="contacts.length">
         <ContactItem 
            v-for="contact in contacts"
            :key="contact.id"
            :id="contact.id"
            :name="contact.name"
            :phone="contact.phone"
         />
      </ul>
      <p v-else>No contacts has been added. <router-link to="/" class="text-blue-500">Add contact</router-link>.</p>   
   `,
   computed: {
      ...mapGetters({
         contacts: 'contacts'
      })
   }
}
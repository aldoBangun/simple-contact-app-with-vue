export default {
   template: `
      <header class="bg-green-600 text-white">
         <nav class="screen-80 flex items-center justify-between h-12 mx-auto">
            <div class="text-xl font-semibold">Vue App</div>
            <ul class="flex items-center gap-4">
               <li>
                  <router-link to="/">Home</router-link>
               </li>
               <li>
                  <router-link to="/contacts">Contacts</router-link>
               </li>
            </ul>
         </nav>
      </header>`,
}
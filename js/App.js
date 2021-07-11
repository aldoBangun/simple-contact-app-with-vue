import TheNavbar from './components/layout/TheNavbar.js';

export default {
   components: {
      TheNavbar
   },
   template: `
      <TheNavbar />
      <div class="screen-80 mx-auto py-8">
         <router-view></router-view>
      </div>
   `
}
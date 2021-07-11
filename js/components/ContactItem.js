export default {
   props: {
      id: {
         type: Number,
         required: true
      },
      name: {
         type: String,
         required: true
      },
      phone: {
         type: String,
         required: true
      }
   },
   template: `
      <li class="bg-green-100 rounded-md py-4 px-6 relative">
         <h3 class="font-semibold"> {{ name }} </h3>
         <p class="text-green-500 text-sm"> {{ phone }} </p>
         <button
            class="
               absolute
               top-1/2
               right-6
               transform
               -translate-y-1/2
               text-red-600
               hover:text-red-700
               flex
               items-center
               justify-center
               rounded-full
               h-10
               w-10
               hover:bg-green-200
            "
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               fill="currentColor"
               class="bi bi-person-x-fill"
               viewBox="0 0 16 16"
            >
               <path
                  fill-rule="evenodd"
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
               />
            </svg>
         </button>
      </li>
   `
}
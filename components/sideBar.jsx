import Link from "next/link"

export const SideBar =()=>{
    return(
<>
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <Link href="/" className="flex items-center pl-2.5 mb-5">
      <svg width="137" height="33" viewBox="0 0 137 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.3965 26.4883V28H21.8164V26.4883H21.9395C22.7715 26.4883 23.3984 26.3477 23.8203 26.0664C24.2422 25.7734 24.4766 25.1582 24.5234 24.2207V4.99023L16.2793 28H14.3281L5.97852 5.06055V23.9043C5.97852 24.959 6.18945 25.6562 6.61133 25.9961C7.0332 26.3242 7.68945 26.4883 8.58008 26.4883H8.68555V28H0.371094V26.4883H0.828125C1.71875 26.4883 2.43359 26.3359 2.97266 26.0312C3.51172 25.7266 3.78125 25.0762 3.78125 24.0801V6.25586C3.78125 5.24805 3.50586 4.5918 2.95508 4.28711C2.4043 3.9707 1.69531 3.8125 0.828125 3.8125H0.371094V2.30078H8.58008L16.0332 22.8848L23.416 2.30078H31.3965V3.8125H30.9395C30.0371 3.8125 29.3164 3.98242 28.7773 4.32227C28.25 4.65039 27.9863 5.3418 27.9863 6.39648V23.9043C27.9863 24.959 28.25 25.6562 28.7773 25.9961C29.3164 26.3242 30.0371 26.4883 30.9395 26.4883H31.3965ZM35.0176 25.8027C35.0176 24.9355 35.2227 24.3145 35.6328 23.9395C36.043 23.5527 36.5938 23.3594 37.2852 23.3594C37.9531 23.3594 38.498 23.5527 38.9199 23.9395C39.3418 24.3145 39.5527 24.9355 39.5527 25.8027C39.5527 26.6582 39.3418 27.2793 38.9199 27.666C38.5098 28.0527 37.9648 28.2461 37.2852 28.2461C36.5938 28.2461 36.043 28.0527 35.6328 27.666C35.2227 27.2793 35.0176 26.6582 35.0176 25.8027ZM65.9023 15.1152C65.9023 19.1348 64.9238 22.2637 62.9668 24.502C61.9941 25.627 60.7754 26.4941 59.3105 27.1035C57.8457 27.7012 56.1348 28 54.1777 28H43.1562V26.4883H43.6133C44.5156 26.4883 45.2305 26.3242 45.7578 25.9961C46.2969 25.6562 46.5664 24.959 46.5664 23.9043V6.25586C46.5664 5.24805 46.291 4.5918 45.7402 4.28711C45.1895 3.9707 44.4805 3.8125 43.6133 3.8125H43.1562V2.30078H54.1777C57.8926 2.30078 60.7754 3.41406 62.8262 5.64062C64.877 7.86719 65.9023 11.0254 65.9023 15.1152ZM50.2051 4.09375V26.1719H53.334C56.1816 26.1719 58.3262 25.2168 59.7676 23.3066C61.1973 21.4199 61.9121 18.6895 61.9121 15.1152C61.9121 11.541 61.1973 8.81055 59.7676 6.92383C58.3496 5.03711 56.2168 4.09375 53.3691 4.09375H50.2051ZM78.3125 28.3516C75.6758 28.3516 73.6309 27.4902 72.1777 25.7676C71.4629 24.9238 70.9121 23.8926 70.5254 22.6738C70.1504 21.4434 69.9629 20.0488 69.9629 18.4902C69.9629 15.127 70.6543 12.5957 72.0371 10.8965C73.4199 9.19727 75.3887 8.34766 77.9434 8.34766C80.3223 8.34766 82.1504 9.06836 83.4277 10.5098C84.0723 11.2246 84.5645 12.1211 84.9043 13.1992C85.2559 14.2773 85.4316 15.5254 85.4316 16.9434V18.5957H73.4434C73.4902 21.1973 73.9707 23.1016 74.8848 24.3086C75.7637 25.4922 77.0703 26.084 78.8047 26.084C79.9414 26.084 80.9668 25.8438 81.8809 25.3633C82.8066 24.8828 83.498 24.2852 83.9551 23.5703C84.1191 23.6406 84.2715 23.7871 84.4121 24.0098C84.5645 24.2324 84.6406 24.4961 84.6406 24.8008C84.6406 25.1641 84.5117 25.5566 84.2539 25.9785C83.9961 26.3887 83.6035 26.7695 83.0762 27.1211C82.5488 27.4727 81.8867 27.7656 81.0898 28C80.3047 28.2344 79.3789 28.3516 78.3125 28.3516ZM77.873 10.2812C76.5371 10.2812 75.5059 10.8262 74.7793 11.916C74.0645 12.9941 73.6426 14.5762 73.5137 16.6621H81.793C81.793 15.7129 81.7227 14.8457 81.582 14.0605C81.4414 13.2754 81.2188 12.6016 80.9141 12.0391C80.6094 11.4766 80.2051 11.043 79.7012 10.7383C79.209 10.4336 78.5996 10.2812 77.873 10.2812ZM87.4883 10.2109H87.3828V8.69922H96.3828V10.2109H95.9258C94.4844 10.2109 93.7637 10.791 93.7637 11.9512C93.7637 12.3027 93.8574 12.7422 94.0449 13.2695L96.4883 20.0723C96.6641 20.541 96.8633 21.1328 97.0859 21.8477C97.3086 22.5625 97.5137 23.2598 97.7012 23.9395C97.8887 24.6074 98.0117 25.123 98.0703 25.4863H98.1934C98.252 25.2285 98.3867 24.8066 98.5977 24.2207C98.8203 23.623 99.0605 22.9844 99.3184 22.3047C99.5762 21.625 99.7988 21.0391 99.9863 20.5469L102.57 13.5332C102.793 12.9707 102.904 12.4551 102.904 11.9863C102.904 10.8027 102.113 10.2109 100.531 10.2109H100.268V8.69922H107.984V10.2109H107.545C106.783 10.2109 106.238 10.4219 105.91 10.8438C105.582 11.2539 105.213 11.9805 104.803 13.0234L99.125 28H95.8379L90.0547 12.127C89.7852 11.4004 89.4688 10.9023 89.1055 10.6328C88.7539 10.3516 88.2148 10.2109 87.4883 10.2109ZM116.369 0.648438H118.461L110.217 32.3594H108.09L116.369 0.648438ZM136.25 14.5V15.7656L120.799 24.0449V21.6367L132.893 15.1504L120.799 8.59375V6.18555L136.25 14.5Z" fill="url(#paint0_linear_2_4)"/>
                  <defs>
                  <linearGradient id="paint0_linear_2_4" x1="4.90625" y1="18.5" x2="188.067" y2="15.784" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1400FF"/>
                  <stop offset="0.494792" stopColor="#2AAFA7" stopOpacity="0.995052"/>
                  <stop offset="0.953125" stopOpacity="0.990469"/>
                  <stop offset="1" stopOpacity="0.99"/>
                  </linearGradient>
                  </defs>
                  </svg>
      </Link>
      <ul className="space-y-2 font-medium">
         <li>
            <a href="/admin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <Link href="/admin/latest_work" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Latest Work</span>
            </Link>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Skills</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

</>

    )
}
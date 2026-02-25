/// <mls fileReference="_102031_/l2/en/collab-messages.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

 @customElement('en--collab-messages-102031')
 export class CollabMessagesEn102031 extends CollabLitElement {
    
     private _goBack() {
         window.history.back();
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 antialiased font-inter min-h-screen flex flex-col">

             <nav class="p-6 border-b border-gray-100 dark:border-gray-900 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
                 <div class="max-w-6xl mx-auto flex justify-between items-center">
                     <div class="flex items-center text-xl font-bold tracking-tight">
                         <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                              alt="C" class="h-8 -mt-1 inline-block align-middle">ollab.codes
                     </div>
                     <button @click="${this._goBack}" class="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline bg-transparent border-none cursor-pointer">Back</button>
                 </div>
             </nav>

             <header class="py-24 px-6 text-center bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-900">
                 <div class="max-w-4xl mx-auto">
                     <h1 class="text-xs font-bold uppercase tracking-[0.4em] text-teal-500 mb-6">Operational Hub</h1>
                     <h2 class="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                         The Unified <span class="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent italic">Pulse</span> of Your Enterprise.
                     </h2>
                     <p class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
                         Move beyond simple chat. Collab Messages is the nervous system where human decisions and AI execution meet to drive your company's daily missions.
                     </p>
                 </div>
             </header>

             <main class="max-w-6xl mx-auto px-6 py-20 font-inter">
                 
                 <div class="grid md:grid-cols-2 gap-16 mb-32 items-center">
                     <div class="order-2 md:order-1">
                         <div class="space-y-10">
                             <div class="flex gap-6 group">
                                 <div class="shrink-0 w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🏢</div>
                                 <div>
                                     <h4 class="text-xl font-bold mb-2 tracking-tight">Cross-Sector Synergy</h4>
                                     <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Align Finance, Sales, and Operations in a single thread. No more silos, just coordinated execution.</p>
                                 </div>
                             </div>
                             <div class="flex gap-6 group">
                                 <div class="shrink-0 w-14 h-14 rounded-2xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🤖</div>
                                 <div>
                                     <h4 class="text-xl font-bold mb-2 tracking-tight">Native AI Integration</h4>
                                     <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Your AI Agents live here. Ask them to analyze reports, trigger workflows, or update project statuses instantly.</p>
                                 </div>
                             </div>
                             <div class="flex gap-6 group">
                                 <div class="shrink-0 w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📈</div>
                                 <div>
                                     <h4 class="text-xl font-bold mb-2 tracking-tight">From Conversation to Action</h4>
                                     <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Every message is a potential trigger for system updates, ensuring your system evolves as you talk.</p>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div class="order-1 md:order-2 bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 dark:border-gray-800 relative">
                         <div class="absolute -top-4 -right-4 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Live Operation</div>
                         <div class="space-y-6">
                             <div class="flex flex-col items-start">
                                 <span class="text-[10px] text-gray-500 mb-1 ml-2 uppercase font-bold tracking-tighter">Operations Lead</span>
                                 <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none text-sm max-w-[85%]">
                                     "Agent, we need to re-prioritize deliveries for Region A. Check the current fleet capacity."
                                 </div>
                             </div>
                             <div class="flex flex-col items-end">
                                 <span class="text-[10px] text-blue-500 mb-1 mr-2 uppercase font-bold tracking-tighter italic">Business Agent (AI)</span>
                                 <div class="bg-blue-600 p-4 rounded-2xl rounded-tr-none text-sm max-w-[85%] text-white shadow-md">
                                     "Analyzing Region A... Fleet is at 85% capacity. I've optimized the routes. Update the manager dashboard?"
                                 </div>
                             </div>
                             <div class="flex flex-col items-start">
                                 <span class="text-[10px] text-gray-500 mb-1 ml-2 uppercase font-bold tracking-tighter">Finance Director</span>
                                 <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none text-sm max-w-[85%]">
                                     "Approved. Agent, also recalculate the fuel efficiency projection for this route change."
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

                 <div class="text-center mb-16">
                     <h3 class="text-3xl font-black mb-4 tracking-tighter uppercase">One Tool. Every Department.</h3>
                     <p class="text-gray-500 dark:text-gray-400">Collab Messages breaks the technical barrier for everyone.</p>
                 </div>

                 <div class="grid md:grid-cols-3 gap-6 mb-32 text-inter">
                     <div class="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition">
                         <h5 class="font-bold text-blue-600 mb-2 uppercase text-xs tracking-widest">Management</h5>
                         <p class="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">"AI, give me a summary of today's operational profitability."</p>
                     </div>
                     <div class="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition">
                         <h5 class="font-bold text-teal-600 mb-2 uppercase text-xs tracking-widest">Customer Support</h5>
                         <p class="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">"Agent, check if this client is eligible for a priority refund based on their history."</p>
                     </div>
                     <div class="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition">
                         <h5 class="font-bold text-purple-600 mb-2 uppercase text-xs tracking-widest">Sales Team</h5>
                         <p class="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">"AI, prepare a custom quote for Project Z using the latest margin rules."</p>
                     </div>
                 </div>

                 <div class="bg-gray-900 dark:bg-black rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                     <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f633,transparent)] pointer-events-none"></div>
                     <h3 class="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter italic relative z-10">Transform Dialogue into <span class="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">Execution.</span></h3>
                     <p class="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
                         Ready to sync your entire organization? Join the Collab Messages Alpha and experience the future of operational communication.
                     </p>
                     <button class="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-bold text-xl transition shadow-xl animate-pulse relative z-10">
                         Join the Waitlist Now
                     </button>
                 </div>
             </main>

             <footer class="py-12 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 font-inter mt-auto">
                 <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">
                     <p>&copy; 2026 Collab Engine Inc.</p>
                     <div class="flex gap-8">
                         <a href="./terms.html" class="hover:text-blue-600 transition">Terms</a>
                         <a href="./policy.html" class="hover:text-blue-600 transition">Privacy</a>
                     </div>
                 </div>
             </footer>
         </div>
         `;
     }
 }
/// <mls fileReference="_102031_/l2/en/landingpage.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

 @customElement('en--landingpage-102031')
 export class LandingpageEn102031 extends CollabLitElement {
    
     private _handleWaitlist() {
         const params = {
             type: 'iframeL7',
             action: 'join-waitlist'
         };
         window.parent.postMessage(params, '*');
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 antialiased font-inter">

             <header class="min-h-screen flex flex-col justify-center items-center text-center text-white px-4 relative overflow-hidden"
                     style="background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85)), url('https://collab.codes/www/20260203090434/pt/l3/_100529_/images/startl7.avif'); background-size: cover; background-position: center;">
                 
                 <h1 class="text-5xl md:text-8xl font-black mb-6 flex items-center justify-center tracking-tighter">
                     <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                          alt="C" class="h-16 md:h-24 ">ollab.codes
                 </h1>
                 
                 <p class="text-xl md:text-3xl max-w-3xl font-light mb-10 leading-relaxed italic">
                     The Next Generation of Enterprise Systems. Define your mission and let AI deliver the custom solution your business demands.
                 </p>
                 
                 <div class="flex flex-col md:flex-row gap-6">
                     <button @click="${this._handleWaitlist}" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold transition shadow-2xl animate-pulse text-xl">
                         Alpha System - Join the Waitlist
                     </button>
                     <a href="#features" class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-bold transition text-xl">
                         Explore Features
                     </a>
                 </div>
             </header>

             <section id="features" class="py-32 px-6 max-w-7xl mx-auto">
                 <div class="grid md:grid-cols-4 gap-10">
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2">
                         <div class="text-blue-500 mb-6 text-4xl">🎯</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight">Mission-Driven</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                             You or your analyst define the mission; our platform builds the custom application your business needs.
                         </p>
                     </div>
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2 text-inter">
                         <div class="text-blue-500 mb-6 text-4xl">🤖</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight">AI in Execution</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-inter">
                             Embed AI agents directly into your final app to automate processes and analyze data in real-time.
                         </p>
                     </div>
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2">
                         <div class="text-blue-500 mb-6 text-4xl">☁️</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight">No SaaS Fees</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                             Stop paying for licenses. Pay only for hosting on providers like AWS, with centralized management.
                         </p>
                     </div>
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2">
                         <div class="text-blue-500 mb-6 text-4xl">🧩</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight">Custom Agents</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                             Create specific agents for every department—ensuring efficiency across your entire enterprise.
                         </p>
                     </div>
                 </div>
             </section>

             <section class="py-32 bg-gray-900 dark:bg-black text-white overflow-hidden relative">
                 <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                     <div>
                         <h2 class="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic text-inter">Collab Messages</h2>
                         <p class="text-gray-400 text-xl mb-10 leading-relaxed font-light">
                             The universal pulse of your company. A unified hub where every department — from Finance to Operations — interacts with human teams and AI agents to drive daily business execution.
                         </p>
                         <ul class="space-y-6">
                             <li class="flex items-start gap-4">
                                 <span class="bg-blue-600 rounded-full p-1.5 text-[10px] mt-1">✓</span> 
                                 <span class="text-gray-200">Align management, sales, and support in one seamless interface.</span>
                             </li>
                             <li class="flex items-start gap-4">
                                 <span class="bg-blue-600 rounded-full p-1.5 text-[10px] mt-1">✓</span> 
                                 <span class="text-gray-200">Direct AI agents to analyze complex data or trigger workflows via chat.</span>
                             </li>
                             <li class="flex items-start gap-4">
                                 <span class="bg-blue-600 rounded-full p-1.5 text-[10px] mt-1">✓</span> 
                                 <span class="text-gray-200">Total operational visibility for stakeholders on every "mission" in progress.</span>
                             </li>
                         </ul>
                     </div>

                     <div class="bg-gray-800 dark:bg-gray-900 rounded-[3rem] p-10 shadow-2xl border border-gray-700 relative">
                         <div class="absolute -top-4 -right-4 bg-blue-500 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Active Mission</div>
                         <div class="space-y-8">
                             <div class="flex flex-col items-start">
                                 <span class="text-[10px] text-gray-500 mb-2 ml-2 uppercase font-bold tracking-widest text-inter">Operations Manager</span>
                                 <div class="bg-gray-700 dark:bg-gray-800 p-5 rounded-3xl rounded-tl-none text-sm max-w-[90%] leading-relaxed">
                                     "AI, we have a peak in demand for Project X. Analyze our current resource allocation and suggest an optimization to avoid delays."
                                 </div>
                             </div>
                             <div class="flex flex-col items-end">
                                 <span class="text-[10px] text-blue-400 mb-2 mr-2 uppercase font-bold tracking-widest italic">Business Agent (AI)</span>
                                 <div class="bg-blue-600 p-5 rounded-3xl rounded-tr-none text-sm max-w-[90%] text-white shadow-xl leading-relaxed">
                                     "Analysis complete. I've identified 3 idle tasks in the Support sector that can be reallocated. Should I notify the leads and update the timeline?"
                                 </div>
                             </div>
                             <div class="flex flex-col items-start">
                                 <span class="text-[10px] text-gray-500 mb-2 ml-2 uppercase font-bold tracking-widest">Finance Director</span>
                                 <div class="bg-gray-700 dark:bg-gray-800 p-5 rounded-3xl rounded-tl-none text-sm max-w-[90%] leading-relaxed">
                                     "Approved. Also, generate the profitability forecast based on this new allocation for the next meeting."
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>

             <section class="py-32 px-6 max-w-5xl mx-auto">
                 <h2 class="text-4xl font-black text-center mb-16 tracking-tighter uppercase italic">The Collab Advantage</h2>
                 <div class="overflow-x-auto rounded-[2.5rem] border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
                     <table class="w-full text-left bg-white dark:bg-gray-900">
                         <thead>
                             <tr class="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                                 <th class="p-8 font-bold uppercase text-xs tracking-[0.2em]">Strategy</th>
                                 <th class="p-8 font-bold uppercase text-xs tracking-[0.2em] text-gray-400">Traditional SaaS</th>
                                 <th class="p-8 font-bold uppercase text-xs tracking-[0.2em] text-blue-500">Collab.codes</th>
                             </tr>
                         </thead>
                         <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                             <tr>
                                 <td class="p-8 font-bold">Ownership</td>
                                 <td class="p-8 text-gray-500 text-sm">Locked into vendor fees & cloud.</td>
                                 <td class="p-8 font-semibold text-green-600 dark:text-green-500">Your cloud, your data, your rules.</td>
                             </tr>
                             <tr>
                                 <td class="p-8 font-bold">Cost Model</td>
                                 <td class="p-8 text-gray-500 text-sm">Expensive monthly per-user licenses.</td>
                                 <td class="p-8 font-semibold text-green-600 dark:text-green-500">Direct cloud hosting costs only.</td>
                             </tr>
                             <tr>
                                 <td class="p-8 font-bold">Velocity</td>
                                 <td class="p-8 text-gray-500 text-sm">Rigid templates or slow coding.</td>
                                 <td class="p-8 font-black text-blue-600 text-lg italic tracking-tight underline decoration-blue-500/30 underline-offset-4">Define mission, get results.</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
             </section>

             <section class="py-32 bg-blue-600 text-white text-center px-6 relative overflow-hidden">
                 <div class="max-w-4xl mx-auto relative z-10">
                     <h2 class="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">Join the Transformation.</h2>
                     <p class="text-xl md:text-2xl text-blue-100 mb-12 italic leading-relaxed">
                         "You or your analyst define the mission; our platform develops the custom app for your needs."
                     </p>
                     <button @click="${this._handleWaitlist}" class="bg-white text-blue-600 px-16 py-6 rounded-full font-black text-2xl hover:bg-gray-100 transition shadow-2xl uppercase tracking-widest">
                         Join the Alpha Now
                     </button>
                 </div>
             </section>

             <footer class="py-16 text-center text-gray-400 dark:text-gray-600 text-[10px] border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 uppercase tracking-[0.4em] font-semibold">
                 <p class="mb-2">Collab.codes - Mission-Driven Enterprise Intelligence</p>
                 <p>&copy; 2026 Collab Engine Inc.</p>
             </footer>

         </div>
         `;
     }
 }
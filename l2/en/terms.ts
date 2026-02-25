/// <mls fileReference="_102031_/l2/en/terms.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

 @customElement('en--terms-102031')
 export class TermsEn102031 extends CollabLitElement {
    
     private _goBack() {
         window.history.back();
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-300 transition-colors duration-300 antialiased min-h-screen font-inter">

             <nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                 <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                     <button @click="${this._goBack}" class="flex items-center text-xl font-bold text-gray-900 dark:text-white bg-transparent border-none cursor-pointer p-0">
                         <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                              alt="C" class="h-8 -mt-2.5 inline-block align-middle">ollab.codes
                     </button>
                     <button @click="${this._goBack}" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline bg-transparent border-none cursor-pointer">Back</button>
                 </div>
             </nav>

             <main class="max-w-4xl mx-auto px-6 py-12 md:py-20">
                 <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
                     
                     <header class="border-b border-gray-100 dark:border-gray-800 pb-8 mb-8">
                         <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight text-inter">Terms of Service</h1>
                         <p class="text-sm text-gray-500 dark:text-gray-400">Last updated: February 20, 2026</p>
                     </header>

                     <article class="prose prose-blue dark:prose-invert max-w-none space-y-8 text-inter">
                         
                         <section>
                             <p class="leading-relaxed text-lg">
                                 These Terms of Service ("Terms") govern your use of the Collab platform operated by <strong>Collab Engine Inc.</strong> By accessing or using the platform, you agree to be bound by these Terms.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">1. Description of Service</h2>
                             <p class="leading-relaxed text-inter">
                                 Collab is a software platform that enables users to design, build, and operate applications using artificial intelligence. The platform is provided "as is" and may evolve over time as we introduce new features and improvements.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">2. Eligibility</h2>
                             <p class="leading-relaxed">
                                 You must use a valid account from Google, GitHub, or GitLab to access the platform. You are solely responsible for maintaining the security of your external account and for any activity that occurs under your profile.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">3. Acceptable Use</h2>
                             <p class="mb-4">You agree not to:</p>
                             <ul class="list-disc pl-6 space-y-3 leading-relaxed">
                                 <li>Use the platform for any illegal or unauthorized activities.</li>
                                 <li>Attempt to gain unauthorized access to our systems or other users' accounts.</li>
                                 <li>Interfere with or disrupt the operation of the platform.</li>
                                 <li>Abuse, threaten, or disrupt the service for other users.</li>
                             </ul>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">4. Intellectual Property</h2>
                             <p class="mb-6 leading-relaxed">The Collab platform, including its software, design, brand assets, and original content, is the exclusive property of <strong>Collab Engine Inc.</strong></p>
                             <div class="p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl text-green-800 dark:text-green-300 border border-green-100 dark:border-green-800/30 flex items-start gap-4">
                                 <span class="text-2xl">💡</span>
                                 <div>
                                    <p class="font-bold mb-1 uppercase text-xs tracking-wider">User Ownership</p>
                                    <p class="italic">You retain full ownership of any code, applications, or content you create using the platform's tools.</p>
                                 </div>
                             </div>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">5. Account Termination</h2>
                             <p class="leading-relaxed">
                                 We reserve the right to suspend or terminate your access if you violate these Terms or misuse the platform in a way that harms the service. You may stop using the platform and request account deletion at any time.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">6. Disclaimer of Warranties</h2>
                             <p class="uppercase text-[10px] font-black tracking-[0.2em] text-gray-500 mb-2">Legal Disclaimer</p>
                             <p class="leading-relaxed">
                                 The platform is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">7. Limitation of Liability</h2>
                             <p class="leading-relaxed text-inter">
                                 To the maximum extent permitted by law, Collab Engine Inc. shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use the platform.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">8. Changes to Terms</h2>
                             <p class="leading-relaxed">
                                 We may update these Terms from time to time to reflect changes in our service or legal requirements. Continued use of the platform after updates constitutes your acceptance of the revised Terms.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">9. Governing Law</h2>
                             <p class="leading-relaxed text-inter">
                                 These Terms are governed by and construed in accordance with the laws of the <strong>State of Delaware, United States</strong>, without regard to its conflict of law principles.
                             </p>
                         </section>

                         <section class="border-t border-gray-100 dark:border-gray-800 pt-10 mt-12 text-inter">
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">10. Contact</h2>
                             <div class="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6 text-inter">
                                 <div>
                                     <p class="font-bold text-xl text-gray-900 dark:text-white mb-1">Collab Engine Inc.</p>
                                     <p class="text-blue-600 dark:text-blue-400 font-medium">legal@collab.codes</p>
                                 </div>
                                 <button class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                                     Official Website
                                 </button>
                             </div>
                         </section>

                     </article>
                 </div>
             </main>

             <footer class="py-12 text-center text-gray-400 dark:text-gray-600 text-xs border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 font-inter">
                 <p>&copy; 2026 Collab Engine Inc. All rights reserved.</p>
             </footer>

         </div>
         `;
     }
 }
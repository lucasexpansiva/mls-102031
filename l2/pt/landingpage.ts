/// <mls fileReference="_102031_/l2/pt/landingpage.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

 @customElement('pt--landingpage-102031')
 export class LandingpagePt102031 extends CollabLitElement {

    
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
                 
                 <p class="text-xl md:text-3xl max-w-3xl font-light mb-10 leading-relaxed italic text-inter">
                     A Próxima Geração de Sistemas Corporativos. Defina sua missão e deixe a IA entregar a solução personalizada que seu negócio exige.
                 </p>
                 
                 <div class="flex flex-col md:flex-row gap-6">
                     <button @click="${this._handleWaitlist}" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold transition shadow-2xl animate-pulse text-xl">
                         Sistema Alpha - Entre na Lista
                     </button>
                     <a href="#features" class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-bold transition text-xl">
                         Explorar Recursos
                     </a>
                 </div>
             </header>

             <section id="features" class="py-32 px-6 max-w-7xl mx-auto">
                 <div class="grid md:grid-cols-4 gap-10">
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2">
                         <div class="text-blue-500 mb-6 text-4xl">🎯</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight">Focado em Missões</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                             Você ou seu analista definem a missão; nossa plataforma constrói a aplicação personalizada que seu negócio precisa.
                         </p>
                     </div>
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2">
                         <div class="text-blue-500 mb-6 text-4xl">🤖</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight text-inter">IA em Execução</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                             Incorpore agentes de IA diretamente em seu app final para automatizar processos e analisar dados em tempo real.
                         </p>
                     </div>
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2">
                         <div class="text-blue-500 mb-6 text-4xl">☁️</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight">Sem Taxas de SaaS</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                             Pare de pagar por licenças. Pague apenas pela hospedagem em provedores como AWS, com gestão centralizada.
                         </p>
                     </div>
                     <div class="bg-white dark:bg-gray-900 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2">
                         <div class="text-blue-500 mb-6 text-4xl">🧩</div>
                         <h3 class="text-xl font-bold mb-4 tracking-tight">Agentes Customizados</h3>
                         <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                             Crie agentes específicos para cada departamento — garantindo eficiência em toda a sua empresa.
                         </p>
                     </div>
                 </div>
             </section>

             <section class="py-32 bg-gray-900 dark:bg-black text-white overflow-hidden relative">
                 <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                     <div>
                         <h2 class="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic text-inter text-white">Collab Messages</h2>
                         <p class="text-gray-400 text-xl mb-10 leading-relaxed font-light">
                             O pulso unificado da sua empresa. Um hub onde cada departamento — do Financeiro às Operações — interage com equipes humanas e agentes de IA para impulsionar a execução.
                         </p>
                         <ul class="space-y-6">
                             <li class="flex items-start gap-4 text-inter">
                                 <span class="bg-blue-600 rounded-full p-1.5 text-[10px] mt-1 font-bold">✓</span> 
                                 <span class="text-gray-200">Alinhe gestão, vendas e suporte em uma interface única e fluida.</span>
                             </li>
                             <li class="flex items-start gap-4 text-inter">
                                 <span class="bg-blue-600 rounded-full p-1.5 text-[10px] mt-1 font-bold">✓</span> 
                                 <span class="text-gray-200">Direcione agentes de IA para analisar dados complexos ou disparar fluxos via chat.</span>
                             </li>
                             <li class="flex items-start gap-4 text-inter">
                                 <span class="bg-blue-600 rounded-full p-1.5 text-[10px] mt-1 font-bold">✓</span> 
                                 <span class="text-gray-200">Visibilidade total para stakeholders em cada "missão" em andamento.</span>
                             </li>
                         </ul>
                     </div>

                     <div class="bg-gray-800 dark:bg-gray-900 rounded-[3rem] p-10 shadow-2xl border border-gray-700 relative">
                         <div class="absolute -top-4 -right-4 bg-blue-500 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest text-inter">Missão Ativa</div>
                         <div class="space-y-8 text-inter">
                             <div class="flex flex-col items-start">
                                 <span class="text-[10px] text-gray-500 mb-2 ml-2 uppercase font-bold tracking-widest text-inter">Gerente de Operações</span>
                                 <div class="bg-gray-700 dark:bg-gray-800 p-5 rounded-3xl rounded-tl-none text-sm max-w-[90%] leading-relaxed">
                                     "IA, temos um pico de demanda no Projeto X. Analise nossa alocação atual e sugira uma otimização."
                                 </div>
                             </div>
                             <div class="flex flex-col items-end text-inter">
                                 <span class="text-[10px] text-blue-400 mb-2 mr-2 uppercase font-bold tracking-widest italic font-inter">Agente de Negócios (IA)</span>
                                 <div class="bg-blue-600 p-5 rounded-3xl rounded-tr-none text-sm max-w-[90%] text-white shadow-xl leading-relaxed">
                                     "Análise completa. Identifiquei 3 tarefas ociosas no setor de Suporte que podem ser realocadas. Devo notificar os líderes?"
                                 </div>
                             </div>
                             <div class="flex flex-col items-start text-inter text-gray-100">
                                 <span class="text-[10px] text-gray-500 mb-2 ml-2 uppercase font-bold tracking-widest">Diretor Financeiro</span>
                                 <div class="bg-gray-700 dark:bg-gray-800 p-5 rounded-3xl rounded-tl-none text-sm max-w-[90%] leading-relaxed text-inter">
                                     "Aprovado. Agente, gere também a previsão de lucratividade baseada nesta nova alocação."
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>

             <section class="py-32 px-6 max-w-5xl mx-auto">
                 <h2 class="text-4xl font-black text-center mb-16 tracking-tighter uppercase italic text-inter">A Vantagem Collab</h2>
                 <div class="overflow-x-auto rounded-[2.5rem] border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
                     <table class="w-full text-left bg-white dark:bg-gray-900">
                         <thead>
                             <tr class="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                                 <th class="p-8 font-bold uppercase text-xs tracking-[0.2em] text-inter">Estratégia</th>
                                 <th class="p-8 font-bold uppercase text-xs tracking-[0.2em] text-gray-400">SaaS Tradicional</th>
                                 <th class="p-8 font-bold uppercase text-xs tracking-[0.2em] text-blue-500">Collab.codes</th>
                             </tr>
                         </thead>
                         <tbody class="divide-y divide-gray-100 dark:divide-gray-800 text-inter">
                             <tr>
                                 <td class="p-8 font-bold">Propriedade</td>
                                 <td class="p-8 text-gray-500 text-sm">Preso a licenças e nuvem do fornecedor.</td>
                                 <td class="p-8 font-semibold text-green-600 dark:text-green-500">Sua nuvem, seus dados, suas regras.</td>
                             </tr>
                             <tr>
                                 <td class="p-8 font-bold">Modelo de Custo</td>
                                 <td class="p-8 text-gray-500 text-sm">Licenças mensais caras por usuário.</td>
                                 <td class="p-8 font-semibold text-green-600 dark:text-green-500">Apenas custo direto de hospedagem.</td>
                             </tr>
                             <tr>
                                 <td class="p-8 font-bold">Velocidade</td>
                                 <td class="p-8 text-gray-500 text-sm">Templates rígidos ou código lento.</td>
                                 <td class="p-8 font-black text-blue-600 text-lg italic tracking-tight underline decoration-blue-500/30 underline-offset-4">Defina a missão, receba a app.</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
             </section>

             <section class="py-32 bg-blue-600 text-white text-center px-6 relative overflow-hidden">
                 <div class="max-w-4xl mx-auto relative z-10">
                     <h2 class="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">Lidere a Transformação.</h2>
                     <p class="text-xl md:text-2xl text-blue-100 mb-12 italic leading-relaxed">
                         "Você ou seu analista definem a missão; nossa plataforma desenvolve o app para suas necessidades."
                     </p>
                     <button @click="${this._handleWaitlist}" class="bg-white text-blue-600 px-16 py-6 rounded-full font-black text-2xl hover:bg-gray-100 transition shadow-2xl uppercase tracking-widest">
                         Entrar no Alpha Agora
                     </button>
                 </div>
             </section>

             <footer class="py-16 text-center text-gray-400 dark:text-gray-600 text-[10px] border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 uppercase tracking-[0.4em] font-semibold">
                 <p class="mb-2">Collab.codes - Inteligência Corporativa Focada em Missões</p>
                 <p>&copy; 2026 Collab Engine Inc.</p>
             </footer>

         </div>
         `;
     }
 }
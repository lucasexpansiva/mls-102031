/// <mls fileReference="_102031_/l2/pt/terms.ts" enhancement="_102020_enhancementAura"/>

 import { html } from 'lit'; 
 import { customElement } from 'lit/decorators.js';
 import { CollabLitElement } from '/_100554_/l2/collabLitElement.js';

 @customElement('pt--terms-102031')
 export class TermsPt102031 extends CollabLitElement {
    
     private _goBack() {
         window.history.back();
     }

     render() {
         return html`
         <div class="bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-300 transition-colors duration-300 antialiased min-h-screen font-inter">

             <nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 font-inter">
                 <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center text-inter">
                     <button @click="${this._goBack}" class="flex items-center text-xl font-bold text-gray-900 dark:text-white bg-transparent border-none cursor-pointer p-0">
                         <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNTYiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQyODVGNCI+QzwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0VBNDMzNSI+YzwvdGV4dD4KPC9zdmc+Cg==" 
                              alt="C" class="h-8 -mt-2.5 inline-block align-middle">ollab.codes
                     </button>
                     <button @click="${this._goBack}" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline bg-transparent border-none cursor-pointer">Voltar</button>
                 </div>
             </nav>

             <main class="max-w-4xl mx-auto px-6 py-12 md:py-20">
                 <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800 font-inter">
                     
                     <header class="border-b border-gray-100 dark:border-gray-800 pb-8 mb-8">
                         <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Termos de Serviço</h1>
                         <p class="text-sm text-gray-500 dark:text-gray-400">Última atualização: 20 de fevereiro de 2026</p>
                     </header>

                     <article class="prose prose-blue dark:prose-invert max-w-none space-y-8 text-inter">
                         
                         <section>
                             <p class="leading-relaxed text-lg">
                                 Estes Termos de Serviço ("Termos") regem o uso da plataforma Collab operada pela <strong>Collab Engine Inc.</strong> Ao acessar ou usar a plataforma, você concorda em cumprir estes Termos.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">1. Descrição do Serviço</h2>
                             <p class="leading-relaxed">
                                 O Collab é uma plataforma de software que permite aos usuários projetar, construir e operar aplicações usando inteligência artificial. A plataforma é fornecida "como está" e pode evoluir ao longo do tempo à medida que introduzimos novos recursos e melhorias.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">2. Elegibilidade</h2>
                             <p class="leading-relaxed">
                                 Você deve usar uma conta válida do Google, GitHub ou GitLab para acessar a plataforma. Você é o único responsável por manter a segurança de sua conta externa e por qualquer atividade que ocorra sob seu perfil.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">3. Uso Aceitável</h2>
                             <p class="mb-4">Você concorda em não:</p>
                             <ul class="list-disc pl-6 space-y-3 leading-relaxed">
                                 <li>Usar a plataforma para quaisquer atividades ilegais ou não autorizadas.</li>
                                 <li>Tentar obter acesso não autorizado aos nossos sistemas ou contas de outros usuários.</li>
                                 <li>Interferir ou interromper a operação da plataforma.</li>
                                 <li>Abusar, ameaçar ou interromper o serviço para outros usuários.</li>
                             </ul>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">4. Propriedade Intelectual</h2>
                             <p class="mb-6 leading-relaxed">A plataforma Collab, incluindo seu software, design, ativos de marca e conteúdo original, é de propriedade exclusiva da <strong>Collab Engine Inc.</strong></p>
                             <div class="p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl text-green-800 dark:text-green-300 border border-green-100 dark:border-green-800/30 flex items-start gap-4">
                                 <span class="text-2xl text-inter">💡</span>
                                 <div>
                                    <p class="font-bold mb-1 uppercase text-xs tracking-wider">Propriedade do Usuário</p>
                                    <p class="italic">Você retém a propriedade total de qualquer código, aplicação ou conteúdo que criar usando as ferramentas da plataforma.</p>
                                 </div>
                             </div>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">5. Encerramento de Conta</h2>
                             <p class="leading-relaxed">
                                 Reservamo-nos o direito de suspender ou encerrar seu acesso se você violar estes Termos ou usar a plataforma de forma indevida que prejudique o serviço. Você pode parar de usar a plataforma e solicitar a exclusão da conta a qualquer momento.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">6. Isenção de Garantias</h2>
                             <p class="uppercase text-[10px] font-black tracking-[0.2em] text-gray-500 mb-2 font-inter">Aviso Legal</p>
                             <p class="leading-relaxed">
                                 A plataforma é fornecida "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que o serviço será ininterrupto, seguro ou livre de erros.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">7. Limitação de Responsabilidade</h2>
                             <p class="leading-relaxed">
                                 Na extensão máxima permitida por lei, a Collab Engine Inc. não será responsável por quaisquer danos indiretos, incidentais ou consequenciais decorrentes do uso ou da incapacidade de usar a plataforma.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">8. Alterações nos Termos</h2>
                             <p class="leading-relaxed">
                                 Podemos atualizar estes Termos periodicamente para refletir mudanças em nosso serviço ou requisitos legais. O uso continuado da plataforma após as atualizações constitui sua aceitação dos Termos revisados.
                             </p>
                         </section>

                         <section>
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight text-inter">9. Lei Regente</h2>
                             <p class="leading-relaxed">
                                 Estes Termos são regidos e interpretados de acordo com as leis do <strong>Estado de Delaware, Estados Unidos</strong>, sem levar em conta seus princípios de conflito de leis.
                             </p>
                         </section>

                         <section class="border-t border-gray-100 dark:border-gray-800 pt-10 mt-12">
                             <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">10. Contato</h2>
                             <div class="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6 text-inter">
                                 <div>
                                     <p class="font-bold text-xl text-gray-900 dark:text-white mb-1">Collab Engine Inc.</p>
                                     <p class="text-blue-600 dark:text-blue-400 font-medium">legal@collab.codes</p>
                                 </div>
                                 <button class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                                     Site Oficial
                                 </button>
                             </div>
                         </section>

                     </article>
                 </div>
             </main>

             <footer class="py-12 text-center text-gray-400 dark:text-gray-600 text-xs border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950">
                 <p>&copy; 2026 Collab Engine Inc. Todos os direitos reservados.</p>
             </footer>

         </div>
         `;
     }
 }
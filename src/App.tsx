/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Shield, Lock, Eye, Users, Bell, Mail, ExternalLink, ChevronRight, Info } from "lucide-react";

export default function App() {
  const lastUpdated = "13 de Abril de 2024";
  const appName = "Busca Vagas";
  const developerName = "Desempenho Digital";

  const sections = [
    {
      id: "intro",
      title: "Introdução",
      icon: <Info className="w-5 h-5 text-blue-600" />,
      content: (
        <p>
          Esta página é usada para informar os visitantes sobre nossas políticas de coleta, uso e divulgação de Informações Pessoais, caso alguém decida usar nosso Serviço. Se você optar por usar nosso Serviço, concorda com a coleta e o uso de informações em relação a esta política.
        </p>
      ),
    },
    {
      id: "collection",
      title: "Coleta e Uso de Informações",
      icon: <Eye className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <p>
            Para uma melhor experiência ao usar nosso Serviço, podemos solicitar que você nos forneça certas informações de identificação pessoal. As informações que solicitamos serão retidas por nós e usadas conforme descrito nesta política de privacidade.
          </p>
          <p>
            O aplicativo utiliza serviços de terceiros que podem coletar informações usadas para identificá-lo. Link para a política de privacidade dos provedores de serviços de terceiros usados pelo aplicativo:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a 
                href="https://www.google.com/policies/privacy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                Google Play Services <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a 
                href="https://support.google.com/admob/answer/6128543?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                AdMob <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "logdata",
      title: "Dados de Log",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      content: (
        <p>
          Queremos informar que sempre que você utiliza nosso Serviço, em caso de erro no aplicativo, coletamos dados e informações (através de produtos de terceiros) no seu telefone chamados Dados de Log. Esses Dados de Log podem incluir informações como o endereço IP do seu dispositivo, nome do dispositivo, versão do sistema operacional, a configuração do aplicativo ao utilizar nosso Serviço, a hora e data do seu uso do Serviço e outras estatísticas.
        </p>
      ),
    },
    {
      id: "cookies",
      title: "Cookies",
      icon: <Bell className="w-5 h-5 text-blue-600" />,
      content: (
        <p>
          Cookies são arquivos com uma pequena quantidade de dados que são comumente usados como identificadores exclusivos anônimos. Eles são enviados para o seu navegador a partir dos sites que você visita e são armazenados na memória interna do seu dispositivo. Este Serviço não usa esses "cookies" explicitamente. No entanto, o aplicativo pode usar código de terceiros e bibliotecas que usam "cookies" para coletar informações e melhorar seus serviços.
        </p>
      ),
    },
    {
      id: "security",
      title: "Segurança",
      icon: <Lock className="w-5 h-5 text-blue-600" />,
      content: (
        <p>
          Valorizamos sua confiança em nos fornecer suas Informações Pessoais, portanto, estamos nos esforçando para usar meios comercialmente aceitáveis de protegê-las. Mas lembre-se de que nenhum método de transmissão pela internet ou método de armazenamento eletrônico é 100% seguro e confiável, e não podemos garantir sua segurança absoluta.
        </p>
      ),
    },
    {
      id: "children",
      title: "Privacidade das Crianças",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      content: (
        <p>
          Estes Serviços não se dirigem a menores de 13 anos. Não coletamos intencionalmente informações de identificação pessoal de crianças menores de 13 anos. No caso de descobrirmos que uma criança menor de 13 anos nos forneceu informações pessoais, as excluiremos imediatamente de nossos servidores.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contato",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      content: (
        <p>
          Se você tiver alguma dúvida ou sugestão sobre nossa Política de Privacidade, não hesite em nos contatar em: 
          <span className="font-semibold ml-1">contato@desempenhodigital.com.br</span>
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <Shield className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">{appName}</h1>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Por {developerName}</p>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-xs text-slate-400">Última atualização</p>
            <p className="text-sm font-medium text-slate-600">{lastUpdated}</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Política de Privacidade</h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Sua privacidade é importante para nós. Esta política explica como o aplicativo <span className="font-semibold text-slate-900">{appName}</span> lida com seus dados.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{section.title}</h3>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} {developerName}. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com foco na transparência e segurança do usuário.</p>
        </footer>
      </main>
    </div>
  );
}

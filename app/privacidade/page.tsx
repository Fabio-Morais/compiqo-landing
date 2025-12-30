import { Metadata } from "next";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Compiqo",
  description:
    "Política de privacidade da plataforma Compiqo. Saiba como protegemos e tratamos os seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Compiqo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-heading font-bold text-xl">Compiqo</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
          Política de Privacidade
        </h1>
        <p className="text-muted-foreground mb-8">
          Última actualização: {new Date().toLocaleDateString("pt-PT")}
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Compiqo ("nós", "nosso" ou "plataforma") está comprometida em
              proteger a privacidade dos seus utilizadores. Esta Política de
              Privacidade explica como recolhemos, utilizamos, armazenamos e
              protegemos os seus dados pessoais em conformidade com o Regulamento
              Geral sobre a Proteção de Dados (RGPD) e a Lei de Proteção de Dados
              Pessoais portuguesa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Responsável pelo Tratamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              O responsável pelo tratamento dos seus dados pessoais é a Compiqo.
              <br />
              <strong>Contacto:</strong> geral@compiqo.pt
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Dados Recolhidos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recolhemos os seguintes tipos de dados pessoais:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">3.1. Dados de Registo</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Palavra-passe (criptografada)</li>
                  <li>Tipo de conta (Clube ou Atleta)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3.2. Dados de Perfil</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fotografia de perfil</li>
                  <li>Peso e medidas corporais</li>
                  <li>Modalidades praticadas</li>
                  <li>Histórico de competições e lutas</li>
                  <li>Estado de prontidão para competir</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3.3. Dados de Utilização</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Registos de acesso e actividade</li>
                  <li>Preferências e configurações</li>
                  <li>Dados de navegação e cookies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Finalidades do Tratamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Os seus dados pessoais são tratados para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Prestação de serviços:</strong> Gestão de clubes,
                atletas, eventos e competições
              </li>
              <li>
                <strong>Comunicação:</strong> Envio de notificações, alertas e
                informações relevantes
              </li>
              <li>
                <strong>Melhoria do serviço:</strong> Análise de utilização
                para melhorar a plataforma
              </li>
              <li>
                <strong>Segurança:</strong> Prevenção de fraudes e garantia de
                segurança da plataforma
              </li>
              <li>
                <strong>Cumprimento legal:</strong> Cumprimento de obrigações
                legais e regulamentares
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Base Legal</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O tratamento dos seus dados pessoais baseia-se em:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Consentimento:</strong> Quando nos dá consentimento
                explícito para o tratamento
              </li>
              <li>
                <strong>Execução de contrato:</strong> Para cumprir os nossos
                compromissos contratuais
              </li>
              <li>
                <strong>Interesse legítimo:</strong> Para melhorar os nossos
                serviços e segurança
              </li>
              <li>
                <strong>Obrigação legal:</strong> Para cumprir obrigações
                legais aplicáveis
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Partilha de Dados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Podemos partilhar os seus dados pessoais com:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Clubes e Atletas:</strong> Dados necessários para o
                funcionamento da plataforma (ex: clubes veem dados dos seus
                atletas)
              </li>
              <li>
                <strong>Prestadores de serviços:</strong> Empresas que nos
                ajudam a operar a plataforma (hospedagem, e-mail, etc.)
              </li>
              <li>
                <strong>Autoridades:</strong> Quando exigido por lei ou ordem
                judicial
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Não vendemos nem alugamos os seus dados pessoais a terceiros para
              fins de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Retenção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conservamos os seus dados pessoais apenas pelo tempo necessário
              para cumprir as finalidades descritas nesta política, salvo se um
              período de retenção mais longo for exigido ou permitido por lei.
              Quando eliminar a sua conta, os dados serão eliminados ou
              anonimizados dentro de 30 dias, excepto quando a retenção seja
              necessária para cumprir obrigações legais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Segurança dos Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas técnicas e organizativas adequadas para
              proteger os seus dados pessoais contra acesso não autorizado,
              alteração, divulgação ou destruição. Estas medidas incluem
              encriptação, controlos de acesso e monitorização regular dos
              nossos sistemas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Os Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De acordo com o RGPD, tem os seguintes direitos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Direito de acesso:</strong> Pode solicitar uma cópia
                dos seus dados pessoais
              </li>
              <li>
                <strong>Direito de rectificação:</strong> Pode corrigir dados
                inexactos ou incompletos
              </li>
              <li>
                <strong>Direito ao apagamento:</strong> Pode solicitar a
                eliminação dos seus dados em certas circunstâncias
              </li>
              <li>
                <strong>Direito à limitação:</strong> Pode solicitar a
                limitação do tratamento dos seus dados
              </li>
              <li>
                <strong>Direito à portabilidade:</strong> Pode solicitar a
                transferência dos seus dados para outro serviço
              </li>
              <li>
                <strong>Direito de oposição:</strong> Pode opor-se ao
                tratamento dos seus dados em certas circunstâncias
              </li>
              <li>
                <strong>Direito de retirar consentimento:</strong> Pode retirar
                o consentimento a qualquer momento
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Para exercer estes direitos, contacte-nos em:
              geral@compiqo.pt
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos cookies e tecnologias similares para melhorar a sua
              experiência na plataforma. Pode gerir as preferências de cookies
              através das configurações do seu navegador. Para mais informações,
              consulte a nossa Política de Cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Transferências Internacionais</h2>
            <p className="text-muted-foreground leading-relaxed">
              Os seus dados podem ser transferidos e armazenados em servidores
              localizados fora do Espaço Económico Europeu. Quando isso ocorrer,
              garantimos que existem salvaguardas adequadas, como cláusulas
              contratuais padrão aprovadas pela Comissão Europeia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Alterações a Esta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos actualizar esta Política de Privacidade periodicamente. A
              data da última actualização está indicada no topo desta página.
              Recomendamos que reveja esta política regularmente para se manter
              informado sobre como protegemos os seus dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contacto e Reclamações</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para questões sobre esta Política de Privacidade ou para exercer
              os seus direitos, contacte-nos em:
              <br />
              <strong>E-mail:</strong> geral@compiqo.pt
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tem também o direito de apresentar uma reclamação junto da
              Comissão Nacional de Proteção de Dados (CNPD) se considerar que o
              tratamento dos seus dados pessoais viola o RGPD:
              <br />
              <strong>CNPD:</strong> Rua de São Bento, n.º 148, 3.º, 1200-821
              Lisboa
              <br />
              <strong>Website:</strong> www.cnpd.pt
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            ← Voltar ao início
          </Link>
        </div>
      </main>
    </div>
  );
}


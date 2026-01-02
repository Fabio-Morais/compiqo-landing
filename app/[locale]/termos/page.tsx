import { Metadata } from "next";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === "es-ES";

  return {
    title: isES ? "Términos de Uso | Compiqo" : "Termos de Uso | Compiqo",
    description: isES
      ? "Términos y condiciones de uso de la plataforma Compiqo para gestión de clubes de deportes de combate."
      : "Termos e condições de uso da plataforma Compiqo para gestão de clubes de desportos de combate.",
  };
}

export default async function TermosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isES = locale === "es-ES";
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-3">
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
            href={`/${locale}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {isES ? "Volver al inicio" : "Voltar ao início"}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
          {isES ? "Términos de Uso" : "Termos de Uso"}
        </h1>
        <p className="text-muted-foreground mb-8">
          {isES ? "Última actualización:" : "Última actualização:"}{" "}
          {new Date().toLocaleDateString(isES ? "es-ES" : "pt-PT")}
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao aceder e utilizar a plataforma Compiqo, aceita estar vinculado
              a estes Termos de Uso. Se não concordar com qualquer parte destes
              termos, não deve utilizar os nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Definições</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>&ldquo;Plataforma&rdquo;</strong> refere-se ao serviço
                Compiqo, incluindo o website e aplicação web.
              </li>
              <li>
                <strong>&ldquo;Utilizador&rdquo;</strong> refere-se a qualquer
                pessoa ou entidade que acede à plataforma.
              </li>
              <li>
                <strong>&ldquo;Clube&rdquo;</strong> refere-se a ginásios,
                academias ou clubes de desportos de combate que utilizam a
                plataforma.
              </li>
              <li>
                <strong>&ldquo;Atleta&rdquo;</strong> refere-se a praticantes de
                desportos de combate registados na plataforma.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Registo e Conta</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para utilizar a plataforma, deve criar uma conta fornecendo
              informações precisas e actualizadas. É responsável por:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Manter a confidencialidade das suas credenciais de acesso</li>
              <li>
                Notificar-nos imediatamente de qualquer uso não autorizado da
                sua conta
              </li>
              <li>
                Ser responsável por todas as actividades que ocorram na sua
                conta
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Uso da Plataforma</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Compromete-se a utilizar a plataforma apenas para fins legais e de
              acordo com estes termos. É proibido:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Utilizar a plataforma de forma que viole qualquer lei ou
                regulamento aplicável
              </li>
              <li>
                Transmitir qualquer conteúdo que seja difamatório, ofensivo ou
                ilegal
              </li>
              <li>
                Tentar aceder não autorizado a qualquer parte da plataforma
              </li>
              <li>Interferir ou perturbar o funcionamento da plataforma</li>
              <li>
                Utilizar robots, scripts ou outros meios automatizados para
                aceder à plataforma
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Dados e Conteúdo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mantém todos os direitos sobre os dados e conteúdo que introduz na
              plataforma. Ao utilizar a plataforma, concede-nos uma licença
              para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Armazenar e processar os seus dados para fornecer os serviços
              </li>
              <li>
                Partilhar dados entre clubes e atletas conforme necessário para
                o funcionamento da plataforma
              </li>
              <li>
                Utilizar dados agregados e anonimizados para melhorar os nossos
                serviços
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Propriedade Intelectual
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A plataforma Compiqo e todo o seu conteúdo, incluindo mas não
              limitado a texto, gráficos, logótipos, ícones e software, são
              propriedade da Compiqo e estão protegidos por leis de direitos de
              autor e outras leis de propriedade intelectual portuguesas e
              internacionais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              7. Disponibilidade do Serviço
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Embora nos esforcemos para manter a plataforma disponível 24/7,
              não garantimos disponibilidade ininterrupta. Podemos realizar
              manutenção programada ou de emergência que pode resultar em
              interrupções temporárias do serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              8. Limitação de Responsabilidade
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na medida máxima permitida por lei, a Compiqo não será responsável
              por:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Danos indirectos, incidentais ou consequenciais resultantes do
                uso da plataforma
              </li>
              <li>Perda de dados, lucros ou oportunidades de negócio</li>
              <li>Interrupções ou falhas no serviço</li>
              <li>Ações de terceiros ou conteúdo gerado por utilizadores</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Rescisão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de suspender ou encerrar a sua conta a
              qualquer momento, com ou sem aviso prévio, se violar estes Termos
              de Uso ou se considerarmos que o seu uso da plataforma é
              prejudicial para outros utilizadores ou para a nossa empresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              10. Alterações aos Termos
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos de Uso a
              qualquer momento. As alterações entrarão em vigor imediatamente
              após a publicação. O uso continuado da plataforma após as
              alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Lei Aplicável</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estes Termos de Uso são regidos pelas leis de Portugal. Qualquer
              disputa relacionada com estes termos será resolvida nos tribunais
              competentes de Portugal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para questões sobre estes Termos de Uso, pode contactar-nos em:
              <br />
              <strong>E-mail:</strong> geral@compiqo.pt
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href={`/${locale}`}
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            ← {isES ? "Volver al inicio" : "Voltar ao início"}
          </Link>
        </div>
      </main>
    </div>
  );
}

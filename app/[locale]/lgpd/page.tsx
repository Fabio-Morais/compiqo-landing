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
    title: isES ? "Política LGPD | Compiqo" : "Política LGPD | Compiqo",
    description: isES
      ? "Política de conformidad con la Ley General de Protección de Datos (LGPD) de la plataforma Compiqo."
      : "Política de conformidade com a Lei Geral de Proteção de Dados (LGPD) da plataforma Compiqo.",
  };
}

export default async function LGPDPage({
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
          {isES ? "Política de Conformidad LGPD" : "Política de Conformidade LGPD"}
        </h1>
        <p className="text-muted-foreground mb-8">
          {isES ? "Última actualización:" : "Última actualização:"} {new Date().toLocaleDateString(isES ? "es-ES" : "pt-PT")}
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Enquadramento Legal</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Compiqo está em conformidade com a Lei Geral de Proteção de
              Dados (Lei n.º 58/2019, de 8 de agosto) e com o Regulamento
              Geral sobre a Proteção de Dados (RGPD - Regulamento (UE) 2016/679).
              Esta política detalha como cumprimos estas obrigações legais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Princípios de Tratamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tratamos os dados pessoais de acordo com os seguintes princípios:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Finalidade:</strong> Os dados são tratados apenas para
                finalidades específicas e legítimas
              </li>
              <li>
                <strong>Adequação:</strong> Apenas recolhemos dados necessários
                para as finalidades pretendidas
              </li>
              <li>
                <strong>Necessidade:</strong> Limitamos o tratamento ao mínimo
                necessário
              </li>
              <li>
                <strong>Livre acesso:</strong> Garantimos transparência sobre
                o tratamento dos dados
              </li>
              <li>
                <strong>Qualidade:</strong> Mantemos os dados exactos e
                actualizados
              </li>
              <li>
                <strong>Segurança:</strong> Implementamos medidas técnicas e
                organizativas adequadas
              </li>
              <li>
                <strong>Prevenção:</strong> Adoptamos medidas para prevenir
                danos aos titulares dos dados
              </li>
              <li>
                <strong>Não discriminação:</strong> Não realizamos tratamento
                discriminatório
              </li>
              <li>
                <strong>Responsabilização:</strong> Demonstramos conformidade
                com a LGPD
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Base Legal do Tratamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O tratamento de dados pessoais na plataforma Compiqo baseia-se nas
              seguintes bases legais previstas na LGPD:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Art. 7º, I - Consentimento:</strong> Quando o titular
                consente expressamente no tratamento
              </li>
              <li>
                <strong>Art. 7º, V - Execução de contrato:</strong> Para
                cumprimento de contrato ou procedimentos preliminares
              </li>
              <li>
                <strong>Art. 7º, VI - Interesse legítimo:</strong> Para atender
                aos interesses legítimos do controlador ou de terceiros
              </li>
              <li>
                <strong>Art. 7º, II - Obrigação legal:</strong> Para cumprimento
                de obrigação legal ou regulatória
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Direitos dos Titulares</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Em conformidade com o Art. 9º da LGPD, os titulares dos dados têm
              os seguintes direitos:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4.1. Direito de Confirmação e Acesso
                </h3>
                <p className="text-muted-foreground">
                  Pode confirmar se tratamos os seus dados pessoais e aceder
                  aos mesmos, obtendo informações sobre a origem, finalidade e
                  forma de tratamento.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4.2. Direito de Rectificação
                </h3>
                <p className="text-muted-foreground">
                  Pode solicitar a correção de dados incompletos, inexactos ou
                  desatualizados.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4.3. Direito à Anonimização, Bloqueio ou Eliminação
                </h3>
                <p className="text-muted-foreground">
                  Pode solicitar a anonimização, bloqueio ou eliminação de
                  dados desnecessários, excessivos ou tratados em desconformidade
                  com a LGPD.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4.4. Direito à Portabilidade
                </h3>
                <p className="text-muted-foreground">
                  Pode solicitar a portabilidade dos seus dados para outro
                  fornecedor de serviço, quando tecnicamente viável.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4.5. Direito de Eliminação
                </h3>
                <p className="text-muted-foreground">
                  Pode solicitar a eliminação dos dados pessoais tratados com o
                  seu consentimento, excepto nos casos previstos na LGPD.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4.6. Direito de Informação
                </h3>
                <p className="text-muted-foreground">
                  Pode obter informações sobre a partilha dos seus dados com
                  entidades públicas e privadas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4.7. Direito de Revogação do Consentimento
                </h3>
                <p className="text-muted-foreground">
                  Pode revogar o consentimento a qualquer momento, sem prejuízo
                  da legalidade do tratamento realizado com base no
                  consentimento anterior.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Exercício dos Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para exercer os seus direitos, pode contactar-nos através de:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>E-mail:</strong> geral@compiqo.pt
              </li>
              <li>
                <strong>Prazo de resposta:</strong> Responderemos ao seu pedido
                no prazo máximo de 15 dias, conforme previsto na LGPD
              </li>
              <li>
                <strong>Identificação:</strong> Pode ser necessário verificar a
                sua identidade antes de processar o pedido
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Medidas de Segurança</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Implementamos medidas técnicas e organizativas adequadas para
              proteger os dados pessoais, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Encriptação de dados em trânsito e em repouso</li>
              <li>Controlos de acesso baseados em funções</li>
              <li>Monitorização regular de segurança</li>
              <li>Backups regulares e planos de recuperação</li>
              <li>Formação regular da equipa sobre proteção de dados</li>
              <li>Avaliações periódicas de impacto na proteção de dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Encarregado de Proteção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Compiqo designou um Encarregado de Proteção de Dados (DPO) para
              supervisionar a conformidade com a LGPD e o RGPD. Pode contactar
              o DPO para questões relacionadas com o tratamento de dados
              pessoais através do e-mail: geral@compiqo.pt
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Transferência Internacional</h2>
            <p className="text-muted-foreground leading-relaxed">
              Quando transferimos dados pessoais para países fora do Espaço
              Económico Europeu, garantimos que existem salvaguardas adequadas,
              como cláusulas contratuais padrão ou outros mecanismos aprovados
              pela Autoridade Nacional de Proteção de Dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Notificação de Violações</h2>
            <p className="text-muted-foreground leading-relaxed">
              Em caso de violação de dados pessoais que possa resultar em risco
              para os direitos e liberdades dos titulares, notificaremos a
              Autoridade Nacional de Proteção de Dados (CNPD) no prazo de 72
              horas e informaremos os titulares afectados sem demora
              injustificada, conforme previsto na LGPD e no RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Retenção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Os dados pessoais são conservados apenas pelo tempo necessário para
              cumprir as finalidades do tratamento ou pelos prazos estabelecidos
              por lei. Após esse período, os dados são eliminados de forma
              segura ou anonimizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Alterações a Esta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Esta política pode ser actualizada periodicamente para reflectir
              mudanças nas nossas práticas ou na legislação aplicável. A data
              da última actualização está indicada no topo desta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Reclamações</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Se considerar que o tratamento dos seus dados pessoais viola a
              LGPD ou o RGPD, tem o direito de apresentar uma reclamação junto
              da:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong>
                <br />
                Rua de São Bento, n.º 148, 3.º
                <br />
                1200-821 Lisboa, Portugal
                <br />
                <strong>Telefone:</strong> +351 213 928 400
                <br />
                <strong>E-mail:</strong> geral@cnpd.pt
                <br />
                <strong>Website:</strong> www.cnpd.pt
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para questões sobre esta política ou sobre o tratamento dos seus
              dados pessoais, contacte-nos:
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


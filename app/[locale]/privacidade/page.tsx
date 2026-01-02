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
    title: isES ? "Política de Privacidad | Compiqo" : "Política de Privacidade | Compiqo",
    description: isES
      ? "Política de privacidad de la plataforma Compiqo. Descubre cómo protegemos y tratamos tus datos personales."
      : "Política de privacidade da plataforma Compiqo. Saiba como protegemos e tratamos os seus dados pessoais.",
  };
}

export default async function PrivacidadePage({
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
          {isES ? "Política de Privacidad" : "Política de Privacidade"}
        </h1>
        <p className="text-muted-foreground mb-8">
          {isES ? "Última actualización:" : "Última actualização:"} {new Date().toLocaleDateString(isES ? "es-ES" : "pt-PT")}
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. {isES ? "Introducción" : "Introdução"}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {isES
                ? "Compiqo (\"nosotros\", \"nuestro\" o \"plataforma\") está comprometida en proteger la privacidad de sus usuarios. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales en conformidad con el Reglamento General sobre la Protección de Datos (RGPD) y la legislación española aplicable."
                : "A Compiqo (\"nós\", \"nosso\" ou \"plataforma\") está comprometida em proteger a privacidade dos seus utilizadores. Esta Política de Privacidade explica como recolhemos, utilizamos, armazenamos e protegemos os seus dados pessoais em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a Lei de Proteção de Dados Pessoais portuguesa."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. {isES ? "Responsable del Tratamiento" : "Responsável pelo Tratamento"}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {isES
                ? "El responsable del tratamiento de sus datos personales es Compiqo."
                : "O responsável pelo tratamento dos seus dados pessoais é a Compiqo."}
              <br />
              <strong>{isES ? "Contacto:" : "Contacto:"}</strong> geral@compiqo.pt
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. {isES ? "Datos Recopilados" : "Dados Recolhidos"}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isES
                ? "Recopilamos los siguientes tipos de datos personales:"
                : "Recolhemos os seguintes tipos de dados pessoais:"}
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">3.1. {isES ? "Datos de Registro" : "Dados de Registo"}</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{isES ? "Nombre completo" : "Nome completo"}</li>
                  <li>{isES ? "Dirección de correo electrónico" : "Endereço de e-mail"}</li>
                  <li>{isES ? "Contraseña (cifrada)" : "Palavra-passe (criptografada)"}</li>
                  <li>{isES ? "Tipo de cuenta (Club o Atleta)" : "Tipo de conta (Clube ou Atleta)"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3.2. {isES ? "Datos de Perfil" : "Dados de Perfil"}</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{isES ? "Fotografía de perfil" : "Fotografia de perfil"}</li>
                  <li>{isES ? "Peso y medidas corporales" : "Peso e medidas corporais"}</li>
                  <li>{isES ? "Modalidades practicadas" : "Modalidades praticadas"}</li>
                  <li>{isES ? "Historial de competiciones y combates" : "Histórico de competições e lutas"}</li>
                  <li>{isES ? "Estado de preparación para competir" : "Estado de prontidão para competir"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3.3. {isES ? "Datos de Uso" : "Dados de Utilização"}</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{isES ? "Registros de acceso y actividad" : "Registos de acesso e actividade"}</li>
                  <li>{isES ? "Preferencias y configuraciones" : "Preferências e configurações"}</li>
                  <li>{isES ? "Datos de navegación y cookies" : "Dados de navegação e cookies"}</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. {isES ? "Finalidades del Tratamiento" : "Finalidades do Tratamento"}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isES
                ? "Sus datos personales son tratados para las siguientes finalidades:"
                : "Os seus dados pessoais são tratados para as seguintes finalidades:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>{isES ? "Prestación de servicios:" : "Prestação de serviços:"}</strong> {isES ? "Gestión de clubes, atletas, eventos y competiciones" : "Gestão de clubes, atletas, eventos e competições"}
              </li>
              <li>
                <strong>{isES ? "Comunicación:" : "Comunicação:"}</strong> {isES ? "Envío de notificaciones, alertas e información relevante" : "Envio de notificações, alertas e informações relevantes"}
              </li>
              <li>
                <strong>{isES ? "Mejora del servicio:" : "Melhoria do serviço:"}</strong> {isES ? "Análisis de uso para mejorar la plataforma" : "Análise de utilização para melhorar a plataforma"}
              </li>
              <li>
                <strong>{isES ? "Seguridad:" : "Segurança:"}</strong> {isES ? "Prevención de fraudes y garantía de seguridad de la plataforma" : "Prevenção de fraudes e garantia de segurança da plataforma"}
              </li>
              <li>
                <strong>{isES ? "Cumplimiento legal:" : "Cumprimento legal:"}</strong> {isES ? "Cumplimiento de obligaciones legales y regulatorias" : "Cumprimento de obrigações legais e regulamentares"}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. {isES ? "Base Legal" : "Base Legal"}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isES
                ? "El tratamiento de sus datos personales se basa en:"
                : "O tratamento dos seus dados pessoais baseia-se em:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>{isES ? "Consentimiento:" : "Consentimento:"}</strong> {isES ? "Cuando nos da consentimiento explícito para el tratamiento" : "Quando nos dá consentimento explícito para o tratamento"}
              </li>
              <li>
                <strong>{isES ? "Ejecución de contrato:" : "Execução de contrato:"}</strong> {isES ? "Para cumplir nuestros compromisos contractuales" : "Para cumprir os nossos compromissos contratuais"}
              </li>
              <li>
                <strong>{isES ? "Interés legítimo:" : "Interesse legítimo:"}</strong> {isES ? "Para mejorar nuestros servicios y seguridad" : "Para melhorar os nossos serviços e segurança"}
              </li>
              <li>
                <strong>{isES ? "Obligación legal:" : "Obrigação legal:"}</strong> {isES ? "Para cumplir obligaciones legales aplicables" : "Para cumprir obrigações legais aplicáveis"}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. {isES ? "Compartir Datos" : "Partilha de Dados"}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isES
                ? "Podemos compartir sus datos personales con:"
                : "Podemos partilhar os seus dados pessoais com:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>{isES ? "Clubes y Atletas:" : "Clubes e Atletas:"}</strong> {isES ? "Datos necesarios para el funcionamiento de la plataforma (ej: los clubes ven datos de sus atletas)" : "Dados necessários para o funcionamento da plataforma (ex: clubes veem dados dos seus atletas)"}
              </li>
              <li>
                <strong>{isES ? "Proveedores de servicios:" : "Prestadores de serviços:"}</strong> {isES ? "Empresas que nos ayudan a operar la plataforma (alojamiento, correo electrónico, etc.)" : "Empresas que nos ajudam a operar a plataforma (hospedagem, e-mail, etc.)"}
              </li>
              <li>
                <strong>{isES ? "Autoridades:" : "Autoridades:"}</strong> {isES ? "Cuando sea requerido por ley u orden judicial" : "Quando exigido por lei ou ordem judicial"}
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {isES
                ? "No vendemos ni alquilamos sus datos personales a terceros para fines de marketing."
                : "Não vendemos nem alugamos os seus dados pessoais a terceiros para fins de marketing."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. {isES ? "Retención de Datos" : "Retenção de Dados"}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {isES
                ? "Conservamos sus datos personales solo el tiempo necesario para cumplir las finalidades descritas en esta política, salvo si un período de retención más largo sea requerido o permitido por ley. Cuando elimine su cuenta, los datos serán eliminados o anonimizados dentro de 30 días, excepto cuando la retención sea necesaria para cumplir obligaciones legales."
                : "Conservamos os seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, salvo se um período de retenção mais longo for exigido ou permitido por lei. Quando eliminar a sua conta, os dados serão eliminados ou anonimizados dentro de 30 dias, excepto quando a retenção seja necessária para cumprir obrigações legais."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. {isES ? "Seguridad de los Datos" : "Segurança dos Dados"}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {isES
                ? "Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Estas medidas incluyen cifrado, controles de acceso y monitoreo regular de nuestros sistemas."
                : "Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Estas medidas incluem encriptação, controlos de acesso e monitorização regular dos nossos sistemas."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. {isES ? "Sus Derechos" : "Os Seus Direitos"}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isES
                ? "De acuerdo con el RGPD, tiene los siguientes derechos:"
                : "De acordo com o RGPD, tem os seguintes direitos:"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>{isES ? "Derecho de acceso:" : "Direito de acesso:"}</strong> {isES ? "Puede solicitar una copia de sus datos personales" : "Pode solicitar uma cópia dos seus dados pessoais"}
              </li>
              <li>
                <strong>{isES ? "Derecho de rectificación:" : "Direito de rectificação:"}</strong> {isES ? "Puede corregir datos inexactos o incompletos" : "Pode corrigir dados inexactos ou incompletos"}
              </li>
              <li>
                <strong>{isES ? "Derecho al borrado:" : "Direito ao apagamento:"}</strong> {isES ? "Puede solicitar la eliminación de sus datos en ciertas circunstancias" : "Pode solicitar a eliminação dos seus dados em certas circunstâncias"}
              </li>
              <li>
                <strong>{isES ? "Derecho a la limitación:" : "Direito à limitação:"}</strong> {isES ? "Puede solicitar la limitación del tratamiento de sus datos" : "Pode solicitar a limitação do tratamento dos seus dados"}
              </li>
              <li>
                <strong>{isES ? "Derecho a la portabilidad:" : "Direito à portabilidade:"}</strong> {isES ? "Puede solicitar la transferencia de sus datos a otro servicio" : "Pode solicitar a transferência dos seus dados para outro serviço"}
              </li>
              <li>
                <strong>{isES ? "Derecho de oposición:" : "Direito de oposição:"}</strong> {isES ? "Puede oponerse al tratamiento de sus datos en ciertas circunstancias" : "Pode opor-se ao tratamento dos seus dados em certas circunstâncias"}
              </li>
              <li>
                <strong>{isES ? "Derecho de retirar consentimiento:" : "Direito de retirar consentimento:"}</strong> {isES ? "Puede retirar el consentimiento en cualquier momento" : "Pode retirar o consentimento a qualquer momento"}
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {isES
                ? "Para ejercer estos derechos, contáctenos en:"
                : "Para exercer estes direitos, contacte-nos em:"} geral@compiqo.pt
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              {isES
                ? "Utilizamos cookies y tecnologías similares para mejorar su experiencia en la plataforma. Puede gestionar las preferencias de cookies a través de la configuración de su navegador. Para más información, consulte nuestra Política de Cookies."
                : "Utilizamos cookies e tecnologias similares para melhorar a sua experiência na plataforma. Pode gerir as preferências de cookies através das configurações do seu navegador. Para mais informações, consulte a nossa Política de Cookies."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. {isES ? "Transferencias Internacionales" : "Transferências Internacionais"}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {isES
                ? "Sus datos pueden ser transferidos y almacenados en servidores ubicados fuera del Espacio Económico Europeo. Cuando esto ocurra, garantizamos que existen salvaguardas adecuadas, como cláusulas contractuales estándar aprobadas por la Comisión Europea."
                : "Os seus dados podem ser transferidos e armazenados em servidores localizados fora do Espaço Económico Europeu. Quando isso ocorrer, garantimos que existem salvaguardas adequadas, como cláusulas contratuais padrão aprovadas pela Comissão Europeia."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. {isES ? "Cambios a Esta Política" : "Alterações a Esta Política"}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {isES
                ? "Podemos actualizar esta Política de Privacidad periódicamente. La fecha de la última actualización está indicada en la parte superior de esta página. Recomendamos que revise esta política regularmente para mantenerse informado sobre cómo protegemos sus datos."
                : "Podemos actualizar esta Política de Privacidade periodicamente. A data da última actualização está indicada no topo desta página. Recomendamos que reveja esta política regularmente para se manter informado sobre como protegemos os seus dados."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. {isES ? "Contacto y Reclamaciones" : "Contacto e Reclamações"}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isES
                ? "Para cuestiones sobre esta Política de Privacidad o para ejercer sus derechos, contáctenos en:"
                : "Para questões sobre esta Política de Privacidade ou para exercer os seus direitos, contacte-nos em:"}
              <br />
              <strong>{isES ? "Correo electrónico:" : "E-mail:"}</strong> geral@compiqo.pt
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isES
                ? "También tiene el derecho de presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que el tratamiento de sus datos personales viola el RGPD:"
                : "Tem também o direito de apresentar uma reclamação junto da Comissão Nacional de Proteção de Dados (CNPD) se considerar que o tratamento dos seus dados pessoais viola o RGPD:"}
              <br />
              {isES ? (
                <>
                  <strong>AEPD:</strong> C/ Jorge Juan, 6, 28001 Madrid
                  <br />
                  <strong>Sitio web:</strong> www.aepd.es
                </>
              ) : (
                <>
                  <strong>CNPD:</strong> Rua de São Bento, n.º 148, 3.º, 1200-821 Lisboa
                  <br />
                  <strong>Website:</strong> www.cnpd.pt
                </>
              )}
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

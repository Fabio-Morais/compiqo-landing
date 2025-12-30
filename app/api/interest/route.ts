import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Email e nome são obrigatórios" },
        { status: 400 }
      );
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: "Compiqo <onboarding@resend.dev>", // Será substituído pelo seu domínio verificado
      to: ["fabio-morais@outlook.pt"],
      subject: `Novo interesse no Compiqo - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ea580c;">Novo Interesse no Compiqo</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${message ? `<p><strong>Mensagem:</strong></p><p>${message}</p>` : ""}
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">
            Este email foi enviado através do formulário de interesse do site Compiqo.
          </p>
        </div>
      `,
      text: `
Novo Interesse no Compiqo

Nome: ${name}
Email: ${email}
${message ? `Mensagem: ${message}` : ""}
      `,
    });

    if (error) {
      console.error("Erro ao enviar email:", error);
      return NextResponse.json(
        { error: "Erro ao enviar email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email enviado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro na API:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}


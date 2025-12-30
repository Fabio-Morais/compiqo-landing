# Configuração do Formulário de Interesse - Email

Este projeto usa **Resend** para enviar emails através do formulário "Estou Interessado".

## Passos para Configurar

### 1. Instalar Resend

```bash
npm install resend
```

### 2. Criar Conta no Resend

1. Aceda a [resend.com](https://resend.com)
2. Crie uma conta gratuita (100 emails/dia grátis)
3. Vá para **API Keys** e crie uma nova chave API

### 3. Configurar no Vercel

1. No dashboard do Vercel, vá ao seu projeto
2. Vá em **Settings** → **Environment Variables**
3. Adicione a variável:
   - **Nome**: `RESEND_API_KEY`
   - **Valor**: A sua chave API do Resend
   - **Environment**: Production, Preview, Development (marque todos)

### 4. Verificar Domínio (Opcional mas Recomendado)

Para usar um email personalizado (ex: `noreply@seudominio.com`):

1. No Resend, vá em **Domains**
2. Adicione o seu domínio
3. Configure os registos DNS conforme instruções
4. Depois de verificado, altere em `app/api/interest/route.ts`:
   ```typescript
   from: "Compiqo <noreply@seudominio.com>",
   ```

### 5. Testar Localmente

Crie um ficheiro `.env.local` na raiz do projeto:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

Depois execute:
```bash
npm run dev
```

## Estrutura

- **Formulário**: `app/components/interest-form.tsx` (componente client-side)
- **API Route**: `app/api/interest/route.ts` (server-side, envia o email)
- **Email destino**: `fabio-morais@outlook.pt` (configurado na API route)

## Alternativas

Se preferir não usar Resend, pode usar:
- **SendGrid** (similar ao Resend)
- **Mailgun** (alternativa)
- **Nodemailer** com SMTP (mais configuração necessária)


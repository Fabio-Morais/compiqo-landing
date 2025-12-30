# Configuração de Internacionalização (i18n)

Este guia explica como completar a configuração de internacionalização para suportar Português (pt-PT) e Espanhol (es-ES).

## Estrutura Criada

✅ **Middleware** (`middleware.ts`) - Detecta automaticamente o idioma do utilizador
✅ **Arquivos de Tradução** (`messages/pt-PT.json` e `messages/es-ES.json`)
✅ **Utilitários i18n** (`app/lib/i18n.ts`)
✅ **Layout com Locale** (`app/[locale]/layout.tsx`)

## Como Funciona

1. **Detecção Automática**: O middleware detecta o idioma do navegador através do header `Accept-Language`
2. **Redirecionamento**: Se alguém da Espanha aceder, será redirecionado para `/es-ES`
3. **Traduções**: Todas as traduções estão em arquivos JSON separados

## Próximos Passos

### 1. Mover Páginas para Estrutura [locale]

Mova todas as páginas da pasta `app/` para `app/[locale]/`:

```bash
# Mover página principal
mv app/page.tsx app/[locale]/page.tsx

# Mover páginas legais
mv app/termos app/[locale]/termos
mv app/privacidade app/[locale]/privacidade
mv app/lgpd app/[locale]/lgpd
```

### 2. Atualizar Componentes para Usar Traduções

Exemplo de como atualizar um componente:

```tsx
// app/[locale]/page.tsx
import { getTranslations } from "../lib/i18n";
import { Locale } from "../lib/i18n";

export default function LandingPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getTranslations(params.locale);

  return (
    <main>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.description}</p>
      {/* ... */}
    </main>
  );
}
```

### 3. Atualizar Componentes Estáticos

Os componentes em `app/components/` precisam receber as traduções como props:

```tsx
// app/components/hero-content-static.tsx
export function HeroContentStatic({ t }: { t: any }) {
  return (
    <div>
      <div>{t.hero.badge}</div>
      <h1>{t.hero.title}</h1>
      {/* ... */}
    </div>
  );
}
```

### 4. Atualizar Links e Navegação

Todos os links internos precisam incluir o locale:

```tsx
<Link href={`/${locale}/termos`}>Termos</Link>
```

## Estrutura Final

```
app/
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── termos/
│   ├── privacidade/
│   └── lgpd/
├── components/
├── lib/
│   └── i18n.ts
└── ...
messages/
├── pt-PT.json
└── es-ES.json
middleware.ts
```

## Testar

1. **Português**: Aceda a `http://localhost:3000/pt-PT` ou `http://localhost:3000` (será redirecionado)
2. **Espanhol**: Aceda a `http://localhost:3000/es-ES` ou configure o navegador para espanhol

## Notas

- O middleware redireciona automaticamente baseado no `Accept-Language` header
- URLs sempre incluem o locale: `/pt-PT/` ou `/es-ES/`
- Traduções podem ser facilmente expandidas adicionando novas chaves nos arquivos JSON


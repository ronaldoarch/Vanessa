# 🎯 Meta Conversions API - Configuração Completa

## 📋 Visão Geral

Este projeto implementa o rastreamento completo do Meta (Facebook) usando tanto o **Facebook Pixel** (client-side) quanto o **Conversions API** (server-side) para máxima precisão no rastreamento de conversões.

## 🚀 Eventos Implementados

### 1. **PageView**
- Disparado automaticamente quando a página carrega
- Valor: 0 EUR (apenas rastreamento)

### 2. **ViewContent**
- Disparado em múltiplos momentos:
  - Carregamento da página
  - Após 30 segundos na página
  - Quando o usuário faz scroll (100px)
- Valor: 100-200 EUR

### 3. **Lead**
- Disparado quando o usuário clica no botão CTA
- Valor: 500 EUR

### 4. **AddToCart**
- Disparado quando o usuário clica no botão CTA (simulando interesse)
- Valor: 500 EUR

### 5. **Purchase** (Preparado)
- Evento preparado para futuras implementações
- Valor: 1000 EUR

## ⚙️ Configuração

### 1. **Obter Facebook Pixel ID**

1. Acesse [Facebook Business Manager](https://business.facebook.com/)
2. Vá para **Eventos** > **Pixels**
3. Crie um novo pixel ou use um existente
4. Copie o **Pixel ID**

### 2. **Obter Access Token**

1. No Facebook Business Manager, vá para **Configurações** > **Sistema**
2. Clique em **Tokens de Acesso**
3. Crie um novo token com permissões:
   - `ads_management`
   - `ads_read`
   - `business_management`
4. Copie o **Access Token**

### 3. **Configurar o Código**

#### Opção A: Editar diretamente no HTML
No arquivo `index.html`, substitua:

```javascript
// Linha 15
fbq('init', 'PIXEL_ID'); // Substitua PIXEL_ID pelo seu ID real

// Linha 20
src="https://www.facebook.com/tr?id=PIXEL_ID&ev=PageView&noscript=1"/> // Substitua PIXEL_ID

// Linha 35
pixelId: 'PIXEL_ID', // Substitua PIXEL_ID

// Linha 38
accessToken: 'YOUR_ACCESS_TOKEN', // Substitua pelo seu token real
```

#### Opção B: Usar arquivo de configuração
Edite o arquivo `meta-config.js`:

```javascript
const META_CONFIG = {
    pixelId: 'SEU_PIXEL_ID_AQUI',
    accessToken: 'SEU_ACCESS_TOKEN_AQUI',
    // ... outras configurações
};
```

### 4. **Modo de Teste vs Produção**

#### Modo de Teste
```javascript
testEventCode: 'TEST12345' // Mantenha este código
```

#### Modo de Produção
```javascript
testEventCode: null // Remova ou comente esta linha
```

## 🔧 Personalização

### 1. **Valores dos Eventos**

Edite os valores no arquivo `meta-config.js`:

```javascript
events: {
    viewContent: {
        eventName: 'ViewContent',
        value: 100, // Altere o valor
        currency: 'EUR'
    },
    lead: {
        eventName: 'Lead',
        value: 500, // Altere o valor
        currency: 'EUR'
    }
}
```

### 2. **Categorias de Conteúdo**

```javascript
content: {
    name: 'FunBet Landing Page', // Nome da sua landing page
    category: 'Gambling', // Categoria do seu negócio
    type: 'landing_page'
}
```

### 3. **Limites de Rastreamento**

```javascript
tracking: {
    scrollThreshold: 100, // Pixels de scroll para disparar evento
    timeThreshold: 30, // Segundos na página para disparar evento
    enableIPTracking: true, // Rastrear IP do usuário
    enableUserAgentTracking: true // Rastrear User Agent
}
```

## 📊 Monitoramento

### 1. **Facebook Events Manager**

1. Acesse [Facebook Events Manager](https://business.facebook.com/events_manager2/)
2. Selecione seu pixel
3. Vá para **Test Events** para ver eventos em tempo real
4. Vá para **Aggregated Event Measurement** para configurações

### 2. **Console do Navegador**

Abra o DevTools (F12) e verifique:
- Eventos sendo enviados
- Respostas do Conversions API
- Erros de configuração

### 3. **Test Events**

Use o código de teste para verificar se os eventos estão sendo enviados corretamente:

```javascript
// No console do navegador
fbq('track', 'Lead', {
    content_name: 'Test Event',
    value: 500,
    currency: 'EUR'
});
```

## 🛡️ Segurança e Privacidade

### 1. **GDPR Compliance**

O código já inclui:
- Rastreamento de consentimento (preparado)
- Dados anonimizados quando possível
- Fallback para client-side apenas

### 2. **Dados Coletados**

- IP do usuário (opcional)
- User Agent
- Cookies do Facebook (_fbc, _fbp)
- URL da página
- Timestamp do evento

### 3. **Recomendações**

- Sempre informe sobre cookies
- Implemente banner de consentimento
- Use HTTPS em produção
- Monitore regularmente os eventos

## 🔍 Troubleshooting

### Problema: Eventos não aparecem no Events Manager

**Soluções:**
1. Verifique se o Pixel ID está correto
2. Confirme se o Access Token tem permissões adequadas
3. Verifique se não há bloqueadores de anúncios
4. Use o modo de teste primeiro

### Problema: Erro 400 no Conversions API

**Soluções:**
1. Verifique o formato dos dados enviados
2. Confirme se o Access Token é válido
3. Verifique se o Pixel ID está correto
4. Use o código de teste para debug

### Problema: Eventos duplicados

**Soluções:**
1. Verifique se não há múltiplos pixels na página
2. Confirme se o evento não está sendo disparado múltiplas vezes
3. Use deduplicação no Facebook Ads Manager

## 📈 Otimizações

### 1. **Performance**

- Eventos são enviados de forma assíncrona
- Fallback para client-side em caso de erro
- Timeout configurável para requests

### 2. **Precisão**

- Rastreamento server-side + client-side
- Dados de usuário enriquecidos
- Timestamps precisos

### 3. **Escalabilidade**

- Configuração centralizada
- Fácil adição de novos eventos
- Código modular e reutilizável

## 🎯 Próximos Passos

1. **Configure suas credenciais reais**
2. **Teste em modo de desenvolvimento**
3. **Monitore os eventos no Events Manager**
4. **Ajuste valores e configurações conforme necessário**
5. **Implemente banner de consentimento**
6. **Configure campanhas no Facebook Ads**

## 📞 Suporte

Para dúvidas sobre:
- **Facebook Pixel**: [Documentação Oficial](https://developers.facebook.com/docs/facebook-pixel/)
- **Conversions API**: [Documentação Oficial](https://developers.facebook.com/docs/marketing-api/conversions-api/)
- **Events Manager**: [Guia Completo](https://www.facebook.com/business/help/898752960195806)

---

**⚠️ Importante**: Sempre teste em ambiente de desenvolvimento antes de usar em produção! 
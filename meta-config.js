// Configurações do Meta Conversions API
const META_CONFIG = {
    // Facebook Pixel ID - Configurado para pixel básico
    pixelId: '1190912676408753',
    
    // Configuração para pixel básico (sem Conversions API)
    useBasicPixel: true,
    
    // Código de teste - Remover em produção
    testEventCode: 'TEST12345',
    
    // Configurações de eventos
    events: {
        pageView: {
            eventName: 'PageView',
            value: 0,
            currency: 'EUR'
        },
        viewContent: {
            eventName: 'ViewContent',
            value: 100,
            currency: 'EUR'
        },
        lead: {
            eventName: 'Lead',
            value: 500,
            currency: 'EUR'
        },
        addToCart: {
            eventName: 'AddToCart',
            value: 500,
            currency: 'EUR'
        },
        purchase: {
            eventName: 'Purchase',
            value: 1000,
            currency: 'EUR'
        }
    },
    
    // Configurações de conteúdo
    content: {
        name: 'FunBet Landing Page - Italia',
        category: 'Gambling',
        type: 'landing_page',
        country: 'IT',
        language: 'it'
    },
    
    // Configurações de rastreamento
    tracking: {
        scrollThreshold: 100,
        timeThreshold: 30, // segundos
        enableIPTracking: true,
        enableUserAgentTracking: true,
        // Configurações específicas para Itália
        timezone: 'Europe/Rome',
        currency: 'EUR',
        locale: 'it_IT'
    }
};

// Função para validar configurações
function validateMetaConfig() {
    const required = ['pixelId', 'accessToken'];
    const missing = required.filter(key => !META_CONFIG[key] || META_CONFIG[key].includes('PIXEL_ID') || META_CONFIG[key].includes('YOUR_ACCESS_TOKEN'));
    
    if (missing.length > 0) {
        console.warn('⚠️ Configurações do Meta não configuradas:', missing);
        return false;
    }
    
    return true;
}

// Função para obter configuração de evento
function getEventConfig(eventType) {
    return META_CONFIG.events[eventType] || {
        eventName: eventType,
        value: 0,
        currency: 'EUR'
    };
}

// Exportar configurações
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { META_CONFIG, validateMetaConfig, getEventConfig };
} 
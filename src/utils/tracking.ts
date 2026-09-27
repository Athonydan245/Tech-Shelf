declare global {
    interface Window {
        dataLayer: any[];
    }
}

export const trackEvent = (eventName: string, params: object = {}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
    });
    console.log(`[Tracking Realtime]: ${eventName}`, params);
};

export const captureUTMs = () => {
    const urlParams = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(param => {
        if (urlParams.has(param)) {
            sessionStorage.setItem(param, urlParams.get(param) || '');
        }
    });
};
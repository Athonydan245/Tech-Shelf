export const trackEvent = (eventName: string, eventData: any = {}) => {
    console.log(`📊 [Tracking Event]: ${eventName}`, eventData);
};

export const setCookie = (name: string, value: string, days = 30) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

export const getCookie = (name: string) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
};

export const captureUTMs = () => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source');
    const utmCampaign = params.get('utm_campaign');

    if (utmSource) setCookie('utm_source', utmSource);
    if (utmCampaign) setCookie('utm_campaign', utmCampaign);
};
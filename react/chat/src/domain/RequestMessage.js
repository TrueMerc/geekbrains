export const RequestMessage = (message, site, botId, applicationId) => {
    const url = new URL(site);
    const params = {instance: botId, application: '4379326578269267200', message: message};
    url.search = new URLSearchParams(params).toString();
    return url;
}
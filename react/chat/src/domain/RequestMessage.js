export const RequestMessage = (message, site, botId, applicationId) => {
    const url = new URL(site);
    const params = {instance: botId, application: applicationId, message: message};
    url.search = new URLSearchParams(params).toString();
    return url;
}
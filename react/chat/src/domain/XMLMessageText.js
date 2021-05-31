export const XmlMessageText = (xml) => {
    const xmlDocument = (new DOMParser).parseFromString(xml, 'text/xml');
    return xmlDocument.getElementsByTagName("message")[0].childNodes[0].nodeValue;
}
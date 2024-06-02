const link = path => process.env.REACT_APP_MAIN_SITE + path;

function env(name) {
    const nodeENV = process.env.NODE_ENV.toUpperCase();

    return process.env[`REACT_APP_${nodeENV}_${name}`] || process.env[`REACT_APP_${name}`];
}

function parseKB(KB) {
    const sizes = ['KB', 'MB', 'GB', 'TB'];
    if (KB === 0) return '0 KB';
    const i = Math.floor(Math.log2(KB) / 10);
    return `${parseFloat((KB / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
}

const getSessionData = name => sessionStorage[name];

const setSessionData = (name, value) => (sessionStorage[name] = value);

const isDefined = v => typeof v !== 'undefined';

const truncate = (str, length) =>
    str.length > length ? str.substring(0, length - 3) + '...' : str;

const isEmpty = obj => Object.keys(obj).length === 0;
const isObject = obj => typeof obj === 'object' && !Array.isArray(obj) && obj !== null;

const isImage = file => file['type'].split('/')[0] === 'image';
const isVideo = file => file['type'].split('/')[0] === 'video';

function escapeDanger(content) {
    const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gim;

    if (regex.test(content)) return null;
    return content;
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function parseHTMLTags(content) {
    const regex = /(<([^>]+)>)/gim;

    return content ? content.replace(regex, '') : content;
}

const parseLinks = text => {
    const urlRegex =
        /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/;
    return text.replace(urlRegex, url => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
};

export {
    link,
    env,
    parseKB,
    getSessionData,
    setSessionData,
    isDefined,
    truncate,
    isEmpty,
    isObject,
    isImage,
    isVideo,
    escapeDanger,
    getBase64,
    parseHTMLTags,
    parseLinks,
};

import { AdobeFiles, CodeFiles, GeneralFiles, MicrosoftFiles } from '../services/extension';

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

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const isImage = file => file['type'].split('/')[0] === 'image';

export {
    link,
    env,
    parseKB,
    getSessionData,
    setSessionData,
    isDefined,
    truncate,
    isEmpty,
    isImage,
};

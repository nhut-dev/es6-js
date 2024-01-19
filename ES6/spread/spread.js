import { indexConfig } from "../spread/index.js";

var defaultConfig = {
    ...indexConfig,
    api: 'https://www.facebook.com/?locale=vi_VN',
    apiVersion: 'f1',
    orther: 'orther'
};

var exerciseConfig = {
    ...defaultConfig,
    api: 'https://www.w3schools.com/react/default.asp'
}

export default exerciseConfig
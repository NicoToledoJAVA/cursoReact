// confi/fetchInfo.js
const variables = {
    protocol: "https",
    domain: "vps-3858808-x.dattaweb.com",
    port: 8444,
    api: "wines"
};

const url = `${variables.protocol}://${variables.domain}:${variables.port}/${variables.api}`;

export default url;
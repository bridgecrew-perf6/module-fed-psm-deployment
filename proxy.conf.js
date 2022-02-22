module.exports = {
    "/mf/satd-deployment/**": {
        target: "http://localhost:7000",
        pathRewrite: { "^/mf/satd-deployment": "" }
    }
};

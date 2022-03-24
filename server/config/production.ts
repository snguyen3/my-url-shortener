export default {
    port: 4000,
    // dbUri: "mongodb://localhost:27017/url-shortener"
    dbUri: process.env.REACT_APP_URI,
};
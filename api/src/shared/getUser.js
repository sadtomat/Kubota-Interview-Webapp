function getUser(req) {
    const header = req.headers.get("x-ms-client-principle");
    if (!header) return null;

    const encoded = Buffer.from(header, "base64").toString("ascii");
    return JSON.parse(encoded);
}

module.exports = { getUser };
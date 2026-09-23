function getUser(req) {
    const header = req.headers.get("x-ms-client-principal");
    if (!header) return null;

    const encoded = Buffer.from(header, "base64").toString("ascii");
    const user = JSON.parse(encoded);
    return user;
}

module.exports = { getUser };
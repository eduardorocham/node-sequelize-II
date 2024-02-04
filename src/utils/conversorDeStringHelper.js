module.exports = (objetoParams) => {
    for (let propridade in objetoParams) {
        if (/Id|id/.test(propridade)) {
            objetoParams[propridade] = Number(objetoParams[propridade])
        }
    }

    return objetoParams
}
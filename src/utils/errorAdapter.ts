export const errorAdapter = (obj: object) => {
    const arr = Object.entries(obj)

    if (!arr.length)
        return null

    return arr.map((item) => item[1].message)
}
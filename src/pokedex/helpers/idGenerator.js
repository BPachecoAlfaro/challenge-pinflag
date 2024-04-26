
export const idGenerator = (start) => {
    const ids = [];
    for (let i = start; i < start + 30; i++) {
        ids.push(i);
    }
    return ids;
}
export default function resolveAfter(timeSpan, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, timeSpan);
    });
};

import Chance from 'chance';

import resolveAfter from '../helpers/resolveAfter';

const chance = new Chance();
const profiles = new Array(10).fill().map((_, i) => {
    const gender = chance.gender();
    return {
        id: i,
        firstName: chance.first({ gender }),
        lastName: chance.last(),
        age: chance.age(),
        gender,
        avatarUrl: `${i}.png`,
    };
});

export function getById(id) {
    return resolveAfter(500, { ...profiles[id] });
};

export function getAll() {
    return resolveAfter(500, [...profiles]);
}

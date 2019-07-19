import profiles from './profiles.json';

import resolveAfter from '../helpers/resolveAfter';

export function getById(id) {
    return resolveAfter(100, { ...profiles[id] });
};

export function getAll() {
    return resolveAfter(100, [...profiles]);
}

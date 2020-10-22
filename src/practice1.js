const zip = function(keys, values) {
    const data = {};
    for (let i = 0; i < keys.length; i++) {
        data[keys[i]] = values[i];
    }

    return data;
}

const parseData = function(input) {
    const keys = input.column.map(column => column.name);
    const result = input.data.map(values => zip(keys, values));

    return result;
}
export { parseData };

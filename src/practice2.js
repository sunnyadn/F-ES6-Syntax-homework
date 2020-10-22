const inject = function(array, insertions) {
    const sortedInsertions = [...insertions];
    sortedInsertions.sort((a, b) => b.index - a.index);

    for (const insertion of sortedInsertions) {
        array.splice(insertion.index, 0, insertion.content);
    }

    return array;
}

export { inject };

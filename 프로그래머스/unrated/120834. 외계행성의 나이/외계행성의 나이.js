function solution(age) {
    var chr = 'abcdefghij';
    return Array.from(age.toString()).map(v => chr[v]).join('');
}
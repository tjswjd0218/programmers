function solution(num_list) {
    let answer = [0, 0];
    for(item of num_list) {
        answer[item % 2] += 1
    }
    return answer;
}



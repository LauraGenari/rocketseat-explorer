let moreStudents = 'S';
const arr = []

while (moreStudents === 'S' || moreStudents === 's') {
    const nome = prompt('Insira o nome do aluno: ');
    
    const noteOne = Number(prompt(`Insira a primeira nota do (a) ${nome}: `));
    const noteTwo = Number(prompt(`Insira a segunda nota do (a) ${nome}: `));
    
    arr.push({nome, noteOne, noteTwo});

    moreStudents = prompt('Há mais algum aluno? Digite S para sim, ou qualquer outra tecla para não: ');

    if (moreStudents !== 'S' && moreStudents !== 's') {
        break;
    }
}

const msg = () => {
    let string = '';
    for (let i = arr.length; i > 0; i--) {
        const media = (arr[i-1].noteOne + arr[i-1].noteTwo) / 2;
        string = string.concat(`Média do(a) aluno(a) ${arr[i-1].nome} é ${media}. ${media >= 6 ? 'Parabens!' : 'Continue estudando para a recuperação'}  \n`)       
    }
    return string;
}



alert(msg());
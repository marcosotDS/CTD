class Aluno{
    constructor (nome, faltas, notas){
        this.nome= nome
        this.faltas= faltas
        this.notas= notas
    }
    calcularMedia=function(){
        let somaNotas=0
        for(let i=0;i < this.notas.length;i++){
            somaNotas +=this.notas[i] 
        }
        return somaNotas/this.notas.length
    }

    acrescentarFalta=function(){
        this.faltas+=1  
    }
  

}
const aluno1 = new Aluno('Jose',0,[10,9,7])
const aluno2 = new Aluno('Pedro',1,[5.5,7,8])

aluno1.notas.push(6)
console.log(aluno1.calcularMedia())
console.log(aluno1.faltas)
aluno1.acrescentarFalta()
console.log(aluno1.faltas)
aluno1.acrescentarFalta()
console.log(aluno1.faltas)

const curso = {
    nome:'nomeCurso',
    notaDeAprovacao:7,
    faltasMaximas:2,
    listaEstudantes:[aluno1,aluno2],
    adicionarAluno:function(aluno){ 
        this.listaEstudantes.push(aluno)
    },
    alunoAprovado:function(aluno){
        if (aluno.calcularMedia()>=this.notaDeAprovacao){
            if(aluno.faltas<this.faltasMaximas){
                return true
            }
            else if(aluno.faltas==this.faltasMaximas && aluno.calcularMedia()>this.notaDeAprovacao+this.notaDeAprovacao*0.1){
                return true
            }

            return false
            

            
    }return false

    },
    listaAprovacao:function(){
        const aprovacao=[]
        for(let i=0;i < this.listaEstudantes.length;i++)
        {aprovacao.push(this.alunoAprovado(this.listaEstudantes[i]))}
        return aprovacao

    } 
    

}
const aluno3 = new Aluno('Joana',2,[8,8,9.5])
curso.adicionarAluno(aluno3)
console.log(curso.listaEstudantes)
console.log(curso.alunoAprovado(aluno1))
console.log(curso.alunoAprovado(aluno3))
console.log(curso.listaAprovacao())


/*Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), 
quantidade de faltas (number) e notas (array de números).

Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. 
Crie alguns alunos para testar a sua função construtora. 
crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).

Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. */





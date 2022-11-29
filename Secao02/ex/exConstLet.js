const nome = "Kennedy"
        const sobrenome = "Martins"
        const idade = 20
        const peso = 70
        const altura = 1.89
        let anoNascimento = 2002
        // peso / (altura*altura)
        let imc = peso / (altura*altura) 

        // Concatenação
        console.log(nome+" "+sobrenome+ " tem "+idade+" anos, pesa "+peso+"kg")
        console.log("tem "+altura+" de altura e seu IMC é de "+imc.toFixed(2))
        console.log(nome+" "+sobrenome+" nasceu em "+anoNascimento+", e tem "+idade+" anos")

        // Outra alternativa de separação por virgula
        // console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')

        // Interpolação
        // console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
        // console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
        // console.log(`${nome} nasceu em ${anoNascimento}.`);
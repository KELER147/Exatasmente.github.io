let questions = [
    {
        numb: 1,
        question: "(ENEM 2021) A água potável é um recurso natural essencial para a vida. No entanto, apenas 2,5% da água do planeta é doce e, dessa parcela, menos de 1% está disponível para consumo humano. A água subterrânea representa a maior parte da água doce e, se mal gerenciada, pode ser contaminada por atividades antrópicas. Um dos principais problemas que podem contaminar as águas subterrâneas é: ",
        answer: "A. O descarte inadequado de lixo industrial.",
        options: [
            "A. O descarte inadequado de lixo industrial.",
            "B. O uso excessivo de agrotóxicos na agricultura.",
            "C. A construção de barragens para geração de energia.",
            "D. O desmatamento de áreas de mata ciliar."
        ]
    },
    {
        numb: 2,
        question: "(ENEM 2020) A produção de alimentos envolve etapas que se iniciam na produção de insumos, como fertilizantes e agrotóxicos, e culminam no processamento e distribuição. Em cada etapa, há consumo e geração de energia, além de produção de resíduos, o que contribui para a intensificação do efeito estufa.",
        answer: "D. Consumir alimentos orgânicos.",
        options: [
            "A.  Utilizar agrotóxicos menos persistentes no ambiente.",
            "B. Adotar técnicas de irrigação por aspersão.",
            "C. Usar embalagens biodegradáveis para produtos industrializados.",
            "D. Consumir alimentos orgânicos."
        ]
    },
    {
        numb: 3,
        question: "(ENEM 2019) A produção industrial de biodiesel envolve a reação de transesterificação de óleos vegetais ou gorduras animais com álcoois, na presença de catalisadores. A reação de transesterificação é:",
        answer: "C. Uma reação de substituição.",
        options: [
            "A. Uma reação de adição.",
            "B. Uma reação de eliminação.",
            "C. Uma reação de substituição.",
            "D. Uma reação de oxidação."
        ]
    },
    {
        numb: 4,
        question: "(ENEM 2018) A gasolina é uma mistura de hidrocarbonetos que contém diferentes quantidades de compostos orgânicos voláteis. A medida da quantidade de compostos orgânicos voláteis na gasolina é: ",
        answer: "B. O índice de octanagem.",
        options: [
            "A. A densidade.",
            "B. O índice de octanagem.",
            "C. O ponto de ebulição.",
            "D. O ponto de fusão."
        ]
    },
    {
        numb: 5,
        question: " (ENEM 2017) O processo de obtenção de sal de cozinha (NaCl) a partir da água do mar envolve a evaporação da água, deixando o sal como resíduo. O processo de evaporação da água do mar é:",
        answer: "A. Um processo físico.",
        options: [
            "A. Um processo físico.",
            "B. Um processo químico.",
            "C. Uma reação de síntese.",
            "D. Uma reação de decomposição."
        ]
    },
    {
        numb: 6,
        question: " (ENEM 2016) A água potável é um recurso natural essencial para a vida. No entanto, a qualidade da água está sendo comprometida pela poluição. Um dos principais problemas que podem contaminar a água potável é:",
        answer: "A. A presença de metais pesados.",
        options: [
            "A. A presença de metais pesados.",
            "B. A presença de sais minerais.",
            "C. A presença de oxigênio.",
            "D. A presença de gás carbônico."
        ]
    },
    {
        numb: 7,
        question: " (ENEM 2015)A água sanitária é uma solução aquosa de hipoclorito de sódio (NaClO). A função química do hipoclorito de sódio é:",
        answer: "C. Um sal.",
        options: [
            "A. Um ácido.",
            "B. Uma base",
            "C. Um sal.",
            "D. Um óxido."
        ]
    },
    {
        numb: 8,
        question: "(Enem 2022) A química está presente em diversas áreas do nosso cotidiano, desde a produção de alimentos até o desenvolvimento de medicamentos. Um exemplo disso é a reação de neutralização, que ocorre quando um ácido reage com uma base, formando sal e água. Qual dos seguintes produtos é resultado da reação de neutralização?",
        answer: "C. Leite de magnésia",
        options: [
            "A. Sabão.",
            "B. Vinagre.",
            "C. Leite de magnésia.",
            "D. Suco de limão."
        ]
    },
    {
        numb: 9,
        question: " (Enem 2021) A água potável é um recurso natural essencial para a vida. No entanto, a poluição por esgoto e a contaminação por agrotóxicos são problemas que afetam a qualidade da água em muitos locais. Qual dos seguintes processos é mais eficaz para remover a maioria dos contaminantes da água, tornando-a potável?",
        answer: "B. Destilação",
        options: [
            "A. Filtração simples.",
            "B. Destilação.",
            "C. Adição de cloro.",
            "D. Evaporação."
        ]
    },
    {
        numb: 10,
        question: "(Enem 2020)** A tabela periódica é uma ferramenta fundamental para o estudo da química, organizando os elementos químicos de acordo com suas propriedades. Qual das seguintes características é utilizada como critério principal para a organização dos elementos na tabela periódica?",
        answer: "A. Número atômico.",
        options: [
            "A. Número atômico.",
            "B. Massa atômica.",
            "C. Número de prótons.",
            "D. Número de nêutrons."
        ]
    },
    {
        numb: 11,
        question: "(Enem 2019) A reação de combustão é um processo químico que libera energia na forma de calor e luz. Qual dos seguintes combustíveis é considerado uma fonte de energia renovável?",
        answer: "D. Biodiesel.",
        options: [
            "A. Gás natural.",
            "B. Carvão mineral.",
            "C. Óleo diesel.",
            "D. Biodiesel."
        ]
    },
    {
        numb: 12,
        question: "(Enem 2018) O ozônio (O3) é um gás presente na atmosfera terrestre que absorve radiação ultravioleta (UV) do Sol, protegendo a vida na Terra. Qual das seguintes reações químicas representa a formação do ozônio na atmosfera?",
        answer: "A. O2 + O → O3.",
        options: [
            "A. O2 + O → O3.",
            "B. O3 + O → 2O2.",
            "C. O2 + UV → 2O.",
            "D. O + UV → O2."
        ]
    },
    {
        numb: 13,
        question: "(Enem 2017)A pilha é um dispositivo que converte energia química em energia elétrica. Qual dos seguintes materiais é utilizado como eletrodo negativo em uma pilha de Daniell?",
        answer: "A. Zinco (Zn).",
        options: [
            "A. Zinco (Zn).",
            "B. Cobre (Cu).",
            "C. Carbono (C).",
            "D. Hidrogênio (H)."
        ]
    },
    {
        numb: 14,
        question: "(Enem 2016) A água é uma substância essencial para a vida na Terra. Qual das seguintes propriedades da água é fundamental para o transporte de nutrientes nas plantas? ",
        answer: "C. Força de coesão.",
        options: [
            "A. Ponto de fusão alto.",
            "B. Alta capacidade térmica.",
            "C. Força de coesão.",
            "D. Densidade máxima a 4°C."
        ]
    },
    {
        numb: 15,
        question: "(Enem 2015)O pH é uma escala que indica a acidez ou basicidade de uma solução. Qual dos seguintes valores de pH corresponde a uma solução ácida? ",
        answer: "A. 1",
        options: [
            "A. 1.",
            "B. 7.",
            "C. 10.",
            "D. 14."
        ]
    },
    {
        numb: 16,
        question: "(Enem 2014) A química orgânica é o ramo da química que estuda os compostos de carbono. Qual dos seguintes compostos é um hidrocarboneto?",
        answer: "D. Metano (CH4)",
        options: [
            "A. Metanol (CH3OH).",
            "B. Etanol (C2H5OH).",
            "C. Ácido acético (CH3COOH).",
            "D. Metano (CH4)."
        ]
    },
    {
        numb: 17,
        question: " (Enem 2023) O tratamento do esgoto gerado por fábricas e residências pode se tornar mais acessível em virtude de uma nova proposta tecnológica, que utiliza um reator capaz de transformar nitrogênio orgânico, presente no esgoto, em nitrogênio inorgânico. A tecnologia prevê o uso de um cilindro de acrílico com espuma de poliuretano em seu interior, sob a qual se fixam bactérias capazes de tratar o efluente. As bactérias que ficam no exterior da espuma realizam reações de nitrificação desse substrato, e as que ficam no interior da espuma realizam reações de desnitrificação. Na primeira etapa do processo, que ocorre no exterior da  espuma, a ação das bactérias consiste em",
        answer: "D. Utilizar O2 para transformar amônia (NH3) em nitritoe, após, em nitrato.",
        options: [
            "A. Converter nitrogênio gasoso (N2) em fertilizante.",
            "B. Usar CO2 para converter nitrato em nitrogênio gasoso (N2)",
            "C. Transformar a matéria orgânica morta em íons amônio (NH4+).",
            "D. Utilizar O2 para transformar amônia (NH3) em nitritoe, após, em nitrato."
        ]
    },
    {
        numb: 18,
        question: " (Enem 2023) As anfetaminas são drogas sintéticas utilizadas como moderadores de apetite no tratamento de obesidade. Essas drogas atuam sobre receptores celulares estimulando a produção de adrenalina, um hormônio catabólico responsável por várias funções fisiológicas no organismo. Entretanto, a produção exagerada desse hormônio pode gerar mudanças fisiológicas indesejáveis e até perigosas para a saúde. A alteração fisiológica observada pelo uso indevido  dessas drogas é o(a)",
        answer: "C. Aumento das secreções gastrointestinais.",
        options: [
            "A. A diminuição da pressão arterial.",
            "B. Diminuição da frequência cardíaca",
            "C. Aumento das secreções gastrointestinais.",
            "D. Aumento da concentração de glicose sanguínea."
        ]
    },
    {
        numb: 19,
        question: " (Enem 2023) Um homem submetido à vasectomia tem a conexão dos testículos com a uretra interrompida em função do corte dos canais deferentes. Esse método contraceptivo é considerado definitivo quando a cirurgia é realizada corretamente. Esse método contraceptivo é eficiente porque",
        answer: "D. impede a passagem de espermatozoides para o sêmen.",
        options: [
            "A. interrompe a liberação de sêmen.",
            "B. cessa a produção de espermatozoides.",
            "C. inibe a atividade hormonal dos testículos.",
            "D. impede a passagem de espermatozoides para o sêmen."
        ]
    },
    {
        numb: 20,
        question: "(Enem 2017) Os medicamentos são rotineiramente utilizados pelo ser humano com o intuito de diminuir ou, por muitas vezes, curar possíveis transtornos de saúde. Os antibióticos são grupos de fármacos inseridos no tratamento de doenças causadas por bactérias. Na terapêutica das doenças mencionadas, alguns desses fármacos atuam ",
        answer: "C. danificando estruturas específicas da célula bacteriana.",
        options: [
            "A. ativando o sistema imunológico do hospedeiro.",
            "B. interferindo na cascata bioquímica da inflamação.",
            "C. danificando estruturas específicas da célula bacteriana.",
            "D. combatendo as células hospedeiras das bactérias."
        ]
    },
    {
        numb: 21,
        question: "(ENEM 2017) Os principais constituintes do ar atmosférico são os gases nitrogênio (N₂) e oxigênio (O₂). A porcentagem aproximada desses gases no ar é, respectivamente:    ",
        answer: "B. 79% e 21%",
        options: [
            "A. 21% e 79%",
            "B. 79% e 21%",
            "C. 50% e 50%",
            "D. 100% e 0%"
        ]
    },
    {
        numb: 22,
        question: "(ENEM 2016) O ácido clorídrico (HCl) é um ácido forte que ioniza completamente em solução aquosa. Qual das seguintes soluções aquosas de HCl possui a maior concentração de íons hidrogênio (H⁺)?",
        answer: "D. 0,5 mol/L",
        options: [
            "A. 0,1 mol/L",
            "B. 0,2 mol/L",
            "C. 0,4 mol/L",
            "D. 0,5 mol/L"
        ]
    },
    {
        numb: 23,
        question: "(ENEM 2018)A reação de decomposição da água oxigenada (H₂O₂) produz água e oxigênio gasoso. A equação balanceada dessa reação é:",
        answer: "B. 2 H₂O₂ → 2 H₂O + O₂",
        options: [
            "A. H₂O₂ → H₂O + O₂",
            "B. 2 H₂O₂ → 2 H₂O + O₂",
            "C. 2 H₂O₂ → 2 H₂O + 2 O₂",
            "D. H₂O₂ → 2 H₂O + O₂"
        ]
    },
    {
        numb: 24,
        question: "(ENEM 2015) O etanol é utilizado como combustível em muitos países. A equação química que representa a combustão completa do etanol (C₂H₅OH) é:",
        answer: "B. C₂H₅OH + 2 O₂ → 2 CO₂ + 3 H₂O",
        options: [
            "A. C₂H₅OH + O₂ → 2 CO₂ + 3 H₂O",
            "B. C₂H₅OH + 2 O₂ → 2 CO₂ + 3 H₂O",
            "C. C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O",
            "D. C₂H₅OH + 2 O₂ → 2 CO + 3 H₂O"
        ]
    },
    {
        numb: 25,
        question: "(ENEM 2017) A principal aplicação do hidróxido de sódio (NaOH) é:",
        answer: "A. Fabricação de sabões e detergentes",
        options: [
            "A. Fabricação de sabões e detergentes",
            "B. Fabricação de fertilizantes",
            "C. Produção de bebidas alcoólicas",
            "D. Fabricação de plásticos"
        ]
    }
];

let selectedQuestions = [];
let questionCount = 0;
let userScore = 0;
let optionSelectedFlag = false;

document.addEventListener('DOMContentLoaded', function() {
    let nextBtn = document.querySelector('.next-btn');
    let optionList = document.querySelector('.option-list');
    let pontuaçãoBtn = document.querySelector('.Pontuação-btn');
    let novamenteBtn = document.querySelector('.Novamente-btn');
    let questionNumb = 1;

    // Função para sortear 5 perguntas aleatórias
    function getRandomQuestions() {
        let shuffled = questions.sort(() => 0.25 - Math.random());
        return shuffled.slice(0, 5);
    }

    // Inicializa o quiz com 5 perguntas aleatórias
    function initializeQuiz() {
        selectedQuestions = getRandomQuestions();
        userScore = 0;
        questionCount = 0;
        questionNumb = 1;
        headerScore();
        showQuestions(questionCount);
        questionCounter(questionNumb);
    }


    nextBtn.onclick = () => {
        if (optionSelectedFlag) {
            if (questionCount < selectedQuestions.length - 1) {
                questionCount++;
                questionNumb++;
                showQuestions(questionCount);
                questionCounter(questionNumb);
                optionSelectedFlag = false;
            } else {
                console.log('Question Completed');
                pontuaçãoBtn.classList.add('active');
                nextBtn.classList.remove('active');
                novamenteBtn.classList.add('active');
    
                // Adicionando a funcionalidade do alerta aqui
                var pontuação = userScore; // Supondo que pontuaçãoBtn seja a pontuação do quiz
                if (pontuação >= 3) {
                    alert(`Parabéns pelo o resultado. Sua pontuação é: ${userScore}`);
                } else {
                    alert(`Parabéns por tentar! Continue se esforçando. Sua pontuação é: ${userScore}`);
                }
            }
        }
    };
    

    function showQuestions(index) {
        const questionText = document.querySelector('.question-text');
        questionText.textContent = `${questionNumb}. ${selectedQuestions[index].question}`;
        let optionTag = `
            <div class="option"><span>${selectedQuestions[index].options[0]}</span></div>
            <div class="option"><span>${selectedQuestions[index].options[1]}</span></div>
            <div class="option"><span>${selectedQuestions[index].options[2]}</span></div>
            <div class="option"><span>${selectedQuestions[index].options[3]}</span></div>`;
        optionList.innerHTML = optionTag;

        const option = document.querySelectorAll('.option');
        for (let i = 0; i < option.length; i++) {
            option[i].addEventListener('click', () => {
                optionSelected(option[i]);
            });
        }

        nextBtn.classList.remove('active');
    }

    function questionCounter(index) {
        const questionTotal = document.querySelector('.question-total');
        questionTotal.textContent = `${index} de ${selectedQuestions.length} Questões`;
    }

    function headerScore() {
        const headerScoreText = document.querySelector('.header-score');
        headerScoreText.textContent = `PONTOS: ${userScore} / 5`;
    }

    function optionSelected(answer) {
        let userAnswer = answer.textContent;
        let correctAnswer = selectedQuestions[questionCount].answer;
        let allOptions = optionList.children.length;

        optionSelectedFlag = true;

        if (userAnswer == correctAnswer) {
            answer.classList.add('correct');
            userScore += 1;
            headerScore();
        } else {
            answer.classList.add('incorrect');
            for (let i = 0; i < allOptions; i++) {
                if (optionList.children[i].textContent == correctAnswer) {
                    optionList.children[i].setAttribute('class', 'option correct');
                }
            }
        }
        for (let i = 0; i < allOptions; i++) {
            optionList.children[i].classList.add('disabled');
            optionList.children[i].classList.add('no-pointer');
            optionList.children[i].removeEventListener('click', optionSelected);
        }
        nextBtn.classList.add('active');
    }

    const url = "index.html";

    function openInNewTab(url) {
        const win = window.open(url, '_blank');
        win.focus();
    }

    pontuaçãoBtn.addEventListener('click', () => {
        openInNewTab(url);
    });

    novamenteBtn.addEventListener('click', () => {
        initializeQuiz();
        pontuaçãoBtn.classList.remove('active');
        novamenteBtn.classList.remove('active');
        resultBox.classList.remove('active');
        quizSection.classList.add('active');
    });

    initializeQuiz();
});

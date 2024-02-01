document.querySelectorAll("input[type=number]").forEach(function(input) {
    input.addEventListener("input", calcularSoma); // Remova os parênteses
}); 
document.querySelectorAll("input[type=submit]").forEach(function() {
    input.addEventListener("input", PDF); 
}); 
function PDF(){
    var nome = document.getElementById("nome").value
    var CC = document.getElementById("cc").value
    var validade = document.getElementById("validade").value
    var media = calcularSoma();
    var doc = new jsPDF()
    doc.setProperties({
        title: 'Formulário PDF',
    });
    if(media < 9.5){
        doc.text(20,10,"CHUMBADO")
    }else{
        doc.text(20,10,"PASSOU")
    }
    doc.text(20,20,"Aluno: " +nome)
    doc.text(20,30,"Cartão de cidadão: " + CC)
    doc.text(20,40,"Validade do cartão de cidadão: " + validade)
    doc.text(20,50,"CFC: " + Math.round(media))
    doc.save('diploma.pdf');
}
function calcularSoma() {
    // Disciplinas de Componente Geral
    var portugues1 = parseFloat(document.getElementById("Port1").value) || 0;
    var portugues2 = parseFloat(document.getElementById("Port2").value) || 0;
    var portugues3 = parseFloat(document.getElementById("Port3").value) || 0;

    var ingles1 = parseFloat(document.getElementById("Ing1").value) || 0;
    var ingles2 = parseFloat(document.getElementById("Ing2").value) || 0;

    var filosofia1 = parseFloat(document.getElementById("Filos1").value) || 0;
    var filosofia2 = parseFloat(document.getElementById("Filos2").value) || 0;

    var ef1 = parseFloat(document.getElementById("Ef1").value) || 0;
    var ef2 = parseFloat(document.getElementById("Ef2").value) || 0;

    // Disciplinas de Componente Científica
    var mat1 = parseFloat(document.getElementById("Mat1").value) || 0;
    var mat2 = parseFloat(document.getElementById("Mat2").value) || 0;
    var mat3 = parseFloat(document.getElementById("Mat3").value) || 0;

    var fq1 = parseFloat(document.getElementById("Fq1").value) || 0;
    var fq2 = parseFloat(document.getElementById("Fq2").value) || 0;

    // Disciplinas de Formação Tecnológica
    var ai = parseFloat(document.getElementById("Ai").value) || 0;

    var tp1 = parseFloat(document.getElementById("Tp1").value) || 0;
    var tp2 = parseFloat(document.getElementById("Tp2").value) || 0;

    var fac1 = parseFloat(document.getElementById("Fac1").value) || 0;
    var fac2 = parseFloat(document.getElementById("Fac2").value) || 0;

    var iebd1 = parseFloat(document.getElementById("Iebd1").value) || 0;
    var iebd2 = parseFloat(document.getElementById("Iebd2").value) || 0;

    var pt1 = parseFloat(document.getElementById("Pt1").value) || 0;
    var pt2 = parseFloat(document.getElementById("Pt2").value) || 0;

    var pi = parseFloat(document.getElementById("Pi").value) || 0;

    var tdm = parseFloat(document.getElementById("Tdm").value) || 0;

    var med1 = parseFloat(document.getElementById("Med1").value) || 0;
    var med2 = parseFloat(document.getElementById("Med2").value) || 0;
    var med3 = parseFloat(document.getElementById("Med3").value) || 0;

    var fct = parseFloat(document.getElementById("Fct").value) || 0;
    var pap = parseFloat(document.getElementById("Pap").value) || 0;

    // Calcular a soma de cada componente
    var componenteGeral = (portugues1 + portugues2 + portugues3 + ingles1 + ingles2 + filosofia1 + filosofia2 + ef1 + ef2) / 9;
    var componenteCientifica = (mat1 + mat2 + mat3 + fq1 + fq2)/5;
    var formacaoTecnologica = (ai + tp1 + tp2 + fac1 + fac2 + iebd1 + iebd2 + pt1 + pt2 + pi + tdm + med1 + med2 + med3)/14;

    var media = (fct*0.11 + pap * 0.23 + componenteCientifica *0.22 + componenteGeral * 0.22 + formacaoTecnologica*0.22)
    document.getElementById("media").textContent = "Média: " + media.toFixed(2)
    return media;
}
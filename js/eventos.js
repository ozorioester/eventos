
//baixa o conteudo json e cria a variavel dados
$.getJSON("model/eventos_listar.php", function(dados){
    
    // para cada item em dados gera um valor
    dados.forEach(function(valor){

        var data = valor.datahora.split(" ");
        var dia = data[0].split("-");
        var hora = data[1].split(":");

        var dataFormatado = dia[2]+"/"+dia[1]+"/"+dia[0];
        dataFormatado += " "+hora[0]+":"+hora[1];

        // gerando a linha com o dados
        var tr = "<tr>"
            +"<td>"+ valor.id +"</td>"
            +"<td>"+ valor.nome +"</td>"
            +"<td>"+ dataFormatado +"</td>"
            +"<td>"+ valor.local +"</td>"
            +"<td>[Editar] [Deletar]</td>"
            +"</tr>";
        
        // adiciona na tabela    
        $("#lista-eventos").append(tr);

    }); // fim do forEach

}); // fim do getJSON

// enviar o form
$("#btn-salvar").click(function(){

    var erro = false;

    //verifica cada input do formulario
    $('#form-eventos input').each(function(el){
        $(this).removeClass("is-invalid");
        
        if ($(this).val() == "")
        {
            erro = true;
            $(this).addClass("is-invalid");
        }
    }); //fim do each

    if (erro == false)
    {
        var dados = {
            nome: $("#input-nome").val(),
            local: $("#input-local").val(),
            datahora: $("#input-datahora").val(),
            descricao: $("#text-descricao").val(),
            preco: $("#input-preco").val()
        };

        // Envia os dados do formulario via ajax
        $.post("model/eventos_cadastrar.php", dados, function(retorno, status){
            
            $("#cadastrar-evento").modal('hide');
            $("#alert-cadastro").show();

        }); //fim do post
    } //fim do if
    
}); //fim do button click

//formata data no input
$("#input-datahora").datepicker({
    format: "dd/mm/yyyy",
    startDate: "today",
    language: "pt-BR",
    todayHighlight: true
});

// mascara do valor do preço
$("#input-preco").mask('000.000,00', {reverse: true});
//chamando o documento
$(document).ready(function(){
	
	//exibindo o troco incial
	$("#Troco").text($("#TotalCompra").val());
	

	var tot = $("#TotalCompra");

 $("#c-din").click(function () {  
      if( $("#c-din").is(':checked') ){
            $("#Dinheiro").attr("disabled",false);
             
      } else {
            $("#Dinheiro").attr("disabled",true);
			$("#Dinheiro").val("");
       }
  
   });
   
    $("#c-car").click(function () {  
      if( $("#c-car").is(':checked') ){
            $("#Cartao").attr("disabled",false);
             
      } else {
            $("#Cartao").attr("disabled",true);
			$("#Cartao").val("");
       }
  
   });
	$("#deve").text(tot.val())
	$("#troco").text("0,00")
//exibindo o saldo devedor
	$("#calcula").click(function(event){
		event.preventDefault();
		//console.log($("#Dinheiro").val());
		var deve = (tot.val() - $("#Dinheiro").val())-$("#Cartao").val();
		$("#deve").text(deve);
		
		if($("#deve").text() < 0){
			$("#deve").text("0,00")
			
			deve = deve*(-1);
			$("#troco").text(deve);
		}
	});
	
//////////////////////////estoque/////////////////////////////////////////////////////////////////////////
//seleciona quantidade a ser retirada
var campoRetira = document.querySelector("#retira");
//seleciona qtd em estoque
var qtdEstoque = document.getElementById("qtd");

                

campoRetira.addEventListener("input", function(event){
event.preventDefault();
	
	
	var toT = qtdEstoque.innerHTML - campoRetira.value;
	console.log("-->"+qtdEstoque.innerHTML);
	console.log(campoRetira.value);
	console.log(toT);
	
	 document.getElementById("resta").innerHTML = toT;
	
	if(toT < 0){
		document.querySelector('#t').classList.remove("msg");
		document.querySelector('#t').classList.add("msg-n");
	}else{
		document.querySelector('#t').classList.remove("msg-n");
		document.querySelector('#t').classList.add("msg");
	}
	
});
	
});
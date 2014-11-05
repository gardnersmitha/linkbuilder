$(document).ready(function(){
	buildLink();
	copyLink();
});

function buildLink(){
	$('#url-builder').submit(function(e){

		var url = $('#url').val();
		var desk = $('#desk').val();
		var source = $('#source').val();
		var keyword = $('#keyword').val();

		url = url+'?utm_medium=Social&utm_source='+source+'&utm_term='+keyword+'&utm_campaign='+desk;

		$('#output-url').val(url);
		$('.output').show();

		e.preventDefault();
	});
}

function copyLink(){
	$('.copy').click(function(){
		alert('Copy feature coming soon! Use Cmd-C for now.');
	});
}
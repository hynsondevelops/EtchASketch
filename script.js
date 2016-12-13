$(document).ready(function()
{
	//load grid woo
	$h1 = $("<h1> Etch A Sketch </h1>");
	$div = $("<div id = 'grid'> </div>");
	$("body").append($h1, $div);
	CreateGrid(5);
	ColorUnit();
});

function CreateGrid(size) 
{
	$div = "<div class = 'unit'></div>";
	for (i = 0; i < size; i++)
	{
		$("#grid").append($div);
	}
}

function ColorUnit()
{
	$('unit').mouseenter(function()
	{
		$(this).css('background-color', 'black');
	})
}
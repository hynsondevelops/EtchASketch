$(document).ready(function()
{
	//load grid woo
	$h1 = $("<h1> Etch A Sketch </h1>");
	$grid = $("<div id = 'grid'> </div>");
	$("body").append($grid);
	CreateGrid(5);
});

function CreateGrid(size) 
{
	for (i = 0; i < size; i++)
	{
		$(".grid").append("<div> class = 'unit'></div>");
	}
}
$(document).ready(function()
{
	//load grid woo
	$h1 = $("<h1> Etch A Sketch </h1>");
	$div = $("<div id = 'grid'> </div>");
	CreateGrid(5);
});

function CreateGrid(size) 
{
	for (i = 0; i < size; i++)
	{
		$(".grid").append("<div> class = 'unit'></div>");
	}
}
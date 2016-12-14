$(document).ready(function()
{
  $div = $("<div id = 'grid'> </div>");
  $buttonReset = $("<button id = 'reset' type='button'>Reset</button>");
  $buttonResize = $("<button id = 'resize' type = 'button'>Resize</button>");
  $header = $("<header><h1> Etch A Sketch </h1> <p>Created by Adam Hynson</p> <button id = 'githubButton'><a id = 'githubtext' href = 'https://github.com/hynsondevelops'>Github</a></button></header>'");
  $("body").append($header, $div, $buttonReset, $buttonResize);
  CreateGrid(10); //Default grid is 10x10
  ResetGrid();
  ResizeGrid();
});

function ResizeGrid()
{
  $('#resize').click(function()
  { 
      var newSize = parseInt(prompt("Enter new grid size (up to 100x100)"));
      while (newSize > 100 || newSize < 1)
      {
        newSize = parseInt(prompt("Grid size invalid. Enter new grid size (up to 100x100)"));
      }
      $('.unit').remove();
      CreateGrid(newSize);
  })
  return false;
}

function CreateGrid(size) 
{
  $div = "<div class = 'unit'></div>";
  for (i = 0; i < size*size; i++)
  {
    $("#grid").append($div);
  }
  newUnitSize = 500/size; //500 is size of grid
  $('.unit').height(newUnitSize);
  $('.unit').width(newUnitSize);
  ColorUnit();
  return false;
}

function ColorUnit()
{
  $('.unit').mouseenter(function()
  {
    $(this).css('background-color', 'black');
  })
  return false;
}

function ResetGrid()
{
  $('#reset').click(function()
  {
      $('.unit').css('background-color', 'white');      
  })
  return false;
}



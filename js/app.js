$(document).ready(function(){

  //Global Variables
  var checkMark = '<span class="mark-off"></span>'
  var deleteMark = '<span class="delete"></span>'

  // Get item from field after enter keystroke
  $('#add-item').keyup(function(event) {
    if (event.keyCode == 13) {
      addItem();
    };
  })

  function addItem() {
    var item = $('#add-item').val();
    var newItem = "<p class='active-item'>" + deleteMark + item + checkMark + "</p>"
    $('#item-list').prepend(newItem);
    $('#add-item').val('');
    console.log('item was added');
  }

  // Reset button removes all list items
  $('button').on('click', function() {
    console.log('Reseting list');
    $('#item-list').empty();
  });

  // Marks item as complete
  $(document).on('click', '.mark-off', function() {
    var itemSelected = $(this).closest("p");
    console.log('Check mark was clicked');
    $(this).css({ 'background-image': 'none'});
    itemSelected.addClass('inactive-item').removeClass('active-item')
    .hide()
    .appendTo("#item-list")
    .fadeIn("slow");
  });

  // Remove item from list
  $(document).on('click', '.delete', function() {
    console.log('Removing item');
    $(this).closest("p").hide(500, function() {
      $(this).closest("p").remove();
    });
  });

});
"use strict";
function addItem(){
    $('#js-shopping-list-form').submit(event =>{
        // prevents page from reseting after refresh
        event.preventDefault();

        // Using this keyword & sets variable to shopping entry
        let userItem = $(this).find(`#shopping-list-entry`).val();

        // Tests the output of shopping entry.
        //console.log(userItem);
   

        /* Targets Add item button and adds onto list 
        No longer needs .check because the .submit at beginning of 
        function already checks input */
            $('ul').append($(`<li>
            <span class="shopping-item">${userItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
          ));

        });

        /* Targets the check buttons on
        grocery list */
        $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
            event.preventDefault();

            $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

        });
       
            
          /* Targets the delete buttons on
        grocery list */
         $('.shopping-list').on('click','.shopping-item-delete', function(event){
            event.preventDefault();
            $(this).closest('li').remove();

        });
};

$(addItem);

$(document).ready(function(){

  url = "https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json";

     $.getJSON(url, function(data) {

       $.each(data, function(i, value) {

         var key = "#"+data[i].id;

         $("#portfolio").append(
           `
              <li>

                <div class="collapsible-header blue-grey lighten-3 row" id="${data[i].name}">
                <i class="material-icons col s2">assessment</i>
                <p class="collapsible-title col s2">${data[i].name}</p>
                <p class="header-info col s2"></p>
                <p class="header-info col s2"></p>
                <p class="header-info col s2">${data[i].quantity} <span class="dollar-sign">$</span> </p>
                <p class="header-info col s2">${data[i].cost.$}</p>
                </div>

                <div class="collapsible-body data" id="${data[i].id}"></div>

              </li>
           `
         );
         $.each(value.issued_assets, function(j) {

           $(key).append(
             `
              <div id="${value.issued_assets[j].asset_class}">
              <div class="body-info row">
                <p class="body-sub-info col s2 offset-s2"></p>
                <p class="body-sub-info col s2">${value.issued_assets[j].asset_class}</p>
                <p class="body-sub-info col s2">${value.issued_assets[j].investment_date}</p>
                <p class="body-sub-info col s2">${value.issued_assets[j].quantity} <span class="dollar-sign">$</span> </p>
                <p class="body-sub-info col s2">${value.issued_assets[j].cost.$}</p>
              </div>
              </div>
             `
           );

         });
       });

     });

     // Customize format in datepicker
     const Calender = $('.datepicker').datepicker();
     M.Datepicker.init(Calender,{
       format:'mm/dd/yyyy'
     });

     // Initialize variables for later use
     let filterDate;
     let collapsibleText;

     $("#filter-button").click(function(){

       // Get date from date picker
       filterDate = $("#date").val();

       $("li div:first-child .collapsible-title").each(function(i) {

         $(".collapsible-body").each(function(j) {

           collapsibleText = $(this).text();
           collapsibleChildren = $(this).children();

           if(collapsibleText.includes(filterDate) == false) {

             $('.collapsible-body div').each(function(k){

               childText = $(this).text();

               if(childText.includes(filterDate) == false) {
                 $(this).fadeOut();
               } else {
                 $(this).fadeIn();
               };

             });

             $(this).parent().fadeOut();

           } else {
             $(this).parent().fadeIn();
           };

         });

       });

     });

     $('.collapsible').collapsible();

});

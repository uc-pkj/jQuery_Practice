// to check that our page is loads or not / ALWAYS WRITE CODE INSIDE .READY FUNCTION
// "$" & "$(document).ready()" BOTH ARE SAME I.E. $ IS SHORTCUT FOR THIS LINE 👆
// $ for open source community or for own use but $(document).ready() is for production version.
// $(document).ready(function () {
$(function () {
  // write all jQuery code here

  console.log("i'm loads after document load");
  // console.log($);
  // $ is also called/written as jQuery
  // console.log(jQuery);
  // console.log("we are using jQuery");

  //SYNTEX
  //$('selector').action()
  // $('p').click() //click on p
  // $('p').click(function () {
  // console.log("YOu click on p")

  //to hide all <p> elements
  // $('p').hide();

  //to hide any certain element
  // $(this).hide();

  //to do work on based on ID
  // $('#id1').hide();

  //to do work on based on class
  // $('.class1').hide();

  // }) // do this when click on p

  /**
   * there are three type of selector in JQuery i.e.
   * 1. element selector
   * eg:- $('p').action()
   *
   * 2. id selector
   * eg:- $('#id').action()
   *
   * 3. class selector
   * eg:- $('.class').action()
   *
   * 4. universal/all selector
   * eg:- $('*').action()
   */

  /**
   * $("p").click(function () {
   * console.log("You click on this element", this);
   *  }); // print element on click on console
   * */

  // $('p').click()
  // $('*').click() //universal selector
  // $('p.class2').click() // selector with element with class
  // $('p:first').click() // first element selector
  //
  //
  //
  // jQuery Events
  // there are alots of events are available eg.
  // Mouse Events = click, dbclick, mouseenter, mouseleave;e
  // $('p').on({
  //     click: function() {
  //         console.log("clicked");
  //     },
  //     mouseleave: function() {
  //         console.log("mouseleave")
  //     }
  // })
  //
  //
  //
  //   $(selector).hide(speed, callback);
  //   $(selector).show(speed, callback);
  //   $("#wik").hide(1000, function () {
  //     console.log("hidden");
  //   });

  $("#btn").click(function () {
    // TOOGLE HIDE/SHOW DIV CONTENT
    // $('#wik').toggle(1000);

    //FADEOUT DIV CONTENT
    // $('#wik').fadeOut(1000,function() {
    //empty
    // })

    //FADEIN DIV CONTENT
    // $('#wik').fadeIn(1000,function() {
    //empty
    // })

    //fadetoogle div content
    // $('#wik').fadeToggle(1000,function() {
    //empty
    // })

    //fadeto div content
    // $("#wik,p").fadeTo(1000, 0.4);

    //slideup div content
    // $("#wik").slideUp();

    //slidedown div content 👇
    // $("#wik").slideDown();

    //slidetoggle div content 👇
    // $("#wik").slideToggle(2000,function() {
    //     console.log("done");
    // });

    //animation in jQuery 👇
    // $("p").animate({
    //     opacity:0.2,
    //     height:"200px",
    // },2000)

    //you can use "slow", "fast" instead of seconds(milliseconds) timer

    //queue in jQuery
    // $("#wik").animate({opacity:0.2},2000)
    // $("#wik").animate({opacity:0.9},2000)
    // $("#wik").animate({width:"300px"},12000)

    //to stop animate in middle at anytime
    // $("#wik").stop()

    //to show text inside using selector in jQuery
    // $("#wik").text()

    //to set text inside using selector in jQuery
    // $("#wik").text("pankaj")

    //to show html inside using selector in jQuery
    // $("#wik").html
    
    //to set html inside using selector in jQuery
    // $("#wik").html(pankaj)

    //to show value of form fields
    // $("#wik").val()

    //to set value of form fields
    // $("#wik").val("pankaj")

    //to empty any element 
    // $(selector).empty();

    //to delete any element
    // $(selector).remove();

    // to add custom classes using J query
    // $(selector).addClass(className);

    // To remove custom classes using J query
    // $(selector).removeClass(className);

    // to add CSS  in J query
    // $(selector).css(propertyName, value);
    // $("#wik").css("background-color", "red");
    // to get background color in cosole 👇
    // console.log($("#wik").css("background-color"))

    // using ajax in J query
    // #template 👇
    // $.get("url", data,
    //     function (data, textStatus, jqXHR) {
            
    //     },
    //     "dataType"
    // );
    // $.get("https://code.jquery.com/jquery-3.6.0.js",function (data, status) {
    //         alert(status);
    //     }
    // );


  });
  
});
console.log("i'm loads before document load");

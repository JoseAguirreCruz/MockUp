$(document).ready(function() {

    function adjustNav() {
        var windowWidth = $(window).width();
        if (windowWidth <= 1024 && windowWidth >= 769) {
          // Show the "More" dropdown and hide specific nav items
        $(".more-dropdown").show();
          $(".nav-links > li").slice(5, 9).hide(); // Adjust indices if necessary
        } else {
          // Hide the "More" dropdown and show all nav items
        $(".more-dropdown").hide();
          $(".nav-links > li").slice(5, 9).show(); // Adjust indices if necessary
        }
    }
    
      // Adjust nav on page load
    adjustNav();
    
      // Adjust nav whenever window is resized
    $(window).resize(adjustNav);

  // Script for hamburger menu
$(".hamburger-menu").click(function() {
    $("#mobile-nav").slideToggle("slow");
});

  // Script for dropdown on click
$('.dropdown > a').on('click', function(e) {
      e.preventDefault(); // Prevent the default action of the anchor tag
    var dropdownContent = $(this).next('.dropdown-content');
    dropdownContent.slideToggle("slow");

      // Toggle "active" class for the clicked dropdown
    $(this).parent('.dropdown').toggleClass('active');

      // Close other dropdowns and remove their "active" class
    $('.dropdown').not($(this).parent('.dropdown')).find('.dropdown-content').slideUp("slow");
    $('.dropdown').not($(this).parent('.dropdown')).removeClass('active');
});

  // Close the dropdown when clicking outside it
$(document).on('click', function(e) {
    if (!$(e.target).closest('.dropdown').length) {
        $('.dropdown-content').slideUp("slow");
          $('.dropdown').removeClass('active'); // Remove the "active" class when clicking outside
    }
});

  // Prevent dropdown menu from closing when clicking on it
$('.dropdown-content').click(function(e) {
    e.stopPropagation();
});
});

var description1 = "Web Developer, passionate about technology, cooking and good movies.";
var description2 = "I always wanted to work with technology. Right after I started College, I started my career as a Web Developer.";
var description3 = "After a total five years at a website developing company called Netzee Digital Agency, I decided to have an international experience living in the United States for two years.";
var description4 = "On my last 3 months, I decided to take the Coding Boot Camp at UC Berkeley, one of the best Universities in the country. It's been great and I'm living the best moment in my life.";

var count = 0;
$(document).ready(function() {

    $(".fancybox").fancybox();

    showText(".description-1", description1, 0, 100);

    $(".navigation").on("click", function(event) {

        var target = $(this).attr("href");

        event.preventDefault();
        $("html, body").animate({ scrollTop: $(target).offset().top }, 1000);
      
    });

    $(".skill").on("click", function(event) {

        event.preventDefault();

    });

    $(".skill").mouseenter(function(e) {
        e.stopPropagation();
        var newText = $(this).attr("tech")+" "+$(this).attr("percent");
        $(this).text(newText);
      })
      .mouseleave(function(e) {
            e.stopPropagation();
          var oldText = $(this).attr("tech");
        $(this).text(oldText);
      });


});

$(window).scroll(function() {

    if(isScrolledIntoView($(".about-4"))) {

        if(count == 0) {

            count = 1;
            console.log("test");
            showText(".about-2", description2, 0, 55);
            showText(".about-3", description3, 0, 65);
            showText(".about-4", description4, 0, 75);

        }

    } else {

    }
});
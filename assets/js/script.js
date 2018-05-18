var description1 = "Web Developer, passionate about technology, cooking and good movies.";
var description2 = "I always wanted to work with technology. Right after I started College, I started my career as a Web Developer.";
var description3 = "After a total five years at the company, I decided to have an international experience living in the United States for two years.";
var description4 = "On my last 3 months, I decided to take the Coding Boot Camp at UC Berkeley, one of the best Universities in the country. It's been great and I'm living the best moment in my life.";

var count = 0;
$(document).ready(function() {

    showText(".description-1", description1, 0, 150);


});

$(window).scroll(function() {

    if(isScrolledIntoView($(".about-4"))) {

        

        if(count == 0) {

            count = 1;
            console.log("test");
            showText(".about-2", description2, 0, 75);
            showText(".about-3", description3, 0, 75);
            showText(".about-4", description4, 0, 75);

        }

    } else {

    }
});
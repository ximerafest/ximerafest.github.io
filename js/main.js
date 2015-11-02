jQuery(function($) {
    'use strict',

    (function menuToggle() {
        var windowWidth = $(window).width();

        if (windowWidth > 767) {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 405) {
                    $('.main-nav').addClass('fixed-menu animated slideInDown');
                } else {
                    $('.main-nav').removeClass(
                        'fixed-menu animated slideInDown');
                }
            });
        } else {
            $('.main-nav').addClass('fixed-menu animated slideInDown');
        }
    })();

    $(window).resize(function() {
        menuToggle();
    });

    $('.main-nav ul').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollOffset: 0,
        filter: ':not(.no-scroll)'
    });
    // events


    var eventInfoTmpl = _.template($("#eventInfo_tmpl").html());

    var getEvent = function(event) {
        var eventImage = $("<img>").attr("src", event.eventImageUrl)
            .attr("alt", event.eventInfoAltText);
        var eventTitle = $("<div class='event-title'>").text(event.title);
        var eventSubTitle = $("<div class='event-subtitle'>").text(event.subTitle);
        var eventSummary = $("<div class='event-item'>").append(eventImage).append(eventTitle).append(eventSubTitle);

        var closeBtn = $("<i>").addClass("close fa fa-times").click(closeEventInfoBox);
        var eventInfoDiv = $("<div class='info'>").append(eventInfoTmpl(event)).append(closeBtn);

        var next = $("<div class='next'>")
            .append($("<i>").addClass("fa fa-chevron-right"))
            .click(function(e) {
                navigateEvent($(this), true);
                e.preventDefault();
                e.stopPropagation();
            });
        var prev = $("<div class='prev'>")
            .append($("<i>").addClass("fa fa-chevron-left"))
            .click(function(e) {
                navigateEvent($(this), false);
                e.preventDefault();
                e.stopPropagation();
            });;
        var infoDivWrapper = $("<div class='infoWrapper'>").append(prev).append(eventInfoDiv).append(next);
        return $("<div class='event'>").append(eventSummary).append(infoDivWrapper);
    }

    var initEvents = function() {
        var events = [{
                title: "Primus",
                subTitle: "Best Manager",
                eventImageUrl: "images/events/Roman.png",
                civilizationTitle: "",
                summaryText1: "The Romans had many charismatic leaders during their time. They were not only good at expansion and winning wars. Their people & wealth management skills were spot on!",
                summaryText2: "They led Rome as one of the greatest civilizations in the world.",
                summaryText3: "Do you have what it takes to lead an organization as “Best Manager” just like the Romans did centuries ago?",
                paricipantNo: "1 per college",
                regFee: "Rs. 750",
                prizeMoney1: "Rs. 20,000",
                prizeMoney2: "",
                contactInfo: "Anshank (09742440425)",
                importantDetails:"",
                importantDetailsText:"",
                registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof"
            }, {
                title: "Consilium",
                subTitle: "B Plan",
                eventImageUrl: "images/events/Aztec.png",
                eventInfoAltText: "Consilium (B Plan)",
                registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof",
                civilizationTitle: "Aztec Civilisation",
                summaryText1: "The Aztecs were leaders in new product innovation. They are believed to have invented the most early forms of chocolate, popcorn, antispasmodic medication and many more.",
                summaryText2: "Support the Aztecs by showing them how a new product or service can be launched by creating a B-Plan!",
                summaryText3: "Event date - 6th November 2015",
                paricipantNo: "2 per Team",
                regFee: "Rs. 400",
                prizeMoney1: "Rs. 15,000",
                prizeMoney2: "",
                importantDetails:"documents/CONSILIUM.docx",
                importantDetailsText: "Important Details",
                contactInfo: "Priyanka (07411637955)"
            }, {
                title: "Ingenium",
                subTitle: "B-Quiz",
                eventImageUrl: "images/events/Indus%20Valley.png",
                eventInfoAltText: "Ingenium (B-Quiz)",
                eventInfoImgUrl: "images/events/infoimages/Ingenium_info.jpg",
                registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof",
                civilizationTitle: "",
                summaryText1: "One of the oldest and technologically advanced civilizations of all time! People from the valley had great amount of knowledge on a variety of fields.",
                summaryText2: "Which is what is required of managers today, knowledge across all streams. Time test your knowledge!",
                summaryText3: "Event date - 7th November 2015",
                paricipantNo: "2 per Team",
                regFee: "Rs. 400",
                prizeMoney1: "1st Rs. 15,000",
                prizeMoney2: "2nd Rs. 10,000",
                importantDetails:"",
                  importantDetailsText:"",
                contactInfo: "Ashhish (09008133577)"
            }, {
                title: "Emporio",
                subTitle: "Marketing",
                eventImageUrl: "images/events/Phoenician.png",
                eventInfoAltText: "Emporio (Marketing)",
                eventInfoImgUrl: "images/events/infoimages/Emporio_info.jpg",
                registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof",
                civilizationTitle: "Phoenician Civilisation",
                summaryText1: "The Phoenicians are believed to be the World’s First Traders! They sailed all over the world exchanging goods for gold or other goods.",
                summaryText2: "The modern-day marketing executive should also look at new avenues to sell a product just like the Phoenicians.",
                summaryText3: "",
                paricipantNo: "2 per Team",
                regFee: "Rs. 400",
                prizeMoney1: "1st Rs. 15,000",
                prizeMoney2: "2nd Rs. 10,000",
                importantDetails:"",
                  importantDetailsText:"",
                contactInfo: "Varsha (09902034701)"
            }, {
                title: "Stamenon",
                subTitle: "Finance",
                eventImageUrl: "images/events/Byzantine.png",
                eventInfoAltText: "Stamenon (Finance)",
                eventInfoImgUrl: "images/events/infoimages/Stamenon_info.jpg",
                registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof",
                civilizationTitle: "Byzantine Civilization",
                summaryText1: "The Byzantine Civilization was one of the greatest economies during their time. They were very wealthy and managed their cash well.	The “Byzantine Dream” existed long before the “American Dream”.",
                summaryText2: "Take this challenge and prove to be the modern day Byzantine!",
                summaryText3: "",
                paricipantNo: "2 per Team",
                regFee: "Rs. 400",
                prizeMoney1: "1st Rs. 15,000",
                prizeMoney2: "2nd Rs. 10,000",
                importantDetails:"",
                  importantDetailsText:"",
                contactInfo: "Avinash (08050503760)"
            }, {
                title: "Effectus",
                subTitle: "Operations",
                eventImageUrl: "images/events/Egypt.png",
                eventInfoAltText: "Effectus (Operations)",
                eventInfoImgUrl: "images/events/infoimages/Effectus_info.jpg",
                registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof",
                civilizationTitle: "Egyptian Civilization",
                summaryText1: "The Egyptians were experts at using new technologies and improving their processes. They also innovated new technologies. They had their own calendar, excelled in calculations & pioneered construction.",
                summaryText2: "Are you equipped enough to cope with today’s operations knowledge like the Egyptians were during their time?",
                summaryText3: "",
                paricipantNo: "2 per Team",
                regFee: "Rs. 400",
                prizeMoney1: "1st Rs. 15,000",
                prizeMoney2: "2nd Rs. 10,000",
                importantDetails:"",
                  importantDetailsText:"",
                contactInfo: "Madhura (09538590703)"
            }, {
                title: "Populo",
                subTitle: "HR",
                eventImageUrl: "images/events/Mongolian.png",
                eventInfoAltText: "Populo (HR)",
                eventInfoImgUrl: "images/events/infoimages/Populo_info.jpg",
                registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof",
                civilizationTitle: "Mongolian Civilization",
                summaryText1: "The Mongols were one of the largest kingdoms during their time. Managing so many people was a challenge in itself, something they excelled at.",
                summaryText2: "Today, a manager comes across many challenges related to people management. Are you game?",
                summaryText3: "",
                paricipantNo: "2 per team",
                regFee: "Rs. 400",
                prizeMoney1: "1st Rs. 15,000",
                prizeMoney2: "2nd Rs. 10,000",
                importantDetails:"",
                  importantDetailsText:"",
                contactInfo: "Meenakshi (07406839903)"
            }, {
                title: "Quaestus",
                subTitle: "Entrepreneurship",
                eventImageUrl: "images/events/Mesopotamian.png",
                eventInfoAltText: "Quaestus (Entrepreneurship)",
                eventInfoImgUrl: "images/events/infoimages/Quaestus_info.jpg",
                registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof",
                civilizationTitle: "Mesopotamian Civilization",
                summaryText1: "The Mesopotamians were knows as the best innovators. They were one of the most innovative civilizations ever.",
                summaryText2: "Even today, innovation is important. It is one of the key drivers of an entrepreneur’s success. ",
                summaryText3: "Can you be an Entrepreneur ? ",
                paricipantNo: "2 per Team",
                regFee: "Rs. 400",
                prizeMoney1: "1st Rs. 15,000",
                prizeMoney2: "2nd Rs. 10,000",
                importantDetails:"documents/QUAESTUS.docx",
                  importantDetailsText:"Important Details",
                contactInfo: "Nupur (09902035880)"
            }, {
                title: "Primiceirius",
                subTitle: "General Management",
                eventImageUrl: "images/events/Persian.png",
                eventInfoAltText: "Primiceirius (General Management)",
                eventInfoImgUrl: "images/events/infoimages/Primiceirius_info.jpg",
                registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof",
                civilizationTitle: "Persian Civilization",
                summaryText1: "The people of Persia were good traders and conquerors. They expanded their empire and were rich in their culture",
                summaryText2: "Persia was known for its all-round performance. A modern day manager requires to be an all-rounder across all streams. Are you?",
                summaryText3: "",
                paricipantNo: "2 per Team",
                regFee: "Rs. 400",
                prizeMoney1: "1st Rs. 15,000",
                prizeMoney2: "2nd Rs. 10,000",
                importantDetails:"",
                  importantDetailsText:"",
                contactInfo: "Anirban (09742441204)"
            }, {
                title: "Officium",
                subTitle: "CSR",
                eventImageUrl: "images/events/Incas.png",
                eventInfoAltText: "Officius (CSR)",
                eventInfoImgUrl: "images/events/infoimages/Officium_info.jpg",
                registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof",
                civilizationTitle: "Incas Civilization",
                summaryText1: "The Incas was a very people centric civilization. They had number of social development schemes to keep their subjects happy.",
                summaryText2: "Today, companies are required to contribute a portion of their profits towards CSR. What will you do if given such a role?",
                summaryText3: "",
                paricipantNo: "2 per Team",
                regFee: "Rs. 400",
                prizeMoney1: "1st Rs. 15,000",
                prizeMoney2: "2nd Rs. 10,000",
                importantDetails:"",
                  importantDetailsText:"",
                contactInfo: "Pragati (08792257357)"
            }

        ];
        for (var count in events) {
            $("#events .eventlist").append(getEvent(events[count]));
        }
    }
    initEvents();

    var startWaitAnimation = function() {
        var waitAnimationEle = $("#waitAnimation");
        waitAnimationEle.find("#icon img").attr("src", "images/events/infoimages/XIMERA_Logo_Text.png");
        waitAnimationEle.fadeToggle();
    }
    var stopWaitAnimation = function() {
        $("#waitAnimation").fadeToggle(10);
    }

    var disableScroll = function(disable) {
        if (disable) {
            $(document).on('scroll touchmove mousewheel', function(e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            })
        } else {
            $(document).off('scroll touchmove mousewheel');
        }
    }

    function navigateEvent($arrawEle, isNext) {
        var $event;
        if (isNext) {
            $event = $($arrawEle.closest(".event").next());
            if (!$event.hasClass("event")) {
                $event = $(".event").first();
            }
        } else {
            $event = $($arrawEle.closest(".event").prev());
            if (!$event.hasClass("event")) {
                $event = $(".event").last()
            }
        }
        showEventInfo($event, true);
    }

    $(".event").click(function() {
        showEventInfo($(this), false);
    });

    function closeEventInfoBox(e) {
        $("#events .halo").fadeToggle(100);
        $(".event .infoWrapper.visible").removeClass("visible").fadeToggle(300);
        disableScroll(false);
        e.preventDefault();
        e.stopPropagation();
    }

    function showEventInfo($event, fromNavigation) {
        var $eventInfoWrapper = $event.find(".infoWrapper");
        var $eventInfoEvent = $event.find(".info");
        var visibleEle = $(".event .infoWrapper.visible").size();
        if (visibleEle !== 0 && !fromNavigation) {
            return;
        }
        var imageUrl = $event.find(".event-item img").attr("src");
        // var image = $eventInfoEvent.find("img");
        //    image.height($(window).height() * 0.8);
        if (fromNavigation) {
            $(".event .infoWrapper.visible").fadeToggle(200).removeClass("visible");
            $eventInfoWrapper.fadeToggle(200);
            $eventInfoWrapper.addClass("visible");
            //$eventInfoWrapper.css('margin-left', -1 * (image.width() / 2));
        } else {
            disableScroll(true);
            startWaitAnimation(imageUrl);
            $("#events .halo").fadeToggle(100);
            setTimeout(function() {
                stopWaitAnimation();
                $eventInfoWrapper.addClass('visible');
                $eventInfoWrapper.fadeToggle(300);
                //  $eventInfoWrapper.css('margin-left', -1 * (image.width() / 2));
            }, 1000);
        }
    }
});

// Google Map Customization
(function() {

    var map;

    map = new GMaps({
        el: '#gmap',
        lat: 12.8483482,
        lng: 77.674908,
        scrollwheel: false,
        zoom: 16,
        zoomControl: false,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        clickable: false
    });

    var image = 'images/pin.png';
    map.addMarker({
        lat: 12.8483482,
        lng: 77.674908,
        icon: image,
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#C34C39',
    });


}());

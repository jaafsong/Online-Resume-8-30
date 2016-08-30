
var data = "%data%";

var bio = {
    "name": "Jeffrey Song",
    "role": "Web Developer",
    "contacts": {
        "mobile": '123-456-7890',
        "email": 'jsong@jsong.com',
        "github": "jaafsong",
        "twitter": "@jsss",
        "location": "New York City",
    },

    "welcomeMessage": "Lorem ipsum dolor sit amet, ligula erat erat, faucibus imperdiet, pharetra proin massa sem risus, dolor sed amet, at mauris quis.",
    "skills": [
        "infrastructure", "network and systems", "dancing", "typing", "walking"
    ],
    "biopic": "images/fry.jpg",
};


var education = {
    "schools": [{
        "name": "Boston College",
        "location": "Boston, MA",
        "degree": "Bachelor of Arts",
        "majors": ["Computer Science", "English Literature"],
        "dates": "2016 - 2016",
        "url": "www.bostoncollege.edu",
    }],

    "onlineCourses": [{
        "title": "Front-end Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com",
    }]
};



var work = {
    "jobs": [{
        "employer": "Microsoft",
        "title": "Network & Systems Analyst",
        "location": "New York City",
        "dates": "2016-2017",
        "description": "Lorem ipsum dolor sit amet, ligula erat erat, faucibus imperdiet, pharetra proin massa sem risus, dolor sed amet, at mauris quis.",
    }]
};

var projects = {
    "projects": [{
        "title": "Project #1",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, ligula erat erat, faucibus imperdiet, pharetra proin massa sem risus, dolor sed amet, at mauris quis.",
        "images": ["images/project1.jpg", "images/project2.jpg"],

    }]

};


bio.display = function() {

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedmsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    var formattedbiopic = HTMLbioPic.replace(data, bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedbiopic);
    $("#header").append(formattedmsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var myArray = bio.skills;

        for (var i = 0; i < myArray.length; i++) {
            var formattedSkill = HTMLskills.replace(data, myArray[i]);

            $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace(data, myArray[i]);

        }
        $("#topContacts, #footerContacts").append(formattedMobile);
        $("#topContacts, #footerContacts").append(formattedTwitter);
        $("#topContacts, #footerContacts").append(formattedGithub);
        $("#topContacts, #footerContacts").append(formattedLocation);
        $("#topContacts, #footerContacts").append(formattedEmail);
    }
};

bio.display();


work.display = function() {

    var workJobsArray = work.jobs;

    for (var i = 0; i < workJobsArray.length; i++) {

        //for (var job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, workJobsArray[i].employer);
        var formattedTitle = HTMLworkTitle.replace(data, workJobsArray[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace(data, workJobsArray[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace(data, workJobsArray[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();



projects.display = function() {

    var projectsArray = projects.projects;

    for (var i = 0; i < projectsArray.length; i++) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, projectsArray[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace(data, projectsArray[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace(data, projectsArray[i].description);
        $(".project-entry:last").append(formattedDescription);

        var projectsImgArray = projectsArray[i].images;

        for (var j = 0; j < projectsImgArray.length; j++) {
            var formattedImage = HTMLprojectImage.replace(data, projectsImgArray[j]);
            $(".project-entry:last").append(formattedImage);
        }


    }
};

projects.display();




education.display = function() {

    var educationArray = education.schools;

    for (var i = 0; i < educationArray.length; i++) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace(data, educationArray[i].name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace(data, educationArray[i].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace(data, educationArray[i].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace(data, educationArray[i].location);
        $(".education-entry:last").append(formattedLocation);
    }

    var onlineArray = education.onlineCourses;

    for (var j = 0; j < onlineArray.length; j++) {

        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedOnlineTitle = HTMLonlineTitle.replace(data, onlineArray[j].title);
        $(".education-entry:last").append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace(data, onlineArray[j].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace(data, onlineArray[j].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineUrl = HTMLonlineURL.replace(data, onlineArray[j].url);
        $(".education-entry:last").append(formattedOnlineUrl);

    }

};

education.display();


function googleMaps() {

    $('#main').append(internationalizeButton);
    $('#mapDiv').append(googleMap);

}
googleMaps();
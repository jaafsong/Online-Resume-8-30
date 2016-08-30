
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
    "bioPic": "images/fry.jpg",
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
        "dates": 2016,
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
        "dates": 2016,
        "description": "Lorem ipsum dolor sit amet, ligula erat erat, faucibus imperdiet, pharetra proin massa sem risus, dolor sed amet, at mauris quis.",
        "images": ["images/project1.jpg", "images/project2.jpg"],

    }]

};




var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedbiopic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);


header.display = function() {

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedbiopic);
    $("#header").append(formattedmsg);

};

header.display();


bio.display = function() {

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);

        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);
        $("#topContacts").append(formattedEmail);

        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);
        $("#footerContacts").append(formattedEmail);

    }
};

bio.display();

function displayWork() {

    for (var job in work.jobs) {

        if (work.jobs.length > 0) {

            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);

        }
    }
}
displayWork();


projects.display = function() {
    for (var info in projects.projects) {
        if (projects.projects.length > 0) {

            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[info].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[info].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[info].description);
            $(".project-entry:last").append(formattedDescription);


            if (projects.projects[info].images.length > 0) {

                for (var image in projects.projects[info].images) {
                    if (projects.projects[info].images.length > 0) {
                        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[info].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }
        }
    }
};

projects.display();


education.display = function() {

    for (var details in education.schools) {
        if (education.schools.length > 0) {

            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[details].name);
            $(".education-entry:last").append(formattedName);

            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[details].degree);
            $(".education-entry:last").append(formattedDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[details].dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[details].location);
            $(".education-entry:last").append(formattedLocation);

            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[details].title);
            $(".education-entry:last").append(formattedOnlineTitle);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[details].school);
            $(".education-entry:last").append(formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[details].dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[details].url);
            $(".education-entry:last").append(formattedOnlineUrl);
        }
    }
};

education.display();


function googleMaps() {

    $('#main').append(internationalizeButton);
    $('#mapDiv').append(googleMap);

}
googleMaps();
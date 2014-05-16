angular.module('brainTrainProjects.controllers', []).
controller('projectController', function($scope) {
    $scope.projectList = [
        {
            "name":"boozybrowser",
            "title":"boozybrowser",
            "locations": [
                {
                    "header": "url",
                    "url":"http://www.boozybrowser.com",
                    "label": "boozybrowser.com"
                },
                {
                    "header": "github",
                    "url": "https://github.com/braintrain/boozybrowser/",
                    "label": "github repo"
                }
            ],
            "summary": "Make the internet drunk! (chrome plugin)",
            "description": "chrome plugin;css animations (not super performant)"
        },    
        {
            "name":"fuckingrainbows",
            "title":"fuckingrainbows",
            "locations": [
                {
                    "header": "url",
                    "url":"http://braintrain.github.io/fuckingrainbows/",
                    "label": "fuckingrainbows!!!"
                },
                {
                    "header": "github",
                    "url": "https://github.com/braintrain/fuckingrainbows/",
                    "label": "github repo"
                }
            ],
            "summary": "Invade the web with fabulous CSS3 rainbows! (bookmarklet)",
            "description": "websockets consumer (read: frontend only... er kinda);jQuery/CSS selector approximation of the js this object;websockets + this-ish selector = remote clicking! (Don't worry, most people don't get what that means either)"
        },
        {
            "name":"usslomaprieta",
            "title":"USS Loma Prieta",
            "locations": [
                {
                    "header": "url",
                    "url":"http://braintrain.github.io/lomaprieta/",
                    "label": "USS Loma Prieta"
                },
                {
                    "header": "github",
                    "url": "https://github.com/braintrain/lomaprieta/",
                    "label": "github repo"
                }
            ],
            "summary": "Almost LCARS UI for an SF Star Trek club!",
            "description": "super static site using CSS for LCARS flavorz"
        },
        {
            "name":"brainnewstuff",
            "title":"brainnewstuff",
            "locations": [
                {
                    "header": "url",
                    "url":"https://brainnewstuff.com",
                    "label": "brainnewstuff.com"
                },
                {
                    "header": "github",
                    "url": "https://github.com/braintrain",
                    "label": "ask me! :D"
                }
            ],
            "summary": "My digital code/config/command line notepad.",
            "description": "django site for keeping track of technical notes;sendmail install/config;SSL cert"
        },
        {
            "name":"iamed",
            "title":"I am Ed",
            "locations": [
                {
                    "header": "url",
                    "url":"https://github.com/braintrain",
                    "label": "ask me! :D"
                },
                {
                    "header": "github",
                    "url": "https://github.com/braintrain",
                    "label": "ask me! :D"
                }
            ],
            "summary": "Twilio audio blog for a friend with a non-smart cell phone.",
            "description": "hacker news comment about I am Ed <a href=\"https://news.ycombinator.com/item?id=7655742\">https://news.ycombinator.com/item?id=7655742</a>;django site for Ed's audio thoughts and images;sendmail with email endpoints for a non-smartphone control (i.e. whitelisting email addresses, texting images to web server);PIL(Python Image Library) for image saving and resizing;twilio so Ed can just call a number to submit an audio blog type post"
        },
        {
            "name":"atoddswithclarity",
            "title":"atoddswithclarity",
            "locations": [
                {
                    "header": "url",
                    "url":"https://www.atoddswithclarity.com",
                    "label": "atoddswithclarity.com"
                },
                {
                    "header": "github",
                    "url": "https://github.com/braintrain",
                    "label": "ask me! :D"
                }
            ],
            "summary": "Personal indieweb integrated blog!",
            "description": "django site for blogging/posting to facebook/twitter using indieweb practices"
        },
        {
            "name":"fuckingsf",
            "title":"fuckingsf.com",
            "locations": [
                {
                    "header": "url",
                    "url":"http://www.fuckingsf.com",
                    "label": "fuckingsf.com"
                },
                {
                    "header": "github",
                    "url":"http://www.nerdpaper.com",
                    "label": "nerdpaper.com"
                }
            ],
            "summary": "Highcharts series controls!",
            "description": "playing around with highcharts, controls allow users to compare multiple bar graphs by sliding one over the other."
        },
        {
            "name":"nerdpaper",
            "title":"nerdpaper.com",
            "locations": [
                {
                    "header": "url",
                    "url":"http://www.nerdpaper.com",
                    "label": "nerdpaper.com"
                }
            ],
            "summary": "Highcharts series controls!",
            "description": "playing around with highcharts, controls allow users to compare multiple bar graphs by sliding one over the other."
        }

    ];
});

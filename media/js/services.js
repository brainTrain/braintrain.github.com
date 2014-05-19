angular.module('brainTrainProjects.services', [])
.factory('projectsAPIservice', function($filter){
    var projectsAPI = {},
        projectsList;

    projectsAPI.getProjects = function(projectName) {
        projectsList = [
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
                "description": {
                    "words": [
                        "chrome plugin to make teh webz drunk", 
                        "boozy webz accomplished by a combination of css animations and jQuery animations"
                    ]
                }
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
                "description": {
                    "words": [
                        "clicking on html objects toggles a class which adds animated scrolling CSS3 rainbows",
                        "websockets consumer using pusher.com", 
                        "jQuery/CSS selector approximation of the js this object", 
                        "created a function called ajaxThis() which takes the js this object and maps out a flat approximation of a this selector (read more in my loggly blogpost link)",
                        "websockets + ajaxThis selector = remote clicking! (meaning two or more people on the same URL will see the rainbows others clicked into creation)"
                    ],
                    "links": [
                        {
                            "title": "My Loggly blogpost about my ajaxThis function",
                            "url": "https://www.loggly.com/blog/ajax-this/"
                        }
                    ]
                }
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
                "description": {
                    "words": ["super static site using CSS for LCARS flavorz"]
                }
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
                "description": {
                    "words": [
                        "user based django site for keeping track of technical notes", 
                        "note options are command line, config, code or description",
                        "user content routed via username in the subdomain",
                        "currently hosted on my linode box with a few other projects",
                        "has wildcard SSL cert and sendmail routes"
                    ]
                }
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
                "description": {
                    "words": [
                        "django site for Ed's audio thoughts and images", 
                        "sendmail with email endpoints for a non-smartphone control (i.e. whitelisting email addresses, texting images to web server)", 
                        "PIL(Python Image Library) for image saving and resizing", 
                        "twilio so Ed can just call a number to submit an audio blog type post",
                        "integrated sendmail, PIL and django for posts that originate from text messages",
                        "has SSL cert"
                    ],
                    "links": [
                        {
                            "title": "hacker news comment about I am Ed",
                            "url": "https://news.ycombinator.com/item?id=7655742"
                        }
                    ]
                }
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
                "description": {
                    "words": [
                        "django site for blogging/posting to facebook/twitter using indieweb practices",
                        "has SSL cert and sendmail routes"
                    ]
                }
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
                        "url":"https://github.com/braintrain/fuckingsf/",
                        "label": "github repo"
                    }
                ],
                "summary": "Floating splash site!",
                "description": {
                    "words": ["playing around with splash pages/CSS keyframing (it floats!)"]
                },
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
                "description": { 
                    "words": [
                        "playing around with highcharts, controls allow users to compare multiple bar graphs by sliding one over the other."
                    ]
                }
            },
            {
                "name":"ecosystem",
                "title":"Ecosystem Shit",
                "summary": "All projects here are either hosted on github or a box I built on linode or digital ocean.",
                "description": {
                    "words": [
                        "So far I've proven to myself that I can do anything I want with one box. My next ops-type goal is to learn how to configure varnish to cache all of the requests from all of the projects I'm currently hosting."
                    ],
                    "links": [
                        {
                            "title": "most of my opsy/sysadmin knowledge is recorded on my brainnewstuff account",
                            "url": "#/brainnewstuff"
                        }
                    ]
                }
            }
        ]
        if(projectName) {
            projectsList = $filter('filter')( projectsList, {'name': projectName}, true);
        }
        return projectsList;
    }

    return projectsAPI;
});

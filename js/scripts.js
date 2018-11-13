var cast = {
    "characters" : [
        {
            "name": "Jon Snow",
            "shortCode": "jon-snow",
            "actor": "Kit Harrington",
            "house": "Stark",
            "location": "The Wall"
        },
        {
            "name": "Tyrin Lanninster",
            "shortCode": "tyrin",
            "actor": "Peter Dinklage",
            "house": "Lenninster"
        },
        {
            "name": "Brienne the Tarth",
            "shortCode": "brienne",
            "actor": "Gwendoine Christie",
            "house": "Clegane",
            "location": "unknown"
        },
        {
            "name": "Eder Stark",
            "shortCode": "the-stark",
            "actor": "Sean Bean",
            "house": "Stark",
            "location": "Winterfell"
        },
        {
            "name": "Sandor Clegane",
            "shortCode": "the-hond",
            "actor": "Rory McCann",
            "house": "Clegane",
            "location": "unknown"
        }
    ]
}

$(document).ready(function() {
    var characterTemplate = $("#character-template").html();
    var compileCharacterTemplate = Handlebars.compile(characterTemplate);
    $(".character-list-container").html(compileCharacterTemplate(cast));
});

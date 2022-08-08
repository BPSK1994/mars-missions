const marsMissionData = [
    {
        serialNumber: 1,
        mission: 'Korabl 4',
        missionType: "Flyby",
        country: 'USSR',
        launchYear: 1960,
        result: 'Failure',
        details: "Didn't reach Earth orbit"

    }, 
    {
        serialNumber: 2,
        mission: "Korabl 5",
        missionType: "Flyby",
        country: "USSR",
        launchYear: 1960,
        result: "Failure",
        details: "Didn't reach Earth orbit" 
    },
    {
        serialNumber: 3,
        mission: "Korabl 11",
        missionType: "Flyby",
        country: "USSR",
        launchYear: 1962,
        result: "Failure",
        details: "Earth orbit only; spacecraft broke apart" 
    },
    {
        serialNumber: 4,
        mission: "Mars 1",
        missionType: "Flyby",
        country: "USSR",
        launchYear: 1962,
        result: "Failure",
        details: "Radio Failed" 
    },
    {
        serialNumber: 5,
        mission: "Korabl 13",
        missionType: "Flyby",
        country: "USSR",
        launchYear: 1962,
        result: "Failure",
        details: "Earth orbit only; spacecraft broke apart" 
    },
    {
        serialNumber: 6,
        mission: "Mariner 3",
        missionType: "Flyby",
        country: "USA",
        launchYear: 1964,
        result: "Failure",
        details: "Shroud failed to jettison" 
    },
    {
        serialNumber: 7,
        mission: "Mariner 4",
        missionType: "Flyby",
        country: "USA",
        launchYear: 1964,
        result: "Success",
        details: "Returned 21 images" 
    },
    {
        serialNumber: 8,
        mission: "Zond 2",
        missionType: "Flyby",
        country: "USSR",
        launchYear: 1964,
        result: "Failure",
        details: "Radio failed" 
    },
    {
        serialNumber: 9,
        mission: "Mars 1969A",
        missionType: "Orbiter",
        country: "USSR",
        launchYear: 1969,
        result: "Failure",
        details: "Launch vehicle failure" 
    },
    {
        serialNumber: 10,
        mission: "Mars 1969B",
        missionType: "Orbiter",
        country: "USSR",
        launchYear: 1969,
        result: "Failure",
        details: "Launch vehicle failure" 
    },
    {
        serialNumber: 11,
        mission: "Mariner 6",
        missionType: "Flyby",
        country: "USA",
        launchYear: 1969,
        result: "Success",
        details: "Returned 75 images" 
    },
    {
        serialNumber: 12,
        mission: "Mariner 7",
        missionType: "Flyby",
        country: "USA",
        launchYear: 1969,
        result: "Success",
        details: "Returned 126 images" 
    },
    {
        serialNumber: 13,
        mission: "Mariner 8",
        missionType: "Orbiter",
        country: "USA",
        launchYear: 1971,
        result: "Failure",
        details: "Launch failure" 
    },
    {
        serialNumber: 14,
        mission: "Kosmos 419",
        missionType: "Orbiter",
        country: "USSR",
        launchYear: 1971,
        result: "Failure",
        details: "Achieved Earth orbit only" 
    },
    {
        serialNumber: 15,
        mission: "Mars 2 Orbiter/Lander",
        missionType: "Orbiter, Lander and Rover",
        country: "USSR",
        launchYear: 1971,
        result: "Failure",
        details: "Orbiter arrived, but sent no useful data; lander destroyed" 
    },
    {
        serialNumber: 16,
        mission: "Mars 3 Orbiter/Lander",
        missionType: "Orbiter, Lander and Rover",
        country: "USSR",
        launchYear: 1971,
        result: "Partial Success",
        details: "Orbiter obtained approximately 8 months of data and lander landed safely, but only 20 seconds of data returned" 
    },
    {
        serialNumber: 17,
        mission: "Mariner 9",
        missionType: "Orbiter",
        country: "USA",
        launchYear: 1971,
        result: "Success",
        details: "Returned 7,329 images" 
    },
    {
        serialNumber: 18,
        mission: "Mars 4",
        missionType: "Orbiter",
        country: "USSR",
        launchYear: 1973,
        result: "Failure",
        details: "Flew past Mars" 
    },
    {
        serialNumber: 19,
        mission: "Mars 5",
        missionType: "Orbiter",
        country: "USSR",
        launchYear: 1973,
        result: "Success",
        details: "Returned 60 images; only lasted 9 days" 
    },
    {
        serialNumber: 20,
        mission: "Mars 6",
        missionType: "Flyby and Lander",
        country: "USSR",
        launchYear: 1973,
        result: "Success/Failure",
        details: "Occultation experiment produced data and Lander failure on descent" 
    },
    {
        serialNumber: 21,
        mission: "Mars 7",
        missionType: "Flyby and Lander",
        country: "USSR",
        launchYear: 1973,
        result: "Failure",
        details: "Missed planet; now in solar orbit." 
    },
    {
        serialNumber: 22,
        mission: "Viking 1",
        missionType: "Orbiter and Lander",
        country: "USA",
        launchYear: 1975,
        result: "Success",
        details: "Orbiter returned over 36,000 images; lander returned first image from the surface of Mars and conducted soil experiments" 
    },
    {
        serialNumber: 23,
        mission: "Viking 2",
        missionType: "Orbiter and Lander",
        country: "USA",
        launchYear: 1975,
        result: "Success",
        details: "Returned 16,000 images and extensive atmospheric data and soil experiments" 
    },
    {
        serialNumber: 24,
        mission: "Phobos 1",
        missionType: "Orbiter and Lander",
        country: "USSR",
        launchYear: 1988,
        result: "Failure",
        details: "Lost en route to Mars" 
    },
    {
        serialNumber: 25,
        mission: "Phobos 2",
        missionType: "Orbiter, Lander and Rover",
        country: "USSR",
        launchYear: 1988,
        result: "Failure",
        details: "Lost near Phobos" 
    },
    {
        serialNumber: 26,
        mission: "Mars Observer",
        missionType: "Orbiter",
        country: "USA",
        launchYear: 1992,
        result: "Failure",
        details: "Lost prior to Mars arrival" 
    },
    {
        serialNumber: 27,
        mission: "Mars Global Surveyor",
        missionType: "Orbiter",
        country: "USA",
        launchYear: 1996,
        result: "Success",
        details: "Mapped Mars and its topography; studied indications of Mars’ wetter past" 
    },
    {
        serialNumber: 28,
        mission: "Mars 96",
        missionType: "Orbiter and Lander",
        country: "Russia",
        launchYear: 1996,
        result: "Failure",
        details: "Launch vehicle failure" 
    },
    {
        serialNumber: 29,
        mission: "Mars Pathfinder",
        missionType: "Lander and Rover",
        country: "USA",
        launchYear: 1996,
        result: "Success",
        details: "Technology experiment lasting 5 times longer than warranty" 
    },
    {
        serialNumber: 30,
        mission: "Nozomi",
        missionType: "Orbiter",
        country: "Japan",
        launchYear: 1998,
        result: "Failure",
        details: "No orbit insertion; fuel problems" 
    },
    {
        serialNumber: 31,
        mission: "Mars Climate Orbiter",
        missionType: "Orbiter",
        country: "USA",
        launchYear: 1998,
        result: "Failure",
        details: "Lost on arrival" 
    },
    {
        serialNumber: 32,
        mission: "Mars Polar Lander",
        missionType: "Lander",
        country: "USA",
        launchYear: 1999,
        result: "Failure",
        details: "Lost on arrival" 
    },
    {
        serialNumber: 33,
        mission: "Deep Space 2 Probes (2)",
        missionType: "Penetrator",
        country: "USA",
        launchYear: 1999,
        result: "Failure",
        details: "Lost on arrival (carried on Mars Polar Lander)" 
    },
    {
        serialNumber: 34,
        mission: "Mars Odyssey",
        missionType: "Orbiter",
        country: "USA",
        launchYear: 2001,
        result: "Success",
        details: "High resolution images of Mars" 
    },
    {
        serialNumber: 35,
        mission: "Mars Express/Beagle 2",
        missionType: "Orbiter and Lander",
        country: "ESA",
        launchYear: 2003,
        result: "Success/Failure",
        details: "Orbiter imaging Mars in detail; lander appears to have landed intact but didn’t communicate with Earth" 
    },
    {
        serialNumber: 36,
        mission: "Mars Exploration Rover - Spirit",
        missionType: "Rover",
        country: "USA",
        launchYear: 2003,
        result: "Success",
        details: " 	Operated for over 6 years on Mars, long past design life" 
    },
    {
        serialNumber: 37,
        mission: "Mars Exploration Rover - Opportunity",
        missionType: "Rover",
        country: "USA",
        launchYear: 2003,
        result: "Success",
        details: "Operated for nearly 15 years, roving a record 28 miles (45 km)" 
    },
    {
        serialNumber: 38,
        mission: " 	Mars Reconnaissance Orbiter",
        missionType: "Orbiter",
        country: "USA",
        launchYear: 2005,
        result: "Success",
        details: "Studying Mars in detail; has returned over 400 terabits of data (more than all other Mars missions combined)" 
    },
    {
        serialNumber: 39,
        mission: "Phoenix",
        missionType: "Lander",
        country: "USA",
        launchYear: 2007,
        result: "Success",
        details: "Returned more than 25 gigabits of data from its studies of Mars’ north polar region" 
    },
    {
        serialNumber: 40,
        mission: "Mars Science Laboratory-Curiosity",
        missionType: "Rover",
        country: "USA",
        launchYear: 2011,
        result: "Success",
        details: "Exploring Mars' habitability" 
    },
    {
        serialNumber: 41,
        mission: "Phobos-Grunt/Yinghuo-1",
        missionType: "Orbiter",
        country: "Russia/China",
        
        launchYear: 2011,
        result: "Failure",
        details: "Stranded in Earth orbit" 
    },
    {
        serialNumber: 42,
        mission: "Mars Atmosphere and Volatile Evolution",
        missionType: "Orbiter",
        country: "USA",
        launchYear: 2013,
        result: "Success",
        details: "Studying the Martian atmosphere" 
    },
    {
        serialNumber: 43,
        mission: "Mars Orbiter Mission (MOM)",
        missionType: "Orbiter",
        country: "India",
        launchYear: 2013,
        result: "Success",
        details: "Develop interplanetary technologies and explore Mars' surface features, mineralogy and atmosphere." 
    },
    {
        serialNumber: 44,
        mission: "ExoMars Orbiter/Schiaparelli EDL Demo Lander",
        missionType: "Orbiter and Lander",
        country: "ESA/Russia",
        launchYear: 2016,
        result: "Success/Failure",
        details: "Orbiter studying Martian atmosphere and EDL demo lander lost on arrival" 
    },
    {
        serialNumber: 45,
        mission: "Mars InSight Lander",
        missionType: "Lander",
        country: "USA",
        launchYear: 2018,
        result: "Success",
        details: "Measuring “marsquakes” and studying the planet’s interior" 
    },
    {
        serialNumber: 46,
        mission: "Hope Orbiter",
        missionType: "Orbiter",
        country: "UAE",
        launchYear: 2020,
        result: "Success",
        details: "Studying the Martian atmosphere" 
    },
    {
        serialNumber: 47,
        mission: "Tianwen-1 Orbiter/Zhurong Rover",
        missionType: "Orbiter, Lander and Rover",
        country: "China",
        launchYear: 2020,
        result: "Success",
        details: "Orbiter arrived in Feb. 2021; released lander for successful touchdown and rover deployment in May 2021" 
    },
    {
        serialNumber: 48,
        mission: "Mars 2020 Perseverance Rover",
        missionType: "Rover",
        country: "USA",
        launchYear: 2020,
        result: "Success",
        details: "Searching for signs of ancient life and collecting samples for future return to Earth" 
    },
    {
        serialNumber: 49,
        mission: "Mars 2020 Ingenuity",
        missionType: "Helicopter",
        country: "USA",
        launchYear: 2020,
        result: "Success",
        details: "First aerodynamic flight on another planet. Landed with Perseverance rover on 18 February 2021. Deployed from rover on 3 April 2021. First flight achieved on April 19, 2021." 
    }
];

const tableBody = document.querySelector('.table__body');
const filterBtns = document.querySelectorAll('.btn');

// Load Items
window.addEventListener("DOMContentLoaded", function() {
    displayTable(marsMissionData);
});


function displayTable(item) {
    let displayData = item.map(function(item) {
        return `
            <tr class = "table__row">
                <td class = "table__data">${item.serialNumber}</td>
                <td class = "table__data">${item.mission}</td>
                <td class = "table__data">${item.missionType}</td>
                <td class = "table__data country">${item.country}</td>
                <td class = "table__data">${item.launchYear}</td>
                <td class = "table__data">${item.result}</td>
                <td class = "table__data">${item.details}</td>
            </tr>`
    });
    displayData = displayData.join('');
    tableBody.innerHTML = displayData;
}

// Filter Missions by Country
filterBtns.forEach(function(item) {
    item.addEventListener('click', function(event) {

        const country = event.currentTarget.dataset.id;

        const countryData = marsMissionData.filter(function(item) {
            if(item.country.toLowerCase() == country ) {
                return item;
            }
        });

        if(country == "all") {
            displayTable(marsMissionData);
        } else {
            displayTable(countryData);
        }
    });

});

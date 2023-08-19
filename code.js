//Creates lists and fills them using respective data columns from the "Endangered Species of Canada" dataset
var scientificNameList = getColumn("Endangered Species of Canada", "Scientific Name");
var commonNameList = getColumn("Endangered Species of Canada", "Common Name");
var classList = getColumn("Endangered Species of Canada", "Class");
var conservationStatusList = getColumn("Endangered Species of Canada", "Conservation Status");

//Fills both the dropdown menus with their respective options 
setProperty("sciNameDropdown", "options", scientificNameList);
setProperty("commonNameDropdown", "options", commonNameList);

//Declaring filtered variables for each list
var filteredScientificName;
var filteredCommonName;
var filteredClass;
var filteredConservationStatus;

//Changes home screen to the main screen
onEvent("goButton", "click", function( ) {
  setScreen("mainScreen");
});
//Changes main screen to the home screen
onEvent("homeButton", "click", function( ) {
  setScreen("homeScreen");
});
//Hides "Common Name Dropdown" and displays "Scientific Name Dropdown"
onEvent("higherButton", "click", function( ) {
  hideElement("commonNameDropdown");
  showElement("sciNameDropdown");
});

//Hides "Scientific Name Dropdown" and displays "Common Name Dropdown"
onEvent("lowerButton", "click", function( ) {
  hideElement("sciNameDropdown");
  showElement("commonNameDropdown");
});

//"updateInfo" function is executed when user selects an option from the Scientific Name Dropdown
//The parameter "selection" passes arguments using the Common Name Dropdown
onEvent("sciNameDropdown", "change", function( ) {
  updateInfo(getText("sciNameDropdown"));
});

//"updateInfo" function is executed when user selects an option from the Common Name Dropdown
//The parameter "selection" passes arguments using the Scientific Name Dropdown
onEvent("commonNameDropdown", "change", function( ) {
  updateInfo(getText("commonNameDropdown"));
});

function updateInfo(selection) {
  //Clears output area each time a new selection is made
  setText("outputArea", "");
  
  //For-loop is used to search for the option in the correct list so the program can output the corresponding info
  for (var i = 0; i < scientificNameList.length; i++) {
    filteredScientificName = scientificNameList[i];
    filteredCommonName = commonNameList[i];
    filteredClass = classList[i];
    filteredConservationStatus = conservationStatusList[i];
    //Information is chosen depending on the dropdown used
    //Output changes based on which dropdown menu is used by user
    if (selection == scientificNameList[i]) {
      //Runs when an option from the Scientific Name Dropdown menu is chosen
      setProperty("outputArea", "text", (("Common Name: " + filteredCommonName) + ("\n Class: " + filteredClass)) + ("\n\n Conservation Status: " + filteredConservationStatus));
    } else if ((selection == commonNameList[i])) {
      //Runs when an option from the Common Name Dropdown menu is chosen
      setProperty("outputArea", "text", (("Scientific Name: " + filteredScientificName) + ("\n Class: " + filteredClass)) + ("\n\n Conservation Status: " + filteredConservationStatus));
    }
  }
}

//The image of the Canada Map came from: https://www.tripsavvy.com/thmb/17ieK6dOc27juOeyy0JDfHkzojI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2000_with_permission_of_Natural_Resources_Canada-56a3887d3df78cf7727de0b0.jpg

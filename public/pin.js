var state_arr = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal");

var s_a = new Array();
s_a[0] = "";
s_a[1] = " Betapur | Calicut | Haddo | Havelock Bazar | Port Blair";
s_a[2] = " Adoni | Darsi | Kadiri | Tirupathi | Kakinada | Piler";
s_a[3] = " Along | Dirang | Darka | Deed | Giba";
s_a[4] = " Angarkata | Athabari | Badahapur | Badati | Silchar";
s_a[5] = " Bhojpur | Champaran | Gaya | Muzaffarpur | Patna";
s_a[6] = " Chandigarh | Vidhansadan";
s_a[7] = " Durg | Raipur | Amdi | Bilaspur | Bastar";
s_a[8] = " Bonta | Chisda | Dadra | Kherdi | Karvad";
s_a[9] = " Daman | Diu | Fudam | Kunta | Marvad";
s_a[10] = " Rajender Nagar | Shastri Bhawan | Supreme Court | Udyog Bhawan | Union Public Service Commission";
s_a[11] = " Anjuna | Canacona | Collem | Cortalim | Curtorim";
s_a[12] = " Ahmedabad | Bhavnagar | Dwarka | Vadodara | Viramgam";
s_a[13] = " Ambala | Gurgaon | Hisar | Panchkula | Panipat | Rohtak";
s_a[14] = " Kullu | Rajgarh | Shimla | Spiti | Theog";
s_a[15] = " Gulmarg | Jammu | Kalakot | Kargil | Srinagar | Vaishno Devi ";
s_a[16] = " Deoghar | Dhanbad | Jamshedpur | Jamtara | Patan";
s_a[17] = " Chandur | Desairhatti | Faridkhanwadi | Ghataknur | Goddikurvinkoppa";
s_a[18] = " Anjoottimangalam | Arkkuparamba | Avilora | Aymanam | Thiruvananthapuram";
s_a[19] = " Agati | Bithra | Chetlat | Kadamat | Minicoy";
s_a[20] = " Ashta | Bhopal | Dewas | Hoshangabad | Indore";
s_a[21] = " Amravati | Hingoli | Kolhapur | Mumbai | Walchandnagar";
s_a[22] = " Atengba | Bidyanagar | Chandel | Ukhrul ";
s_a[23] = " Chengapara | Dabu | Damalgiri | Dholai | Garobadha";
s_a[24] = " Haulawng | Hrangchalkawn | Hualtu | Kelsih | Khanpui";
s_a[25] = " Lalmati | Jalukie | Kiphire | Mokokchung | Phek";
s_a[26] = " Cuttack | Daringbadi | Gajapati | Gudari | Karanjia";
s_a[27] = " Pooranankuppam | Reddiyarpalayam | Sedarapet | Sellur | Thimmanaickenpalayam";
s_a[28] = " Amritsar | Bathinda | Rani Majra | Bhagowal | Fateh Pur";
s_a[29] = " Bikaner | Jaipur | Jodhpur | Osian | Udaipur";
s_a[30] = " Tadong | Tarku | Tikpur | Tingmoo | Turung";
s_a[31] = " Akkanaickenpatti | Aladikkumulai | Aladiyur | Alagamanagiri | Alagapuri";
s_a[32] = " Ananthsagar | Anthampalli | Appalanarasimhapuram | Ashepally | Athmakur";
s_a[33] = " Darogamura | Gakulbari | Indranagar | Jogendranagar | Kalkalia";
s_a[34] = " Ayodhya | Allahabad | Mirzapur | Jhansi | Mathura";
s_a[35] = " Almora | Haridwar | Joshimath | Mussoorie | Nainital | Uttarkashi"; //Uttarakhand
s_a[36] = " Ghateswar | Ghoraikhetra | Gobrapota | Habibpur | Ichhapur";

function print_state(state_id) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var option_str = document.getElementById(state_id);
    option_str.length = 0;
    option_str.options[0] = new Option('Select State', '');
    option_str.selectedIndex = 0;
    for (var i = 0; i < state_arr.length; i++) {
        option_str.options[option_str.length] = new Option(state_arr[i], state_arr[i]);
    }
}

function print_city(city_id, city_index) {
    var option_str = document.getElementById(city_id);
    option_str.length = 0;	// Fixed by Julian Woods
    option_str.options[0] = new Option('Select City', '');
    option_str.selectedIndex = 0;
    var city_arr = s_a[city_index].split("|");
    for (var i = 0; i < city_arr.length; i++) {
        option_str.options[option_str.length] = new Option(city_arr[i], city_arr[i]);
    }
}

function populatePin() {
    var state = document.getElementById("state").value;
    var district = document.getElementById("city").value;
    var trimD = district.trim();

    if (state === "" || district === "") {
        alert("Please select State and District.");
        return;
    }

    var apiUrl = `https://api.postalpincode.in/postoffice/${trimD}`;
    console.log("API URL:", apiUrl);

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            handleApiResponse(data, state); // Pass the selected state to the function
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            alert("Error fetching data. Please try again.");
        });
}

function handleApiResponse(response, selectedState) {
    console.log("API Response:", response);

    if (response[0] && response[0].Status === "Success") {
        var postOfficeData = response[0].PostOffice;
        displayPostOfficeDetails(postOfficeData, selectedState);
    }
}

function displayPostOfficeDetails(apiResponse, selectedState) {
    console.log("Displaying post office details:", apiResponse);
    var resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ""; // Clear previous results

    var postOfficeData = apiResponse;

    // Filter post offices based on the selected state
    var filteredPostOffices = postOfficeData.filter(function (office) {
        return office.State === selectedState;
    });

    if (Array.isArray(filteredPostOffices) && filteredPostOffices.length > 0) {
        // Create a table element
        var table = document.createElement("table");
        table.setAttribute("border", "1");

        // Create header row
        var headerRow = table.insertRow(0);
        var headers = ["Name", "Branch Type", "Delivery Status", "Circle", "District", "Division", "Region", "State", "Country", "Pincode"];
        for (var h = 0; h < headers.length; h++) {
            var headerCell = headerRow.insertCell(h);
            headerCell.innerHTML = headers[h];
        }

        for (var i = 0; i < filteredPostOffices.length; i++) {
            var postOffice = filteredPostOffices[i];

            // Create a new row
            var row = table.insertRow(i + 1);

            // Populate cells with data
            var properties = ["Name", "BranchType", "DeliveryStatus", "Circle", "District", "Division", "Region", "State", "Country", "Pincode"];
            for (var j = 0; j < properties.length; j++) {
                var cell = row.insertCell(j);
                cell.innerHTML = postOffice[properties[j]] || "N/A";
            }
        }
        resultContainer.appendChild(table);
    } else {
        alert("No records found for the selected state");
    }
}

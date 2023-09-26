document.getElementById("changeButton").addEventListener("click", function() {
  let image = document.getElementById("unitLogo");

  if (image.src.endsWith("1st_Battalion,_5h_Marines_Logo.png")) {
    image.src = "./images/arizona.jpg"; // Change this to the path of the new image
    image.alt = "Me in Yuma, Arizona"; // Image alt text
  } else {
    image.src = "./images/1st_Battalion,_5h_Marines_Logo.png";
    image.alt = "1/5 unit logo";
  }
});

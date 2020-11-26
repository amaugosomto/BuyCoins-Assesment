import {ACCESS_TOKEN, BODY} from "./config.js";

document.addEventListener('DOMContentLoaded', function() {
  fetchData();

  window.addEventListener('scroll', function(e) {
    let scrollPosition = window.scrollY;
    
    if (scrollPosition > 305){
      document.querySelector("#firstSecondaryNav div:first-of-type img").style.display = "block";
      document.querySelector("#firstSecondaryNav div:first-of-type span").style.display = "block";
    } else {
      document.querySelector("#firstSecondaryNav div:first-of-type img").style.display = "none";
      document.querySelector("#firstSecondaryNav div:first-of-type span").style.display = "none";
    }
  });
  
  window.onclick = function (event) {
    let className = event.target.className;
    
    if (className != ""){
      if (!className.includes("firstDrop") && !className.includes("secondDrop") 
        && !className.includes("headerFirstDrop") && !className.includes("headerSecondDrop")){
          hideAllContent();
      }
    } else {
      hideAllContent();
    }
    
  }
  
});

function fetchData(){
  fetch(`https://api.github.com/graphql`, {
    method: "POST",
    headers: {
      "Authorization": `bearer ${ACCESS_TOKEN.replace(/{}/gi, "")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(BODY)
  })
    .then(res => res.json())
    .then((data) => appendData(data.data.user))
    .catch(err => console.error(err));
}

function appendData(data){

  let repositories = data.repositories.nodes;
  let repoCountElements = document.getElementsByClassName("repoCount");
  for (let i = 0; i < repoCountElements.length; i++) {
    var repoCountElement = repoCountElements[i];
    repoCountElement.innerHTML = repositories.length;
  }

  let avatarImages = document.getElementsByClassName("avatar-user");
  for (let i = 0; i < avatarImages.length; i++) {
    var avatarImage = avatarImages[i];
    avatarImage.setAttribute("src", data.avatarUrl);
  }

  let statusElements = document.getElementsByClassName("focus");
  let status = data.status.emojiHTML.replace("<div>", "").replace("</div>", "") + `<span>${data.status.message}</span>`;
  for (let i = 0; i < statusElements.length; i++) {
    var statusElement = statusElements[i];
    statusElement.innerHTML = status;
  }

  document.getElementById("mainName").innerText = data.name;
  document.getElementById("username").innerText = data.login;

  document.getElementsByClassName("caption")[0].innerText = data.bio;

  let followers = `<i class="fas fa-user-friends"> </i><span>${data.followers.totalCount}</span> Followers`;
  document.getElementById("followers").innerHTML = followers;

  let following = `<span>${data.following.totalCount}</span> following`;
  document.getElementById("following").innerHTML = following;

  let stars = `<i class="far fa-star"></i> <span>${data.starredRepositories.totalCount}</span>`;
  document.getElementById("stars").innerHTML = stars;

  let location = `<i class="fas fa-map-marker-alt"></i> ${data.location}`;
  document.getElementById("location").innerHTML = location;

  let repositoryELements = "";

  for (let i = 0; i < repositories.length; i++) {
    let repository = repositories[i];

    repositoryELements += `
      <div>
        <div class="repoDetails">
          <h3>
            <a href="#">${repository.name}</a>
            ${repository.isPrivate ? `<span>Private</span>` : ``}
          </h3>
          ${repository.parent != null ? 
            `<span> Forked from 
              <a href="#">${repository.parent.nameWithOwner}</a>
            </span>
            <span>${repository.parent.description != null ? repository.parent.description : ``}</span>`: ``}
          <div>
            <span>
              <span style="background: ${repository.primaryLanguage.color} !important"></span>
              <span>${repository.primaryLanguage.name}</span>
            </span>
            ${repository.isFork ? 
              `<span>
                <a href="#">
                  <i class="fas fa-code-branch"></i>
                  ${repository.parent.forkCount}
                </a>
              </span>` : repository.forkCount > 0 ? 
              `<span>
                <a href="#">
                  <i class="fas fa-code-branch"></i>
                  ${repository.forkCount}
                </a>
              </span>` : ``
            }
            ${repository.licenseInfo != null ? 
              `<span>
                  <i class="fas fa-balance-scale"></i>
                  ${repository.licenseInfo.name}
                </span>` : ``
            }
            <span>
              ${getDateDifferenceString(repository.updatedAt.split("T")[0])}
            </span>
          </div>
        </div>

        <div class="star">
          <a href="#">
            <i class="far fa-star"></i>
            Star
          </a>
        </div>
      </div>
    `;
  }
  document.getElementById("individualRepos").innerHTML = repositoryELements;

}

function getDateDifferenceString(date){
  
  let today = new Date();
  let updatedAt = new Date(date);

  let difference = today - updatedAt;
  let dayDifference = Math.floor((difference) / (1000 * 60 * 60 * 24));

  let dateDifferenceText = "";
  
  if (dayDifference < 2){
    dateDifferenceText = "Updated yesterday";
  } 
  else if (dayDifference < 31){
    dateDifferenceText = `Updated ${dayDifference} days ago`;
  }
  else {
    let day = updatedAt.getDate();
    let month = updatedAt.toLocaleString("default", { month: "short" });
    let yearDifference = (today.getFullYear() - updatedAt.getFullYear()) > 0 ? updatedAt.getFullYear() : "";

    dateDifferenceText = `Updated on ${day} ${month} ${yearDifference}`;
  }

  return dateDifferenceText;
}

window.toggleNav = () => {
  let element = document.querySelector(".nav-links");

  if (element.classList.contains("d-none")) {
    element.classList.remove("d-none");
  } else {
    element.classList.add("d-none");
  }
}

window.openDrop = (event) => {
  let className = event.target.className;
  hideAllContent();
  
  if (className != ""){
    if (className.includes("firstDrop"))
    document.getElementById("firstDropCont").style.display = "block";

    if (className.includes("secondDrop"))
      document.getElementById("secondDropCont").style.display = "block";

    if (className.includes("headerFirstDrop"))
      document.getElementById("headerFirstDropCont").style.display = "block";

    if (className.includes("headerSecondDrop"))
      document.getElementById("headerSecondDropCont").style.display = "block";
  }
  
}

window.hideAllContent = () => {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    openDropdown.style.display = "none";
  }
}

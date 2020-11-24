const ACCESS_TOKEN = " 723714fa5ee42ac96df427a3faa1b53ea15fa979";

window.addEventListener('scroll', function(e) {
  let scrollPosition = window.scrollY;
  console.log(scrollPosition)
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

  if (!className.includes("firstDrop") && !className.includes("secondDrop") 
    && !className.includes("headerFirstDrop") && !className.includes("headerSecondDrop")){
    hideAllContent();
  }
}

function toggleNav() {
  let element = document.querySelector(".nav-links");

  if (element.classList.contains("d-none")) {
    element.classList.remove("d-none");
  } else {
    element.classList.add("d-none");
  }
}

function openDrop(event){
  let className = event.target.className;
  hideAllContent();
  
  if (className.includes("firstDrop"))
    document.getElementById("firstDropCont").style.display = "block";

  if (className.includes("secondDrop"))
    document.getElementById("secondDropCont").style.display = "block";

  if (className.includes("headerFirstDrop"))
    document.getElementById("headerFirstDropCont").style.display = "block";

  if (className.includes("headerSecondDrop"))
    document.getElementById("headerSecondDropCont").style.display = "block";
  
}

function hideAllContent(){
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    openDropdown.style.display = "none";
  }
}

`query{
  user(login:"amaugosomto"){
    avatarUrl,
    bio,
    bioHTML,
    company,
    companyHTML,
    organization(login:"amaugosomto"){
      avatarUrl,
      repository(name:""){
        description
      }
    },
    organizations{
      totalCount
    },
    followers{
      totalCount
    },
    following{
      totalCount
    },
    repositories{
      totalCount
    }
  }
}
`

`query {
  viewer {
    login
    name
    url
    avatarUrl
    bio
    company
    location
    email
    
    status {
      emoji
      emojiHTML
      message
    }
    repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
        name
        description
        updatedAt
        isFork
        isFork
        parent{
          description
          nameWithOwner
        }
        licenseInfo{
          name
        }
        languages(last: 10) {
          nodes{
            color,
            name
          }
        }
      }
    }
    starredRepositories {
      totalCount
    }
    followers {
      totalCount
    }
    following {
      totalCount
    }
  }
}`
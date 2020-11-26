const ACCESS_TOKEN1 = "07938{}a0f5";
const ACCESS_TOKEN2 = "cf6549{}ca1473";
const ACCESS_TOKEN3 = "a7d8de{}ba1513";
const ACCESS_TOKEN4 = "a8ad{}df8";

const ACCESS_TOKEN = ACCESS_TOKEN1 + ACCESS_TOKEN2 + ACCESS_TOKEN3 + ACCESS_TOKEN4;

const USERNAME = "amaugosomto";
const BODY = {
  "query": `
    {
      user(login: "${USERNAME}") {
        login
        name
        url
        avatarUrl
        bio
        company
        location
        email
        status{
          emojiHTML
          message
        }
        repositories(first: 20,orderBy:{field: CREATED_AT, direction: DESC}){
          nodes{
            name
            description
            updatedAt
            isFork
            forkCount
            isPrivate
            parent{
              description,
              nameWithOwner,
              forkCount
            }
            licenseInfo{
              name
            }
            primaryLanguage{
              color,
              name
            }
          }
        }
        starredRepositories{
          totalCount
        }
        followers{
          totalCount
        }
        following{
          totalCount
        }
      }
    }
  `
};  

export{
  ACCESS_TOKEN,
  BODY
}
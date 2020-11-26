const ACCESS_TOKEN = "723714fa5ee42ac96df427a3faa1b53ea15fa979";
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
const ACCESS_TOKEN = "723714{}fa5ee42a{}c96df42{}7a3faa{}1b53ea15{}fa979";
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
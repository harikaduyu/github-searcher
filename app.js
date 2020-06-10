// Init Github

const github = new GitHub;

//init UI
const ui = new UI;


// Search input 
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if(userText!==''){
    // Make http call
    github.getUser(userText)
    .then(data => {
      console.log(data.profile);
      
      if(data.profile.documentation_url != null) {
        // Show alert

      } else {
        //Show profile
        ui.showProfile(data.profile);
      }
    })
  } else {
    // Clear profile 
    
  }
});
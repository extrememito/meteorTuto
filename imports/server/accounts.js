Accounts.onCreateUser((option, user)=>{
    if(Meteor.settings.admins.indexOf(option.email) > -1){
      user.roles = ['admin'];
    }
    return user;
})

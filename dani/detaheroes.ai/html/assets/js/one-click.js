/*-----------------------------------------------------------------------------------*/
/* Google One Click SignUp @ jayesh@InCreativeWeb.com
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

var googleUser = {};
var auth2;
var startApp = function() {
   window.gapi.load('client:auth2', function(){
   // Retrieve the singleton for the GoogleAuth library and set up the client.
   auth2 = window.gapi.auth2.init({
      client_id: '645811336147-2h30s6a900i2vda18k4kdd3tjclqm9v8.apps.googleusercontent.com',
      //cookiepolicy: 'single_host_origin',
      // Request scopes in addition to 'profile' and 'email'
      //scope: 'additional_scope'
      plugin_name: "chat"
   });
   attachSignin(document.getElementById('with-google-btn'));
   });
};
function attachSignin(element) {
   console.log("googleUser ", element);
   auth2.attachClickHandler(element, {},
      function(googleUser) {
            // googleUser.getBasicProfile().getName();
            // console.log(profile);
            var fields = [
               {
                  'name' : 'firstname',
                  'value': googleUser.getBasicProfile().getGivenName()
               },{
                  'name' : 'lastname',
                  'value': googleUser.getBasicProfile().getFamilyName()
               },{
                  'name' : 'email',
                  'value': googleUser.getBasicProfile().getEmail()
               },{
                  'name' : 'privacy_policy',
                  'value': true
               },{
                  'name' : 'profile_id',
                  'value': '(Google)'
               }
            ],
            url = 'https://api.hsforms.com/submissions/v3/integration/submit/23237715/b59201e6-d27c-4886-b22d-cdb30a8fddf2';
            icw_hubspot_send_oneclick(fields, url, window.location.origin + '/getting-started?signup=google', ' (Google One Click)');
            localStorage.setItem("email-get-early", googleUser.getBasicProfile().getEmail());
            localStorage.setItem("is-signup", 'yes');
      }, function(error) {

         $('#error').html('<div class="alert alert-danger text-center" role="alert">Error: Google authorization access invalid. Please try manual.</div>');
         console.log('Google One Click',JSON.stringify(error, undefined, 2));
      });
   $('#error').html('');
}
// startApp();



/*-----------------------------------------------------------------------------------*/
/* GitHub One Click SignUp @ jayesh@InCreativeWeb.com
/*-----------------------------------------------------------------------------------*/
const clientId = github_vars.client_id;
const redirectUri = github_vars.redirect_uri;
const githubAuthUrl = github_vars.github_auth_url;

// Attach the GitHub signup button click event
$('#with-github-btn').on('click', function () {
    // Redirect to GitHub for OAuth authentication
    window.location.href = `${githubAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user,user:email&state=github`;
    $('#error').html('');
});

// Function to handle the callback after GitHub authentication
function handleGitHubCallback() {
    // Parse the access token from the URL
    const accessToken = new URLSearchParams(window.location.search).get('code');
   //  console.log('jay accessToken', accessToken);

    // Use Ajax to exchange the access token for user data
    $.ajax({
        url: github_vars.ajax_url,
        method: 'POST',
        data: {
            action: 'github_signup',
            code: accessToken,
        },
        header: {'Accept': 'application/json'},
        success: function (response) {
            if (response.success) {
               var githubProfileData = response.data;
               console.log(githubProfileData);
                // Handle user data as needed
               //  alert(JSON.stringify(response.data));
               //  console.log('GitHub User Data:', response.data);
               if(githubProfileData != null){
                  const name = githubProfileData.name.split(' ');
                  let githubemail;
                  if(githubProfileData.email !== "" && githubProfileData.email != null && githubProfileData.email != undefined){
                     githubemail = githubProfileData.email;
                     localStorage.setItem("email-get-early", githubemail);
                  } else {
                     githubemail = githubProfileData.login;
                     localStorage.setItem("email-get-early", 'your email address here');
                  }
                  var fields = [
                     {
                        'name': 'firstname',
                        'value': name ? (name[0] ? name[0] : '') : ''
                    },
                    {
                        'name': 'lastname',
                        'value': name ? (name[1] ? name[1] : '') : ''
                    },
                    {
                        'name' : 'email',
                        'value': githubemail
                     },
                     {
                        'name' : 'privacy_policy',
                        'value': true
                     },
                     {
                        'name' : 'profile_id',
                        'value': githubProfileData.login + '(GitHub)'
                     }
                  ],
                  url = 'https://api.hsforms.com/submissions/v3/integration/submit/23237715/b59201e6-d27c-4886-b22d-cdb30a8fddf2';
                  icw_hubspot_send_oneclick(fields, url, window.location.origin + '/getting-started?signup=github', ' (Github One Click)');
                  // console.log("github-fields", fields);
                  localStorage.setItem("is-signup", 'yes');
               } else {
                  $('#error').html('<div class="alert alert-danger text-center" role="alert">Error: Your GitHub profile is not public, please proceed manually.</div>');
                  // alert("Your GitHub profile is not public, please proceed manually.");
               }
               
            } else {
               $('#error').html('<div class="alert alert-danger text-center" role="alert">Error: GitHub authorization access invalid. Please try manual.</div>');
                console.error('Error:', response.data);
            }
        },
        error: function (error) {
         $('#error').html('<div class="alert alert-danger text-center" role="alert">Error: GitHub authorization access invalid. Please try manual.</div>');
            console.error('Error exchanging GitHub code for access token:', error);
        }
    });
}


/*-----------------------------------------------------------------------------------*/
/* LinkedIn One Click SignUp @ jayesh@InCreativeWeb.com
/*-----------------------------------------------------------------------------------*/
// Replace YOUR_API_KEY with your LinkedIn API Key
// LinkedIn OAuth App credentials
const ldclientId = '77zb5caaa9qx98';
const ldredirectUri = 'https://dataheroes.ai/getting-started?signup=linkedin';
const linkedinAuthUrl = 'https://www.linkedin.com/oauth/v2/authorization';

// Attach the LinkedIn signup button click event
$('#with-linkedin-btn').on('click', function () {
    // Redirect to LinkedIn for OAuth authentication
    window.location.href = `${linkedinAuthUrl}?response_type=code&client_id=${ldclientId}&redirect_uri=${ldredirectUri}&scope=openid%20profile%20email`;
    $('#error').html('');
});

// Function to handle the callback after LinkedIn authentication
function handleLinkedInCallback() {
    // Parse the authorization code from the URL
    const authorizationCode = new URLSearchParams(window.location.search).get('code');

    // Exchange the authorization code for an access token
    $.ajax({
         url: github_vars.ajax_url,
        type: 'POST',
        data: {
            action: 'linkedin_one_click_signup',
            code: authorizationCode,
        },
        success: function (response) {
            console.log('LinkedIn User Data:', response);
            var LinkedInProfileData = response.data;
            var fields = [
               {
                  'name': 'firstname',
                  'value': LinkedInProfileData.given_name ? LinkedInProfileData.given_name : ' - '
              },
              {
                  'name': 'lastname',
                  'value': LinkedInProfileData.family_name ? LinkedInProfileData.family_name : ' - ' 
              },
              {
                  'name' : 'email',
                  'value': LinkedInProfileData.email
               },
               {
                  'name' : 'privacy_policy',
                  'value': true
               },
               {
                  'name' : 'profile_id',
                  'value': '(LinkedIn)'
               }
            ],
            url = 'https://api.hsforms.com/submissions/v3/integration/submit/23237715/b59201e6-d27c-4886-b22d-cdb30a8fddf2';
            icw_hubspot_send_oneclick(fields, url, window.location.origin + '/getting-started?signup=linkedin', ' (LinkedIn One Click)');
            if(LinkedInProfileData.email !== "" && LinkedInProfileData.email != null && LinkedInProfileData.email != undefined){
               localStorage.setItem("email-get-early", LinkedInProfileData.email);            } else {
               localStorage.setItem("email-get-early", 'your email address here');
            }

            localStorage.setItem("is-signup", 'yes');
        },
        error: function (error) {
            $('#error').html('<div class="alert alert-danger text-center" role="alert">Error: LinkedIn authorization access invalid. Please try manual.</div>');
            console.error('Error exchanging LinkedIn authorization code for access token:', error);
        }
    });
}


jQuery(document).ready(function($) {
   startApp();

   const urlParams = new URLSearchParams(window.location.search);
   
   // if (window.location.href.includes('code') && window.location.href.includes('state')) {
      if (urlParams.has('state') && urlParams.has('code')) {
      // Call the function to handle GitHub callback on page load
      handleGitHubCallback();
      console.log('handleGitHubCallback');
   }
   if (urlParams.get('signup') === 'linkedin' && urlParams.has('code')) {
      // Call the function to handle LinkedIn callback on page load
      handleLinkedInCallback();
      console.log('handleLinkedInCallback');
   }
});

function icw_hubspot_send_oneclick(fields, url, redirect, title){
   var data = {
     "fields": fields,
     "context": {
         "pageUri": window.location.href,
         "pageName": document.title + title
     },
     "legalConsentOptions": {
         "consent":{
             "consentToProcess":true,
             "text":"I agree to allow Dataheroes to store and process my personal data.",
             "communications":[
                 {
                     "value":true,
                     "subscriptionTypeId":999,
                     "text":"I agree to receive marketing communications from Dataheroes."
                 }
             ]
         }
     }
   },
   xhr = new XMLHttpRequest(),
   final_data = JSON.stringify(data);
   xhr.open('POST', url);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.onreadystatechange = function() {
       // console.log(xhr.responseText);
       window.location.href = redirect;
   }
   xhr.send(final_data);
}
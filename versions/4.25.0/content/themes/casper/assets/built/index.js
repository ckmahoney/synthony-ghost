// Checks the Ghost endpoint to see if a user is logged in
async function isMember() {
  let resp = fetch("/members/api/member");

  return resp.then(r => 
     Promise.resolve( 200 == r.status ) );
}

async function getMember() {
  if (! await isMember() ) return false;

  let resp = fetch("/members/api/member");

  return resp.then(r => r.json());
}

// Transforms the document.cookie string to a JavaScript object
function getCookies () {
  return document.cookie.split(";").reduce((all, str) => {
    let k = str.slice(0, str.indexOf("="));
    let v = str.slice(1+str.indexOf("="));
     all[k] = v;
     return all;
  }, {})
}


// Puts the expiriation date of login in localStorage
function setLoginExpiry() {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 1);
  localStorage.loginExpiry = expiry;
}

// Puts the member data in localstorage
function storeMember( data ) {
  localStorage.member = JSON.stringify(data);
}

function getStoredMember() {
  return JSON.parse(localStorage.member);
}


function cleanupStorage() {
  delete localStorage.loginExpiry;
  delete localStorage.member;
}

// Checks to see if the current login has expired
function isLoginExpired() {
  let prev = new Date( localStorage.loginExpiry );
  if ( !prev ) return true;

  let now = new Date();
  return now > prev;
}


function isLoginValid() {
  if (!isLoginExpired()) return true;

  let prev = localStorage.loginExpiry;
  let now = new Date();

  return now > prev;
}


// Determines if the member is logged in
async function isActiveMember() {
  if ( isLoginExpired() ) {
    cleanupStorage();
    return false;
  }

  let current = await getMember();
  if ( current ) {
    setLoginExpiry();
    storeMember( current );
    return true;
  }

  return false
}


function fixFontSizes() {
  const node = document.querySelector("html");
  node.style.setProperty("font-size", "100%");

  var el = document.createElement(".gh-canvas");
  el.setProperty("display", "block")


}


function initializeSongDesigner(member) {
  console.log("Starting the elm with member:", member)
  const root = document.querySelector ("#song-designer");

  if (!root) {
    console.log("not an elm page")
    return; // not on a song designer page
  }

  if (typeof Elm == "undefined" ) {
    throw new Error("The elm song designer was not found.");
  }

  var app = Elm.Main.init( { flags: member, node: root } );
  
  document.getElementById("audio-player").volume = 0.5;
  fixFontSizes();

  function playMusic() {
      document.getElementById("audio-player").play();
  }

  function stopMusic() {
      document.getElementById("audio-player").pause();
      document.getElementById("audio-player").currentTime = 0;
  }

  function pauseMusic() {
      document.getElementById("audio-player").pause();
  }

  function setSource(source) {
      document.getElementById("audio-player").pause();
      document.getElementById("audio-player").setAttribute("src", source);
      document.getElementById("audio-player").play();
  }

  app.ports.playMusic.subscribe(playMusic);

  app.ports.stopMusic.subscribe(stopMusic);

  app.ports.pauseMusic.subscribe(pauseMusic);

  app.ports.setSource.subscribe(setSource);
}


async function init() {
  if (await isActiveMember()) {
    initializeSongDesigner(getStoredMember());
  }
}


init()

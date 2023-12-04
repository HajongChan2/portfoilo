export default function ContentScroll(content) {
    if (content === 'Profile') {
      return document.getElementById('profile').offsetTop + 30;
    } else if (content == 'Skills') {
      return document.getElementById('skill').offsetTop + 30;
    }else if(content == "chan's portfolio"){
      return document.getElementsByTagName('body');
    }else if(content == 'Project'){
      return document.getElementById('project').offsetTop + 30;  
    }
    console.log(content)
    return document.documentElement.scrollTop + 70;
}

javascript:
apikeyhash='MYBASE64ENCODEDAPIKEY';
workspaceid='MYWORKSPACEID';
title=document.title;
loc=location.href;
if(document.getSelection) { 
  text=location+'\r\r'+document.getSelection(); }
else {
  text=location;
}
xml = new XMLHttpRequest();
xml.open('POST', 'https://app.asana.com/api/1.0/tasks', false);
xml.setRequestHeader("Authorization", 'Basic '+apikeyhash);
xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xml.send('name='+encodeURIComponent(title)+'&notes='+encodeURIComponent(text)+'&workspace='+encodeURIComponent(workspaceid)+'&assignee='+'me');
alert('Task created!');
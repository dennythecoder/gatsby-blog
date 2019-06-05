---
templateKey: blog-post
title: 'SharePoint 2010, REST, AngularJS'
date: 2012-09-25T15:57:00.000Z
description: >-
  Sometimes you need a more dynamic means of changing things on a form in
  SharePoint.  Sometimes you need to create an interface that is less
  "SharePoint-y".  Using REST in conjunction with a library like AngularJS might
  be the route to go in these situations.
featuredpost: false
featuredimage: /img/background-gradient-Blue Skies.jpg
tags:
  - sharepoint
  - technical
  - javascript
  - angularjs
---
SharePoint 2010 has a REST API that will allow you to easily make calls from JavaScript to things like lists.  The following function handles getting items from a list and converting them to an array of JavaScript objects. 

```javascript
function getListItems(listName, cb){
  var baseUrl = '//path/to/site/';
  var serviceUrl = baseUrl + '_vti_bin/listdata.svc/';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', serviceUrl + listName);
  xhr.setRequestHeader('accept', 'application/json');
  xhr.onreadystatechange = function(){
    if(this.readyState === 4){
      var responseObj = JSON.parse(this.responseText);
      var results = responseObj.d.results;
      cb(results);
    }
  }
  xhr.send();
}
```
Even reading these list items has applications for SharePoint forms and rendering custom UIs. For example:
```javascript
// filter dropdown
getListItems('Choices', function(choices){
  var selectEl = document.getElementById('#some-select-field');
  for(var i = 0; i < choices.length; i++){
    var optionEl = document.createElement('option');
    optionEl.value = choice.Value;
    selectEl.appendChild(optionEl);
  }
});
```

Or… if you're using AngularJS (which is great, BTW), you may do something like this.

```html
<ul>
  <li ng-repeat="item in items">
    {{item.Title}}
  </li>
</ul>
```
```javascript
var app = angular.module("spApp", []);
app.controller("ctrl", function($scope) {
  $scope.items = [];
  $scope.initItems = function(items){
    this.items = items;
  }
  getListItems('Tasks', $scope.initItems);
});
```

It's also possible to use `POST` to make changes to list items, but the type of list items you use may make it difficult to implement.  Note that you will likely want to use a "JSON polyfill" as SharePoint 2010 may include a meta tag that makes Internet Explorer forget JSON.

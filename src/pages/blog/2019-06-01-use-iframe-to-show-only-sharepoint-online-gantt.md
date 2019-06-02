---
templateKey: blog-post
title: Use an iframe to show only SharePoint Online Gantt
date: 2019-02-21T05:16:05.678Z
description: >-
  Using custom dashboards that integrate out-of-the-box components can be a pain
  at times, but the following CSS will help you hide all the noise.
featuredpost: false
featuredimage: /img/icon-business-idea.png
---
```css
#suiteBarDelta, #s4-ribbonrow, #s4-titlerow, #sideNavBox, #DeltaFormDigest{
  display:none !important
}

#contentBox{
  margin:0
}
#contentRow{
  padding:0
}
#s4-workspace{
	height:auto;
	width:auto;
}
```
You can then use an iframe to reference your out-of-the-box SharePoint page.

```html
<iframe src="path/to/calendar-with-css.aspx" />
```

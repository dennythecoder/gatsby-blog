---
templateKey: blog-post
title: Customize the Ribbon in Access 2010
date: 2011-03-16T17:50:58.814Z
description: >-
  Development options in Microsoft Access continue to surprise me.  In this
  post, I will discuss how to install a ribbon in MS Access.  (Note that I think
  this will work in Excel as well)
featuredpost: false
featuredimage: /img/icon-business-safebox.png
---
- Take a look at the XML below to get some ideas on how to build your own

- Save the XML in a text file with a .xml extension

- Load it from the ribbon menu in options

- Now you should be able to see your new tab(s)

```xml
<customUI xmlns="http://schemas.microsoft.com/office/2006/01/customui">
  <ribbon startFromScratch="false">
    <tabs>
    <tab id="dbCustomTab" label="Data Input" visible="true">
    <group id="gppersonnel" label="Personnel">
    <button id="createprsn" screentip="Create Person"
supertip="Click here to create person not in the database" label="Create
Person" imageMso="DistributionListAddNewMember"
onAction="=OpenMyform('frm_new_person')" />
    <button id="editprsn" screentip="Edit person" supertip="Click
here to edit a person" label="Edit Person"
imageMso="DistributionListUpdateMembers"
onAction="=OpenMyform('frm_edit_person')" />
    </group>
        <group id="dbCustomGroup" label="Go/No-Go Checks">
        <button id="creatervw" label="109 Review"
imageMso="DatasheetColumnLookup"
onAction="=OpenMyform('frm_create_109_rvw')"/>
        <button id="createirf" label="Create IRF"
imageMso="DatasheetColumnLookup"
onAction="=OpenMyform('frm_create_irf')"/>
        </group>
        <group id="evalmgmnt" label="Evaluations">
        <button id="createeval" label="Create Evaluation"
imageMso="DatasheetColumnLookup"
onAction="=OpenMyform('frm_create_eval')"/>
        <button id="editeeval" label="Edit Evaluation"
imageMso="DatasheetColumnLookup"
onAction="=OpenMyform('frm_edit_unclosed_eval')"/>
        </group>
    </tab>
    <tab id="reporttab" label="External" visible="true">
    <group id="reportsgroup" label="Reports">
          <button id="partBreport" label="Part B Index"
onAction="=OpenMyReport('rpt_active_b')"/>
          <button id="partCreport" label="Part C Index"
onAction="=OpenMyReport('rpt_active_c')"/>
        </group>
        <group id="exportGroup" label="Exporting">
          <control idMso="ExportExcel" label="Export to Excel"
enabled="true"/>
        </group>
    </tab>
    <tab id="examstrends" label="Exams/Trends" visible="true">
    <group id="exams" label="Exams">
      <button id="createexam" label="Create Exam"
imageMso="HappyFace" screentip="Create Exam" supertip="Click here to
create a new test" onAction="=OpenMyform('frm_create_exam')" />
      <button id="editexam" label="Edit Exam" imageMso="HappyFace"
screentip="Edit Exam" supertip="Click here to create a new test"
onAction="=OpenMyform('frm_edit_exam')" />
    </group>
    <group id="trending" label="Trending" visible="true">
      <button id="inputOB" label="Input OB" imageMso="Happy Face"
screentip="Input OB" supertip="Click here to input OB trending
information" onAction="=OpenMyform('frm_openbook')" />
      <button id="inputCB" label="Input OB" imageMso="Happy Face"
screentip="Input CB" supertip="Click here to input CB trending
information" onAction="=OpenMyform('frm_closedbook')" />
      <button id="inputTP" label="Input Task Phase" imageMso="Happy
Face" screentip="Input Task Phase" supertip="Click here to input Task
phase trending information" onAction="=OpenMyform('frm_new_taskphase')"
/>
    </group>
    </tab>
    </tabs>
  </ribbon>
</customUI>
```

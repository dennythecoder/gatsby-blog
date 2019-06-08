---
templateKey: blog-post
title: Bad Password Rules Lead to Bad Passwords
date: 2019-06-08T20:11:40.157Z
description: >-
  Modern password policies lead to disruption of IT services in many businesses.
  While the intent of such policies is to keep data and customers secure, the
  result is the opposite.
featuredpost: false
featuredimage: /img/icon-business-padlock.png
tags:
  - cybersecurity
---

# Special Character Requirements
In an odd effort to prevent SQL injection, some password policies refuse to allow users to use certain characters. The server-side code should be designed to allow for and escape special characters that might be used in an SQL injection attack. 
# Maximum Lengths
I have seen at least two web applications with a maximum length of 12 characters. Increasing the maximum length of password fields allows for a higher level of entropy.
# Password Change Frequency
We have rules that force us to change passwords every 90 days and we're not allowed to repeat the past 15. What am I supposed to do with that when it comes to logging into a workstation… especially one that I seldom use.
# The Fix
- Allow any character - there are well-established norms for dealing with this in any web language
- Higher minimum character count
- Remove password changes - password changes lead to people writing down passwords. If anything, password changes make things worse.

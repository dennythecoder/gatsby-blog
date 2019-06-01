---
templateKey: blog-post
title: Who is Logged Into my Service Now Instance?
date: 2016-06-22T14:34:00.000Z
description: >-
  In this post, I will show you a method for tracking users in your Service Now
  Instance even if you're on multiple nodes.
featuredpost: true
featuredimage: /img/chemex.jpg
tags:
  - programming
  - servicenow
  - technical
---
A couple months ago, we had a requirement for determining which users were logged in on our instance. At first glance, this seemed to be an easy issue. After all, we have the ability to navigate to “Logged In Users” in the navigator. However, we quickly realized that the number of users in the list did not match the number of users logged in our diagnostics page.



What is the reason for this discrepancy? A casual glance at the results from the almighty search engine, quickly revealed the reason: “Logged In Users” only shows users logged in the same node. In spite of several questions about the topic, there weren’t any answers that succinctly answered the question. We considered the following approaches:



Querying the sys_transaction table

Somehow consolidating the “Logged In Users”

Rejecting the requirement

While the third one might be unthinkable for some, it was what was initially decided on. Querying the sys_transaction table might also be too costly in terms of poor performance and inaccuracy.



# HOW WE DID IT

We created a table with the same structure as the “Logged In Users” list. Since this list goes by v_user\_session we copied this structure (with the u\_ prefixes as required):

```

Label                   Name                   Type

Active                  active                 True/False

Created                 sys_created_on         Date/Time

Created by              sys_created_by         String

Last accessed           last_accessed          Date/Time

Last SQL                last_sql               String

Last transaction        last_transaction       String

Last transaction time   last_transaction_time  Date/Time

Locked                  locked                 True/False

Session ID              session_id             Sys ID (GUID)

Total transactions      total_transactions     Integer

Transaction duration    total_duration         String

Updated                 sys_updated_on         Date/Time

Updated By              sys_updated_by         String

Updates                 sys_mod_count          Integer

User                    user                   String
```

2. We created a scheduled job to copy over the information:


```
var vUserSession = new GlideRecord('v_user_session'),    
    uUserSession = new GlideRecord('u_user_session')  vUserSession.query();

while(vUserSession.next()){

  uUserSession.initialize();
  uUserSession.u_user = vUserSession.user;

  /*copy other fields here*/

  uUserSession.insert();
}
```

For us, this job is scheduled to run every 10 minutes on all nodes. That means that each node will insert the v_user_session data into this one point every 10 minutes. The script that checks to see if a user is logged in queries the u_user_session to check if the user has a record that was created in the previous 10 minutes.

For more precision, we could run the jobs more frequently, but this is accurate enough for our usage without being too concerned about performance.


Do you have a better solution? Please share!

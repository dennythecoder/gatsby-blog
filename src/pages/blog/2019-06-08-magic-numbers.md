---
templateKey: blog-post
title: Magic Numbers
date: 2016-07-17T18:18:00.000Z
description: >-
  Magic numbers have been discussed at length by several thought leaders in
  software development over the years.
featuredpost: false
featuredimage: /img/icon-business-percentage.png
tags:
  - technical
  - 'c#'
  - programming
---
> Uncle Bob Martin wrote a section in Clean Code titled "Replace Magic Numbers with Named Constants"
>
> Steve McConnell wrote "Avoid 'magic numbers'. Magic numbers are literal numbers, such as 100 or 47524 that appear in the middle of a program without explanation… use constants"
>
> Deitel & Deitel advised "Defining the size of an array as a constant variable instead of a literal constant makes programs clearer. This technique eliminates so-called magic numbers."

Such advice is so ubiquitous and consistent that it has been elevated to a law of software engineering that transcends programming language. 

Recently, I came across code similar to the following that was performing an action in response to a change in a workflow.
```
public static void Main(string[] args)
{
  int stage = 6;
  if( stage >= 6){
    DoAction();

  }
}
```

What is 6 supposed to mean? I have the vague impression that it is a stage that is greater than 1 or 2, but I don't know what those are.

```
enum Stages
{
    NEW = 1,
    OPEN = 2,
    ACTIVE = 3,
    AWAITING_CUSTOMER = 4,
    AWAITING_VENDOR = 5,
    RESOLVED = 6,
    CLOSED = 7
}

public static void Main(string[] args)
{
  int stage = 6;
  if( stage >= (int)Stages.RESOLVED ){
    DoAction();
  }
}
```
With this syntax, I have made it clear what 6 is. Furthermore, I have clarified what the other stages might be including the fact that we're not working from zero.

## Notable Exceptions

However, not all numbers should be treated as magical. Some numbers are so common and impervious to change that they can be left as is.

### Loop iterator

In this case, most programmers will understand that every item in an array may be iterated upon.
```
public static void Main(string[] args)
{

    for(int i = 0; i < 20; i += 1)

    {

    DoAction();   

    }

}
```
### Mathematical Formulas

Mathematical formulas that function as constants themselves may be ripe for "magic number" usage as well.

```
public static double ConvertToFarenheit(double degreesInCelsius)
{
  return degreesInCelsius * 1.8 + 32;
}
```

### In Closing

When in doubt assign numbers to constants. This will ensure that the next developer can better understand your code. If you come across a number that you don't understand and later figure it out, you should make it a point to leave the code better than you found it.

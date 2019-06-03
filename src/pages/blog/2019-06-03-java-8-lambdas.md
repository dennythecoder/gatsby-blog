---
templateKey: blog-post
title: Java 8 Lambdas
date: 2014-05-04T19:24:38.185Z
description: >-
  In this post, I discuss my brief experience with Java 8's lambdas and thoughts
  about them.
featuredpost: false
featuredimage: /img/icon-business-flask.png
tags:
  - java
  - technical
  - javascript
---
Java 8 was released a month ago and included:

* forEach() method in Iterable interface
* default and static methods in Interfaces
* Functional Interfaces & Lambda Expressions
* Java Stream API 
* Java Time API
* Collection API improvements
* Concurrency API improvements

The Stream and Time APIs are going to be extremely practical and other improvements are welcomed.  However, the one addition I wanted to play around with the most was the lambda expressions.

# What is a Lambda Expression?

These types of expressions go by many names.  A noticeable one is the usage of _anonymous_ expressions in JavaScript, a language that allows for anonymous functions to be passed.

Seeing is believing though.  Let's press!

# Java Example

I will show you a contrived object used to perform _some_ math function that accepts two `int`s and returns an `int`.

You first need to create an interface that has at most one abstract function.  This interface is now known as a functional interface.

```java
interface IMath { 
  int execute(int a, int b);  
} 
```

You can then use following syntax to create a function by shorthand.  The declaration is very different.

```java
class Main {
  public static void main(String\[] args) {
    IMath addObj = (int x, int y)-> x + y; // Instantiate object
    int result = addObj.execute(1,2); // the lambda function is executed
    System.out.println(result);  // 3
  }
}
```
What would this contrived example look in another language?  Let's go to the language of the web.

# JavaScript Example

Although contrived, the following is idiomatic and could exist in production code.
```javascript
  var execute = function(fn, a, b) {
    return fn(a, b);
  };
  var add = function(a, b){
    return a + b;
  };

  var result = execute(add, 1, 2);

  console.log(result);  // 3
```
# Conclusion

I don't think that the Java community will immediately jump on the chance to use lambdas in the near future.  They seem to be an awkward abstraction.

----------------------------------------------------
building_node_applications_with_mongodb_and_backbone
----------------------------------------------------

This is the code sample directory for the book Building Node Applications with MongoDB and Backbone. May have bumped versions and modified code where I felt it was nescessary.

(c) 2014 Conrado Buhrer

Introduction
------------

To view these samples simply step through each commit, and you'll progressively see the application grow. A small explanation on how to view each sample is presented always appended to this file. Each commit relates to a sub-topic o of each chapter in the book.

You'll need to install `nodejs`, on ubuntu 14.04 `apt-get install node-js` will install v0.10.30, which is what was used on these examples.

To get set up you may have to `cd` to the project directory and `npm install` and possibly repeat installation at each checkout, the run `node app`.

Chapter 2
---------

Introduction to Node.js

Commit 1 - Express
''''''''''''''''''

The following urls demo the sample code: ::

    /stooges/[name]
    /stooges/
    /

Commit 2 - Templates
''''''''''''''''''''

The previous urls still demo the code, which was updated to use jade templates

Commit 3 - Events
'''''''''''''''''

Run `node bin/2_6_events.js` to demo events.

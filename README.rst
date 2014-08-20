----------------------------------------------------
building_node_applications_with_mongodb_and_backbone
----------------------------------------------------

This is the code sample directory for the book Building Node Applications with MongoDB and Backbone. May have bumped versions and modified code where I felt it was nescessary.

2014 Conrado Buhrer

Introduction
------------

To view these samples simply step through each commit, and you'll progressively see the application grow. A small explanation on how to view each sample is presented always appended to this file. Each commit relates to a sub-topic o of each chapter in the book.

You'll need to install ``nodejs``, on ubuntu 14.04 ``apt-get install node-js`` will install v0.10.30, which is what was used on these examples.

To get set up you may have to ``cd`` to the project directory and ``npm install`` and possibly repeat installation at each checkout, and (re-)run ``node app.js``.

Chapter 2
---------

Introduction to Node.js

Express
'''''''

The following urls demo the sample code: ::

    /stooges/[name]
    /stooges/
    /

Templates
'''''''''

The previous urls still demo the code, which was updated to use jade templates

Events
''''''

Run ``node bin/2_6_events.js`` to demo events.

Socket.io
'''''''''

socket.io added, re-run ``npm install``, demo here: ::

    /stooges/chat/

Chapter 3 & 4
-------------

Chapters 3 and 4 are not implemented for lack of functional code.

Chapter 5 - Setting up the project
----------------------------------

mongoose added, re-run ``npm install``, yet not used in the chapter.

Only one commit for the entire project as it will only function as a whole.

The chapter adds basic scafolding for the project, there are a couple errata in the book.

* missing instruction to download ``underscore.js``.
* missing instruction to download ``text.js``.
* missing ``public/templates/index.html``, simple hello world added here.
* conflicting use of ``public/js/lib`` and ``public/js/libs`` directory, ``lib`` used here.

Visit the following url to demo the application: ::

    /

Chapter 6
---------

Author mentioned TODO:

* implement salted passwords
* make every request check authenticated session key
* confirm e-mail, confirm password
* registration form feedback on failures

errata:

* missing instructions for installing ``nodemailer``
* missing ``config/mail.js``
* missing ``layout.jade``

updated:

some middleware had to be replaced due to updated ``express``:

* ``express.limit`` removed - built-in to ``body-parser``
* ``express.bodyParser`` replaced with ``body-parser``
* ``express.cookieParser`` replaced with ``cookies``, needs ``keygrip``
* ``express.session`` replaced with ``express-session``

To demo the code visit::

    /#register
    /#login
    /#index
    /#forgotpassword

Chapter 7
---------

errata:

* missing ``public/js/views/status.js``
* missing ``public/js/SocialNetView.js``
* minor typos and forgotten refactors


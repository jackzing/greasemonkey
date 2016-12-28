// ==UserScript==
// @name         jjshouse menu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      http://*.jjshouse.*
// @grant        GM_addStyle
// ==/UserScript==
GM_addStyle(".jack-nav-menu {position: fixed; left: 0; top: 40%; width: 7.8; margin: -2.5em 0 0 0; z-index: 5; background: rgba(140, 124, 98, 0.34); color: rgba(7, 0, 1, 0.67); font-weight: bold; font-size: 14px; text-align: left; border-right: none; padding: 0.5em 2.5em 0.5em 0.5em; box-shadow: 0 1px 3px black; border-radius: 0.5em 3em 3em 0.5em; } .jack-nav-menu li {list-style-type: lower-greek; list-style-position: inside; } .jack-nav-menu li a {color: inherit; text-decoration: none; } .jack-nav-menu li a {color: inherit; text-decoration: none; } .jack-nav-menu li a:visited {color: inherit; } .jack-nav-menu li a:hover {color:#4F2958; text-decoration: underline; }");
(function() {
    // All items we'd like to add
    var navItems = [
        {href: 'www.jjshouse.com', text: 'JJsHouse'},
        {href: 'www.jjshouse.co.uk', text: 'UK JJsHouse'},
        {href: 'www.jjshouse.fr', text: 'FR JJsHouse'},
        {href: 'www.jjshouse.no', text: 'NO JJsHouse'},
        {href: 'www.jjshouse.se', text: 'SE JJsHouse'},
        {href: 'www.jjshouse.DE', text: 'DE JJsHouse'},
        {href: 'm.jjshouse.com', text: 'M Mobile'},
        {href: 'm.jjshouse.co.uk', text: 'UK Mobile'},
        {href: 'm.jjshouse.fr', text: 'FR Mobile'},
        {href: 'm.jjshouse.no', text: 'NO Mobile'},
        {href: 'm.jjshouse.se', text: 'SE Mobile'},
        {href: 'm.jjshouse.de', text: 'DE Mobile'},
        {href: 'r1.jjshouse.com', text: 'R1 JS'},
        {href: 'r2.jjshouse.com', text: 'R2 JS'},
        {href: 'p.jjshouse.com', text: 'P JS'},
        {href: 'mp.jjshouse.com', text: 'MP JS'}
    ];

    // A few variables for use later
    var navElem = document.createElement("nav"),
        navList = document.createElement("ul"),
        navItem, navLink;

    navElem.className = "jack-nav-menu";
    navElem.appendChild(navList);

    // Cycle over each nav item
    for (var i = 0; i < navItems.length; i++) {
        // Create a fresh list item, and anchor
        navItem = document.createElement("li");
        navLink = document.createElement("a");

        // Set properties on anchor
        navLink.href = location.href.replace(location.host, navItems[i].href);
        navLink.innerHTML = navItems[i].text;

        // Add anchor to list item, and list item to list
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    }

    // Set first list item as current
    navList.children[0].className = "current";

    // Add list to body (or anywhere else)
    window.onload = function () {
        document.body.appendChild(navElem);
    };
})();
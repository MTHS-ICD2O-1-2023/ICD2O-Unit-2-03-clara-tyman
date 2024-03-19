// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html


/**
 * This function gets users street name and street number and shows it back to user.
 */
function enterClicked() {
  // input
  const streetname = document.getElementById("street-name").value
  const streetnumber = parseInt(document.getElementById("street-number").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Your info is: " + streetname + streetnumber + "."
}
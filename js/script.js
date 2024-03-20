// Copyright (c) 2024 Clara Tyman All rights reserved
//
// Created by: Clara Tyman
// Created on: Mar 2024
// This file contains the JS functions for index.html


/**
 * This function gets users street name and street number and shows it back to user.
 */
function enterClicked() {
  // input
  const streetname = document.getElementById("Street-name").value
  const streetnumber = parseInt(document.getElementById("Street-number").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Your address is: " + streetnumber + " " + streetname + "."
}
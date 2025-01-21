jQuery("#simulation")
  .on("click", ".s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_4" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_4",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_4",
                  "property": "jimGetValue"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_4" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_4",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_4" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_4",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_14")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_4",
                  "property": "jimGetValue"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_4" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_4",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_5" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_5",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_5",
                  "property": "jimGetValue"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_5" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_5",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_5" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_5",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_17")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_5",
                  "property": "jimGetValue"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_5" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_5",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_7" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_7",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_16")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_7",
                  "property": "jimGetValue"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_7" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_7",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_7" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_7",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_23")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_7",
                  "property": "jimGetValue"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_7" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_text_7",
                        "property": "jimGetValue"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_4",
                    "property": "jimGetValue"
                  },"0" ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_4",
                    "property": "jimGetValue"
                  },"500" ]
                } ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_5",
                    "property": "jimGetValue"
                  },"0" ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_5",
                    "property": "jimGetValue"
                  },"500" ]
                } ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_7",
                    "property": "jimGetValue"
                  },"0" ]
                },{
                  "action": "jimGreater",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_7",
                    "property": "jimGetValue"
                  },"500" ]
                } ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Button_1" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_13" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_9" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_10" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_14" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_13" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_9" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_10" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_14" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_16" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_11" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_12" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_17" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_16") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_16" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_11" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_17") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_12" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_17" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_21" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_15" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_16") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_16" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_23" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_21") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_21" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_15" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_23") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #shapewrapper-s-Ellipse_16" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  },{
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Path_23" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Ellipse_9")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Ellipse_10")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_13")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_14")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Ellipse_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Ellipse_12")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_16")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_17")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Ellipse_15")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Ellipse_16")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_21")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_23")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  })
  .on("scroll.jim", ".s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc .scroll", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowScrollY"
                },"100" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Rectangle_10" ],
                    "attributes": {
                      "filter": " drop-shadow(-3.061616997868383E-16px 5.0px 5px rgba(178,178,178,0.4))"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-91ea563e-dd0a-48f8-8e2a-3a7c077784bc #s-Rectangle_10" ],
                    "attributes": {
                      "filter": " drop-shadow(-3.061616997868383E-16px 5.0px 5px rgba(178,178,178,0.0))"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });
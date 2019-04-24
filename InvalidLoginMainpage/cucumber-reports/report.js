$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/InvalidLoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Inviled login the user in cases: \"\u003cCases\u003e\"",
  "description": "",
  "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on https://tester.codersguru.pl/login webside",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered Login: \"\u003cEmail\u003e\" and Password: \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";",
  "rows": [
    {
      "cells": [
        "Cases",
        "Email",
        "Password"
      ],
      "line": 9,
      "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;1"
    },
    {
      "cells": [
        "Empty Password",
        "kordecki.k@gmail.com",
        ""
      ],
      "line": 10,
      "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;2"
    },
    {
      "cells": [
        "Empty Username",
        "",
        "codersguru"
      ],
      "line": 11,
      "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;3"
    },
    {
      "cells": [
        "Empty Username And Password",
        "",
        ""
      ],
      "line": 12,
      "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;4"
    },
    {
      "cells": [
        "Invalid Username",
        "rhyhh34t3y5y",
        "codersguru"
      ],
      "line": 13,
      "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;5"
    },
    {
      "cells": [
        "Invalid Password",
        "kordecki.k@gmail.com",
        "474h5wv 455"
      ],
      "line": 14,
      "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;6"
    },
    {
      "cells": [
        "Invalid Username And Password",
        "56756hbt555",
        "bgh6tgj6q5"
      ],
      "line": 15,
      "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Inviled login the user in cases: \"Empty Password\"",
  "description": "",
  "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on https://tester.codersguru.pl/login webside",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered Login: \"kordecki.k@gmail.com\" and Password: \"\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnHttpsTesterCodersguruPlLoginWebside()"
});
formatter.result({
  "duration": 12917838648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kordecki.k@gmail.com",
      "offset": 16
    },
    {
      "val": "",
      "offset": 53
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 1235262151,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 2586277868,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Inviled login the user in cases: \"Empty Username\"",
  "description": "",
  "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on https://tester.codersguru.pl/login webside",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered Login: \"\" and Password: \"codersguru\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnHttpsTesterCodersguruPlLoginWebside()"
});
formatter.result({
  "duration": 7573606322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    },
    {
      "val": "codersguru",
      "offset": 33
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 940577947,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 2237031414,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Inviled login the user in cases: \"Empty Username And Password\"",
  "description": "",
  "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on https://tester.codersguru.pl/login webside",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered Login: \"\" and Password: \"\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnHttpsTesterCodersguruPlLoginWebside()"
});
formatter.result({
  "duration": 8896634196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    },
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 956116956,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 1630507962,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Inviled login the user in cases: \"Invalid Username\"",
  "description": "",
  "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on https://tester.codersguru.pl/login webside",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered Login: \"rhyhh34t3y5y\" and Password: \"codersguru\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnHttpsTesterCodersguruPlLoginWebside()"
});
formatter.result({
  "duration": 7202923562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rhyhh34t3y5y",
      "offset": 16
    },
    {
      "val": "codersguru",
      "offset": 45
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 1678655082,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 1603284070,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Inviled login the user in cases: \"Invalid Password\"",
  "description": "",
  "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on https://tester.codersguru.pl/login webside",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered Login: \"kordecki.k@gmail.com\" and Password: \"474h5wv 455\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnHttpsTesterCodersguruPlLoginWebside()"
});
formatter.result({
  "duration": 7444935460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kordecki.k@gmail.com",
      "offset": 16
    },
    {
      "val": "474h5wv 455",
      "offset": 53
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 2378268500,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 1797512355,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Inviled login the user in cases: \"Invalid Username And Password\"",
  "description": "",
  "id": "login-test;inviled-login-the-user-in-cases:-\"\u003ccases\u003e\";;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on https://tester.codersguru.pl/login webside",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered Login: \"56756hbt555\" and Password: \"bgh6tgj6q5\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user isn\u0027t logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnHttpsTesterCodersguruPlLoginWebside()"
});
formatter.result({
  "duration": 7429902946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "56756hbt555",
      "offset": 16
    },
    {
      "val": "bgh6tgj6q5",
      "offset": 44
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 1495465854,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsnTLogged()"
});
formatter.result({
  "duration": 1580316207,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Login the user in cases: \"\u003cCases\u003e\"",
  "description": "",
  "id": "login-test;login-the-user-in-cases:-\"\u003ccases\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is on https://tester.codersguru.pl/login webside",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Entered Login: \"\u003cEmail\u003e\" and Password: \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The user is logged",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-test;login-the-user-in-cases:-\"\u003ccases\u003e\";",
  "rows": [
    {
      "cells": [
        "Cases",
        "Email",
        "Password"
      ],
      "line": 25,
      "id": "login-test;login-the-user-in-cases:-\"\u003ccases\u003e\";;1"
    },
    {
      "cells": [
        "Valid Username And Password",
        "kordecki.k@gmail.com",
        "codersguru"
      ],
      "line": 26,
      "id": "login-test;login-the-user-in-cases:-\"\u003ccases\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Login the user in cases: \"Valid Username And Password\"",
  "description": "",
  "id": "login-test;login-the-user-in-cases:-\"\u003ccases\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is on https://tester.codersguru.pl/login webside",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Entered Login: \"kordecki.k@gmail.com\" and Password: \"codersguru\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The user is logged",
  "keyword": "Then "
});
formatter.match({
  "location": "FillOutFormTest.userIsOnHttpsTesterCodersguruPlLoginWebside()"
});
formatter.result({
  "duration": 7521735998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kordecki.k@gmail.com",
      "offset": 16
    },
    {
      "val": "codersguru",
      "offset": 53
    }
  ],
  "location": "FillOutFormTest.enteredLoginAndPassword(String,String)"
});
formatter.result({
  "duration": 2474496548,
  "status": "passed"
});
formatter.match({
  "location": "FillOutFormTest.theUserIsLogged()"
});
formatter.result({
  "duration": 1789574811,
  "status": "passed"
});
});
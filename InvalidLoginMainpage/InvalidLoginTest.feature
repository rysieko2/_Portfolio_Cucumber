Feature: Login Test
  Scenario Outline: Inviled login the user in cases: "<Cases>"

    Given User is on https://tester.codersguru.pl/login webside
    When Entered Login: "<Email>" and Password: "<Password>"
    Then The user isn't logged

      Examples:
        |Cases                        |Email	           |Password   |
        |Empty Password               |kordecki.k@gmail.com|		   |
        |Empty Username	              |	                   |codersguru |
        |Empty Username And Password  |	                   |		   |
        |Invalid Username	          |rhyhh34t3y5y        |codersguru |
        |Invalid Password	          |kordecki.k@gmail.com|474h5wv 455|
        |Invalid Username And Password|56756hbt555	       |bgh6tgj6q5 |


  Scenario Outline: Login the user in cases: "<Cases>"

    Given User is on https://tester.codersguru.pl/login webside
    When Entered Login: "<Email>" and Password: "<Password>"
    Then The user is logged

    Examples:
        |Cases                        |Email	           |Password   |
        |Valid Username And Password  |kordecki.k@gmail.com|codersguru |


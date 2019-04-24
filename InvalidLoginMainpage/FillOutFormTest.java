package stepsdef;
import PageObject.MainPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import static junit.framework.TestCase.assertTrue;

public class FillOutFormTest {

    WebDriver driver;
    MainPage fillPage;

    @Given("^User is on https://tester\\.codersguru\\.pl/login webside$")
    public void userIsOnHttpsTesterCodersguruPlLoginWebside() {
        System.setProperty("webdriver.gecko.driver", "src\\test\\resource\\geckodriver.exe");
        this.driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.get("https://tester.codersguru.pl/login");
    }
    @When("^Entered Login: \"([^\"]*)\" and Password: \"([^\"]*)\"$")
    public void enteredLoginAndPassword(String arg0, String arg1) {
        fillPage = new MainPage(this.driver);
        fillPage.fillOutSecondForm(arg0, arg1);
    }
    @Then("^The user isn't logged$")
    public void theUserIsnTLogged() {
        assertTrue(fillPage.checkInvalidLogin().equals(true));
        driver.close();
    }
    @Then("^The user is logged$")
    public void theUserIsLogged() {
        assertTrue(fillPage.checkLogged().equals(true));
        driver.close();
    }
}

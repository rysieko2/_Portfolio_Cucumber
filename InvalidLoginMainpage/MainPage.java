package PageObject;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class MainPage {

    WebDriver driver;

    private By userNameIdField = By.id("username");
    private By passwordIdField = By.id("password");
    private By submitButtonField = By.id("_submit");
    private By emptyFieldsMsgField = By.cssSelector(".help-block");
    private By wrongDataMsgField = By.cssSelector(".db-info");
    private By nameLoginField = By.id("user-name");
    private Boolean emptyUserOrPassword = false;

    public MainPage(WebDriver driver){
        this.driver = driver;
    }

    public void fillOutSecondForm(String username, String password){
        driver.findElement(userNameIdField).clear();
        driver.findElement(userNameIdField).sendKeys(username);
        driver.findElement(passwordIdField).clear();
        driver.findElement(passwordIdField).sendKeys(password);
        driver.findElement(submitButtonField).click();

        if (username.isEmpty() || password.isEmpty()) {
            emptyUserOrPassword = true;
            driver.findElement(submitButtonField).click();
        }
    }
    public Boolean checkInvalidLogin() {
        if (emptyUserOrPassword == true) {
            WebElement resultMsgField = driver.findElement(emptyFieldsMsgField);
            return resultMsgField.isDisplayed();

        }else {
            WebElement resultMsgField1 = driver.findElement(wrongDataMsgField);
            return resultMsgField1.isDisplayed();
        }
    }
    public Boolean checkLogged() {
        WebElement nameLogged = driver.findElement(nameLoginField);
        return nameLogged.isDisplayed();
    }


}

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
plugin = {"pretty","html:target/cucumber-reports",
          "json:target/cucumber-reports/Cucumber.json",
          "junit:target/cucumber-reports/Cucumber.xml"},
features = "src\\test\\resource\\InvalidLoginTest.feature",
glue= {"stepsdef"},
monochrome = true
)

public class Runner {
}
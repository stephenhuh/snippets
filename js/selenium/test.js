var webdriver = require('selenium-webdriver'),
      By = webdriver.By,
          until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
        .build();
        driver.get('http://www.google.com/ncr');
        driver.findElement(By.name('q')).sendKeys('webdriver');
        driver.findElement(By.name('btnK')).click();
        driver.getTitle().then(function(title) {
          return title === 'webdriver - Google Search' ;
        });
        driver.quit();

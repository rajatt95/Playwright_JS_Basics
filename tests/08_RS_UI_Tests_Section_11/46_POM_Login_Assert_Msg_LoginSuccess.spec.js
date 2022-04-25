const {test,expect} = require('@playwright/test');
//const { default: CommonUtils } = require('../../utils/CommonUtils');
//import commonUtils from '../../utils/CommonUtils'
const {CommonUtils}=require('../../utils/CommonUtils');
const {LoginPage} = require('../../pageObjects/LoginPage');
const {DashboardPage} = require('../../pageObjects/DashboardPage');


test('RS - Playwright Test - RahulShettyAcademy Client App Login - POM_Login_Assert_Msg_LoginSuccess', async ({page} )=> {

    const data_login_username = "testtmail95@gmail.com";
    const data_login_password = "HiRahul@123";

    /****************** Login Page - START *******************/
    
    const loginPage = new LoginPage(page);
    await loginPage.goToApplication();
    await loginPage.loginToApplication(data_login_username,data_login_password);

    /****************** Login Page - END *******************/
 
    /****************** Dashboard Page - START *******************/
    const dashboardPage = new DashboardPage(page);
    
    console.log('Assertions for message: Login Successfully')
    await expect(dashboardPage.getMsg_LoginSuccess()).toBeVisible();
    await expect(dashboardPage.getMsg_LoginSuccess()).toHaveText('Login Successfully');
    await expect(dashboardPage.getMsg_LoginSuccess()).toContainText('Successfully');

    /****************** Dashboard Page - END *******************/

    //await page.pause();
});

test.afterEach(async() => {
    await new CommonUtils().waitForSomeTime(5);
});//afterEach



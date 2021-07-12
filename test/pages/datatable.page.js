class DatatablePage {

    get dataTable() {return $('table#example')}
    get countryNames() { return $$(`//td[@class=' select-checkbox']/..//td[4]`)}
    get employeeAges() { return $$(`//td[@class=' select-checkbox']/..//td[5]`) }

    openApp() {
        browser.maximizeWindow()
        browser.url("https://datatables.net/extensions/select/examples/initialisation/checkbox.html")
        return this.dataTable.waitForDisplayed()
    }

}
module.exports=new DatatablePage()

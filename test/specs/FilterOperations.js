const datapage = require('../pages/datatable.page')

describe('Operations on a data table using filters', () => {
    
    let countryList = [];

    before(`Prerequisite`, () => {
        datapage.openApp()
    })

    it('Get me the name of all the countries', () => {
        datapage.countryNames.filter(country => {
            countryList.push(country.getText())
        })
        console.log("Country List: ", countryList)
    })

    it(`Get countries name whose length is odd`, () => {
        const oddLengthCountryList = countryList.filter(name => name.length % 2 == 1);
        console.log("Country with odd lenght: ", oddLengthCountryList)
    })

    it(`Get unique country names`, () => {
        const oddLengthCountryList = countryList.filter((item, index, elem) => elem.indexOf(item) === index)
        console.log("Distinct Country List: ", oddLengthCountryList)
    })

    it(`Get count of the employes whose age > 21`, () => {
        const countOfEmpGrtThan21 = datapage.employeeAges.filter(age => parseInt(age.getText())>21).length
        console.log("Count of employee older than 21 years: ", countOfEmpGrtThan21)
    })
})

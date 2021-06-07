describe('Operations on a data table using maps', () => {

    let countryNames = new Array()
    let ages = new Array()
    let set= new Array()

    before(`Prerequisite`,()=>{
        browser.maximizeWindow()
        browser.url("https://datatables.net/extensions/select/examples/initialisation/checkbox.html")
        countryNames = $$(`//td[@class=' select-checkbox']/..//td[4]`)
        countryNames.forEach(country=>country.waitForDisplayed())
        ages= $$(`//td[@class=' select-checkbox']/..//td[5]`)
        ages.forEach(age=>age.waitForDisplayed())
    })
    
    it('Get me the name of all the countries', () => {
        console.log("Getting all the countries name:");
        countryNames.forEach(country=>{
            console.log(country.getText())
        })
    })

    it(`Get distinct name of the countries`,()=>{
        const nameString= countryNames.map(names=>names.getText())
        nameString.forEach(name=>{
            if(!set.includes(name))
            set.push(name)
        })
        console.log("\nDistinct countries:")
        set.forEach(name=>console.log(name))
    })

    it(`Get countries name whose length is odd`,()=>{
        console.log("\nCountry names with odd length characters:")
        set.filter(name=>name.length%2==1).forEach(name=>console.log(name))
    })

    it(`Get sum of ages of all the employees`,()=>{
        console.log(ages.map(age=>parseInt(age.getText())).reduce((age,sum)=>age+sum,0))
    })
})

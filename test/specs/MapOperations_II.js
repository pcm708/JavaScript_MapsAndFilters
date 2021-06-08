describe('Operations on a data table using maps', () => {

    let tshirtBrands= []
    let tshirtsPrice= []

    before(`Prerequisite`,()=>{
        browser.maximizeWindow()
        browser.url("https://www.amazon.in/s?k=t-shirt")
        tshirtBrands = $$(`.s-line-clamp-1`)
        tshirtsPrice = $$(`.a-price-whole`)

        // tshirtBrands.forEach(tshirt=>{
        //     tshirt.waitForDisplayed()
        //     console.log(tshirt.getText())
        // })
        console.log("Total tshirt brands: "+ tshirtBrands.length)
        console.log("Total tshirt price entries: "+ tshirtsPrice.length)
    })
    
    it('Get me the tshirts whose text is not null', () => {
        let size= tshirtBrands.filter(tshirt=>tshirt.getText().length>0).length
        console.log("Actual tshirt brands: "+size)
        tshirtBrands.filter(tshirt=>tshirt.getText().length>0).forEach(tshirt=>console.log(tshirt.getText()))
    })

    it(`Get the count of tshirts which are blank`,()=>{
        console.log(tshirtBrands.filter(tshirt=>tshirt.getText()==" ").length)
    })

    it(`Get distinct tshirt counts`,()=>{
        let set= [];
        tshirtBrands.filter(tshirt=>{
            if(!set.includes(tshirt.getText()))
                set.push(tshirt.getText())
        })
        set.forEach(tshirt=>console.log(tshirt))
        console.log("Different tshirt brands: "+ set.length)
    })

    it(`Tshirts options which are greater than 500`,()=>{
        console.log("Number: "+
        tshirtsPrice.filter(tshirt=>parseInt(tshirt.getText())>500).length)
    })
})
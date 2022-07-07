class App {
    num
    hexValue

    constructor(num) {
        this.num = num;
        this.getLowestValue(this.num);
        this.shiftToLeft(this.num);
        this.getXORValue(this.num);
        this.hexValue = this.convertToHex(this.num);
        this.consol();
    }

    static execute(val) {
        return new App(val);
    }

    getLowestValue(value) {
        let num = value;

        let biform = num.toString(2);
        
        this.num  = this.check(biform); 
    }

    shiftToLeft(valtoshift) {
        var result = valtoshift;

        for(let i = 0; i < 3; i++) 
        {
            result = result.substring(1, valtoshift.length) + result.substring(0, 1); 
        }

        this.num = result;
    }

    getXORValue(value) {
        let firstVal = parseInt(value, 2);
        
        let result = firstVal ^ 195;

        this.num = result.toString(2);
    }

    convertToHex(value) 
    {
        return parseInt(value, 2).toString(16);
    }

    check(valtocheck) {
        if (valtocheck.startsWith("01", 0))
        {
            return valtocheck;
        }
        else if (valtocheck.startsWith("11", 0)) 
        {
            return "0" + valtocheck;
        }
        else
        {
            return this.check(valtocheck.substring(1));
        }
    }

    consol() {
        console.log(this.hexValue);
    }
}

module.exports = App
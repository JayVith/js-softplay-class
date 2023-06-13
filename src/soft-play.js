// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
    constructor (numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    }


enter (numAdults, numChildren)
{
    if (numAdults < numChildren) {
        return false}
    else if (numAdults >= numChildren) {
        this.numAdults += numAdults
        this.numChildren += numChildren
        return true
    }
}


leave (numAdults, numChildren)
{
    if (numAdults > this.numAdults || numChildren > this.numChildren) {
        return false
    }
    else if (numAdults < numChildren) {
        return false
    }
    else if (this.numAdults - numAdults < this.numChildren - numChildren) {
        return false
    }
    else {
        this.numAdults -= numAdults
        this.numChildren -= numChildren
        return true
    }
}

occupancy ()
{
    return {
        numAdults: this.numAdults,
        numChildren: this.numChildren 
    }
}
}



// TODO: Change the undefined value below to the name of your class
module.exports = Softplay

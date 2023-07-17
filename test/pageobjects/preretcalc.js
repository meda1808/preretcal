

import Page from './page.js';

class preretcalclass extends Page {

    get currentAge() {
        return $('#current-age')
    }
    get retirementAge() {
        return $('#retirement-age')
    }
    get currentAnnualincome() {
        return $('#current-income')
    }
    get spouseAnnualincome() {
        return $('#spouse-income')
    }
    get currentRetirementsavings() {
        return $('#current-total-savings')
    }
    get currentRetirementcontribution() {
        return $('#current-annual-savings')
    }

    get annualRetirementcontributionincrease() {
        return $('#savings-increase-rate')
    }

    get socialSecurityincomeyes() {
        return $('label[for="yes-social-benefits"]')
    }
    get socialSecurityincomeNO() {
        return $('label[for="no-social-benefits"]')
    }

    get relationshipStatussingle() {
        return $("label=Single")
    }
    get relationshipStatusmarried() {
        return $("label=Married")
    }
    get socialSecurityoverride() {
        return $('#social-security-override')
    }

    get adjustdefauldvalues() {
        return $("a=Adjust default values")
    }
    get additionalOtherincome() {
        return $('#additional-income')
    }
    get retirementDuration() {
        return $('#retirement-duration')
    }
    get postRetirementincomeincreaseinflationYes() {
        return $('label[for="include-inflation"]')
    }
    get postRetirementincomeincreaseinflationNo() {
        return $('label[for="exclude-inflation"]')
    }
    get expectedInflation() {
        return $('#expected-inflation-rate');
    }
    get percentOffinalannualincomedesired() {
        return $('#retirement-annual-income')
    }
    get preRetirementinvestmentreturn() {
        return $('#pre-retirement-roi')
    }
    get postRetirementinvestmentreturn() {
        return $('#post-retirement-roi')
    }
    get errorMessage() {
        return $('#calculator-input-alert-desc')
    }
    get resultMessage() {
        return $('#result-message')
    }
    get saveChanges() {
        return $("button=Save changes");
    }
    get cancel() {
        return $("button=Cancel")
    }
    get calculate() {
        return $("button=Calculate")
    }
    get clearForm() {
        return $("button=Clear form")
    }
    get EditForm() {
        return $("button=Edit info");
    }

    async preRetirementcalculator(currentage, agetoretire, currentanualincomes, spouseanualincomes, currentretirementsaving1, currentretirementcontributions, increasesavings) {
        await browser.pause(1000)
        await this.currentAge.setValue(currentage)
        await browser.pause(1000)
        await this.retirementAge.setValue(agetoretire)
        await browser.pause(1000)
        await this.currentAnnualincome.click()
        await this.currentAnnualincome.setValue(currentanualincomes)
        await browser.pause(1000)
        await this.spouseAnnualincome.click()
        await this.spouseAnnualincome.setValue(spouseanualincomes)
        await browser.pause(1000)
        await this.currentRetirementsavings.click()
        await this.currentRetirementsavings.setValue(currentretirementsaving1)
        await browser.pause(1000)
        await this.currentRetirementcontribution.click()
        await this.currentRetirementcontribution.setValue(currentretirementcontributions)
        await browser.pause(1000)
        await this.annualRetirementcontributionincrease.click()
        await this.annualRetirementcontributionincrease.setValue(increasesavings)
        await browser.pause(1000)
    }

    async socialSecurityincomeisyesmarried(overdueamount) {
        await this.socialSecurityincomeyes.click()
        await browser.pause(1000)
        await this.relationshipStatusmarried.click()
        await browser.pause(1000)
        await this.socialSecurityoverride.click()
        await this.socialSecurityoverride.setValue(overdueamount)
        await browser.pause(1000)
    }

    async socialSecurityincomeisyessingle(overdueamount) {
        await this.socialSecurityincomeyes.click()
        await browser.pause(1000)
        await this.relationshipStatussingle.click()
        await browser.pause(1000)
        await this.socialSecurityoverride.click()
        await browser.pause(1000)
        await this.socialSecurityoverride.setValue(overdueamount);
        await browser.pause(1000)
    }

    async socialSecurityincomeisNO() {
        await this.socialSecurityincomeNO.click()
        await browser.pause(1000)
    }

    async defaultcalaculatorvalues(aditionalincome, yearsretneeds, finalanualincomedesired, preretinvestreturn, postretinvestreturn) {
       // await preretcalclass.defaultcalaculatorvalues(500,20,75,8,5)
        await browser.pause(1000)
        await this.adjustdefauldvalues.click()
        await browser.pause(2000)
        await this.additionalOtherincome.click()
        await browser.pause(2000)
        await this.additionalOtherincome.setValue(aditionalincome)
        await browser.pause(1000)
        await this.retirementDuration.click()
        await browser.pause(1000)
        await this.retirementDuration.setValue(yearsretneeds)
        await browser.pause(1000)
        await this.postRetirementincomeincreaseinflationNo.click()
        await browser.pause(1000)
        await this.percentOffinalannualincomedesired.click()
        await browser.pause(1000)
        await this.percentOffinalannualincomedesired.setValue(finalanualincomedesired)
        await browser.pause(1000)
        await this.preRetirementinvestmentreturn.click()
        await browser.pause(1000)
        await this.preRetirementinvestmentreturn.setValue(preretinvestreturn)
        await browser.pause(1000)
        await this.postRetirementinvestmentreturn.click()
        await browser.pause(1000)
        await this.postRetirementinvestmentreturn.setValue(postretinvestreturn)
        await browser.pause(1000)
    }
    async savedefaultvalues() {
        await browser.pause(1000)
        await this.saveChanges.click()
    }
    async canceldefaultvalues() {
        await browser.pause(3000)
        await this.cancel.click()
    }
    async calculateret() {
        await browser.pause(4000)
        await this.calculate.click()

    }
    async clearform() {
        await browser.pause(3000)
        await this.clearForm.click()
    }
    async edittheform() {
        await browser.pause(3000)
        await this.EditForm.click()
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('preRetirementcalculator');
    }

}

export default new preretcalclass();

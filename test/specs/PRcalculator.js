/**
 * test with page objects
 */
import preretcalclass from '../pageobjects/preretcalc.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('tests', () => {
    it('scenario 3 User should be able to submit form with all fields filled in', async () => {
        await preretcalclass.open()
        await preretcalclass.preRetirementcalculator(40, 68, 100000, 75000, 500000, 10, 2)
        await preretcalclass.socialSecurityincomeisyesmarried(4000)
        await preretcalclass.defaultcalaculatorvalues(500, 20, 75, 8, 5)
        await preretcalclass.savedefaultvalues()
        await preretcalclass.calculateret()
        await expect(preretcalclass.resultMessage).toHaveTextContaining(
            'Congratulations! You are exceeding your retirement goals. You are saving an extra $833 a month.')
    })
    it('scenario 4 User should be able to update default calculator values  ', async () => {
        await preretcalclass.edittheform()
        await preretcalclass.defaultcalaculatorvalues(400, 20, 70, 7, 4)
        await preretcalclass.savedefaultvalues()
        await preretcalclass.calculateret()
        await expect(preretcalclass.resultMessage).toHaveTextContaining(
            'Congratulations! You are exceeding your retirement goals. You are saving an extra $833 a month.')
    })
    it('scenario 2 Additional Social Security fields should display/hide based on Social Security benefits toggle  ', async () => {
        await preretcalclass.open()
        await preretcalclass.preRetirementcalculator(40, 68, 100000, 0, 500000, 10, 2)
        await preretcalclass.socialSecurityincomeisyessingle(4000)
        await preretcalclass.calculateret();
        await expect(preretcalclass.resultMessage).toHaveTextContaining(
            'Congratulations! You are exceeding your retirement goals. You are saving an extra $833 a month.')
    })
    it('scenario 1 User should be able to submit form with all required fields filled in  ', async () => {
        await preretcalclass.open()
        await preretcalclass.preRetirementcalculator(40, 68, 100000, 0, 500000, 10, 2)
        await preretcalclass.socialSecurityincomeisyesmarried(0)
        await preretcalclass.calculateret();
        await expect(preretcalclass.resultMessage).toHaveTextContaining(
            'Congratulations! You are exceeding your retirement goals. You are saving an extra $833 a month.')
    })
})


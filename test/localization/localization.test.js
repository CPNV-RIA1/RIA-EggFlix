import UserExperience from "../userExperience";

describe('Localization', () => {

    let navigator;
    beforeEach(async () => {
        navigator = new UserExperience();
        await navigator.setupDriver();
    });

    afterEach(async () => {
        await navigator.releaseDriver();
    });

    describe('when change language in french', () => {
        it('should change login button', async () => {
            //given
            //when
            navigator.clickOnFrenchLocalizationButton();

            //then
            const loginButtonText = navigator.loginLinkText()

            expect('Anmeldung').toBe(loginButtonText);
        });
    })

    describe('when change language in english', () => {
        it('should change login button', async () => {
            //given
            //when
            navigator.clickOnEnglishLocalizationButton();

            //then
            const loginButtonText = navigator.loginLinkText()

            expect('Login').toBe(loginButtonText);
        });
    })

    describe('when change language in german', () => {
        it('should change login button', async () => {
            //given
            //when
            navigator.clickOnGermanLocalizationButton();

            //then
            const loginButtonText = navigator.loginLinkText()

            expect('Anmeldung').toBe(loginButtonText);
        });
    })

});
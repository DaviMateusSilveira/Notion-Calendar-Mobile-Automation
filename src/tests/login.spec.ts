import { expect, browser, $ } from '@wdio/globals'

describe('My first app opening', () => {
    it('should open my app and wait for a while', async () => {
        await driver.pause(5000);
    })
})


import wd from "wd";
import path from "path";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const driver = wd.promiseChainRemote("localhost", PORT);
const config = {
  platformName: "Android",
  platformVersion: "10",
  deviceName: "Android Emulator",
  app: path.join(
    __dirname,
    "../../android/app/build/outputs/apk/release/app-release.apk",
  ),
  disableWindowAnimation: true,
};

beforeAll(async () => {
  await driver.init(config);
});

it("'get started' button navigates to setup page", async () => {
  const getStartedButton = await driver.elementByAccessibilityId(
    "get-started-button",
  );

  await getStartedButton.click();
  await driver.sleep(300);

  const howManyPlayersLabel = await driver
    .elementByAccessibilityId("request-player-count-label")
    .text();
  expect(howManyPlayersLabel).toMatch(/how many players/i);
});

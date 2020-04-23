const reporter = require('cucumber-html-reporter');

const option = {
    theme: "bootstrap",
    jsonFile: "cucumber_report.json",
    output: "cucumber_report.html",
    reportSuiteAsScenario: true,
    launchReport: false
};

reporter.generate(option)
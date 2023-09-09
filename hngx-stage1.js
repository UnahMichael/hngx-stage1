document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements with data-testid attributes
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    // Set Slack name and profile picture
    slackUserName.textContent = "Unah Thankgod";
    slackDisplayImage.src = "images/slack_profile_picture.jpg";

    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getUTCDay()];
    currentDayOfTheWeek.textContent = "Day of the Week: " + dayOfWeek;

    // Get current UTC time in milliseconds
    const utcTime = Date.now();
    currentUTCTime.textContent = "Current UTC Time: " + utcTime;

    // Set your track
    const myTrack = document.querySelector('[data-testid="myTrack"]');
    myTrack.textContent = "Frontend";
});

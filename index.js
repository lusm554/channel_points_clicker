!function() {
  function getRandomTime() {
    return (parseInt(Math.random()*10)) * 1000
  }
  let randomTime = getRandomTime()

  function getChannelP$ints() {
    // Set new random time for next try
    randomTime = getRandomTime()

    const clickButton = document.querySelectorAll(".community-points-summary button")[1]
    if (!clickButton) return false;

    clickButton.click()
  }

  setInterval(getChannelP$ints, randomTime)
}();

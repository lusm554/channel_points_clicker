!function() {
  function getRandomTime() {
    return (parseInt(Math.random()*10)) * 1000
  }
  const date = () => {
    const now = new Date()
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  }
  let randomTime = getRandomTime()
  let i = 0, toId;

  function setTo() {
    clearTimeout(toId)
    randomTime = getRandomTime()
    toId = setTimeout(getChannelP$ints, randomTime)
  }

  function getChannelP$ints() {
    const clickButton = document.querySelectorAll(".community-points-summary button")[1]
    if (!clickButton) return setTo();
    
    clickButton.click()
    console.log(`Collected: ${++i} ${date()}`)
    setTo()
  }

  toId = setTimeout(getChannelP$ints, randomTime)
}();


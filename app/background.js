function eventLoop () {
  setInterval(updateStats(), 1000)
}

function updateStats () {
  chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    var activeTab = arrayOfTabs[0]
    var activeTabId = activeTab.id
    alert(num)
    num++
  })
}

function openStatsPage () {
  chrome.tabs.create({url: chrome.extension.getURL('stats.html')})
}

function stopTimer () {

}

function startTimer () {

}

function clearData () {

}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('Open-Detailed-Stats').addEventListener('click', openStatsPage)
  document.getElementById('Stop-Timer').addEventListener('click', stopTimer)
  document.getElementById('Start-Timer').addEventListener('click', startTimer)
  document.getElementById('Clear-Data').addEventListener('click', clearData)
})

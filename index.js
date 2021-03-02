$(function () {
  var defaultDate = new Date()
  var box = $('#box')
  var yearMonthTitleDiv = null
  var prevMonthSpan = null
  var nextMonthSpan = null
  var tBody = null
  var allTd = []

  // 创建静态布局
  create()
  // 显示当前日期对应的日历
  showDate()

  function showDate() {
    var year = defaultDate.getFullYear() // 年份
    var month = defaultDate.getMonth() + 1 // 月份
    yearMonthTitleDiv.text(year + '年' + month + '月')
    var week = new Date(year, month - 1, 1).getDay() // 1号是星期几
    var days = new Date(year, month, 0).getDate() // 本月有多少天
    var n = 1
    for (var i = 0; i < allTd.length; i++) {
      if (i >= week) {
        allTd[i].text(n)
        n++
        if (n > days) {
          break
        }
      }
    }

    // 多余行隐藏,否则显示
    if (allTd[28].text() === '') {
      allTd[28].parent().hide()
      allTd[35].parent().hide()
    } else if (allTd[[35]].text() === '') {
      allTd[35].parent().hide()
    } else {
      allTd[28].parent().show()
      allTd[35].parent().show()
    }
  }

  $('#box span').click(function () {
    var year = defaultDate.getFullYear() //2021
    var month = defaultDate.getMonth() // 10
    if ($(this).index() == 0) {
      month--
    } else {
      month++
    }
    defaultDate = new Date(year, month)
    for (var i = 0; i < allTd.length; i++) {
      allTd[i].text('')
    }
    showDate()
  })

  function create() {
    var header = $(`
    <header>
    <span class="fl">上个月</span>
    <span class="fr">下个月</span>
    <div>2021年3月</div>
    </header>
    `)
    box.append(header)

    yearMonthTitleDiv = header.find('div')
    prevMonthSpan = header.find('.fl')
    prevMonthSpan = header.find('.fr')

    var table = $(`
    <table width="100%" cellspacing="0" cellpadding="0">
    <thead>
    <tr>
      <th class="sunday">周日</th>
      <th>周一</th>
      <th>周二</th>
      <th>周三</th>
      <th>周四</th>
      <th>周五</th>
      <th class="saturday">周六</th>
    </tr>
    </thead>
    <tbody>
    </tbody>
    </table>
    `)
    box.append(table)

    tBody = table.find('tbody')
    for (var i = 0; i < 6; i++) {
      var tr = $('<tr></tr>')
      for (var j = 0; j < 7; j++) {
        var td = $('<td></td>')
        tr.append(td)
        allTd.push(td)
      }
      tBody.append(tr)
    }
  }
})

var t = null
t = setTimeout(time, 1000) // 開始运行
function time() {
  clearTimeout(t) // 清除定时器
  dt = new Date()
  var y = dt.getFullYear()
  var mt = dt.getMonth() + 1
  var day = dt.getDate()
  var h = dt.getHours() // 获取时
  var m = dt.getMinutes() // 获取分
  var s = dt.getSeconds() // 获取秒
  document.querySelector(".showTime").innerHTML =
    "当前时间：" +
    y +
    "年" +
    mt +
    "月" +
    day +
    "日" +
    h +
    "时" +
    m +
    "分" +
    s +
    "秒";

  // 2018的第一天
  var until = new Date('2022-01-01 00:00:00')
  // 计算时会发生隐式转换，调用valueOf()方法，转化成时间戳的形式
  var days = (until - dt) / 1000 / 3600 / 24
  var day = Math.floor(days)
  var hours = (days - day) * 24
  var hour = Math.floor(hours)
  var minutes = (hours - hour) * 60
  var minute = Math.floor(minutes)
  var seconds = (minutes - minute) * 60 + 1
  var second = Math.floor(seconds)
  document.querySelector(".haveTime").innerHTML = '2022年还剩下：' + day + '天' + hour + '小时' + minute + '分钟' + second + '秒'
  t = setTimeout(time, 1000) // 设定定时器，循环运行
}

window.setTimeout(function () {
  window.location.reload();
}, 1000 * 60 * 60 * 24)
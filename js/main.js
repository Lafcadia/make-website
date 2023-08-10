$(document).ready(function () {
  if ($.cookie("Starter") === undefined) {
    $.growl.notice({
      title: "必看提示",
      message:
        "如果您是新手，请务必查看帮助文档！帮助文档可以为您解答90%的问题，如果还是不懂，请加QQ交流群，群号：135452025",
      duration: 10000,
    });
    $.cookie("Starter", false);
  }

  $("#qq").click(function () {
    swal({
      title: "提示",
      text: "请先阅读帮助文档，如果还是不懂，请加QQ交流群，群号：135452025",
      icon: "success",
    });
  });

  var isExpanded = false;
  $("#code").click(function () {
    if (isExpanded) {
      $(this).animate({ height: "50px" }, 500);
      isExpanded = false;
    } else {
      $(this).animate({ height: "900px" }, 500);
      isExpanded = true;
    }
  });
  var isExpanded1 = false;
  $("#look").click(function () {
    if (isExpanded1) {
      $(this).animate({ height: "50px" }, 500);
      isExpanded1 = false;
    } else {
      $(this).animate({ height: "900px" }, 500);
      isExpanded1 = true;
    }
  });

  $("#code_open").click(function () {
    if (isExpanded) {
      $("#code").animate({ height: "50px" }, 500);
      isExpanded = false;
    } else {
      $("#code").animate({ height: "900px" }, 500);
      isExpanded = true;
    }
  });

  $("#look_open").click(function () {
    if (isExpanded1) {
      $("#look").animate({ height: "50px" }, 500);
      isExpanded1 = false;
    } else {
      $("#look").animate({ height: "900px" }, 500);
      isExpanded1 = true;
    }
  });
});
window.onload = function () {
  now = new Date();
  document.getElementById("years").innerHTML = now.getFullYear();
};

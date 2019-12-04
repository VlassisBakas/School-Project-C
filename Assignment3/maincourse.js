$("#AddCourse").submit(function (e) {
    e.preventDefault();
    var title = $("#ctitle").val();
    var stream = $("#cstream").val();
    var type = $("#ctype").val();
    var sdate = $("#csdate").val();
    var edate = $("#cedate").val();


    $(".course-table tbody").append("<tr cotitle='" + title + "' costream='" + stream + "' cotype='" + type + "' cosdate='" + sdate + "' coedate='"+ edate +"'> <td>" + title + "</td> <td>" + stream + "</td> <td>"
        + type + "</td><td>" + sdate + "</td><td>"+ edate+
        "</td><td><button class='btn btn-info btn-xs btn-edit'> Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td ></tr > ");

});
//$("#save").click(function (e) {

//    $("#AddCourse").collapse("toggle");

//});


$("#coursebody").on("click", ".btn-delete", function () {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
    var ttl = $(this).parents("tr").attr('cotitle');
    var str = $(this).parents("tr").attr('costream');
    var tp = $(this).parents("tr").attr('cotype');
    var sd = $(this).parents("tr").attr('cosdate');
    var ed = $(this).parents("tr").attr('coedate');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_title" value="' + ttl + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_stream" value="' + str + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_type" value="' + tp + '">');
    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_sd" value="' + sd + '">');
    $(this).parents("tr").find("td:eq(4)").html('<input name="edit_ed" value="' + ed + '">');

    $(this).parents("tr").find("td:eq(5)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});




$("body").on("click", ".btn-cancel", function () {
    var title = $(this).parents("tr").attr('cotitle');
    var stream = $(this).parents("tr").attr('costream');
    var type = $(this).parents("tr").attr('cotype');
    var sd = $(this).parents("tr").attr('cosdate');
    var ed = $(this).parents("tr").attr('coedate');

    $(this).parents("tr").find("td:eq(0)").text(title);
    $(this).parents("tr").find("td:eq(1)").text(stream);
    $(this).parents("tr").find("td:eq(2)").text(type);
    $(this).parents("tr").find("td:eq(3)").text(sd);
    $(this).parents("tr").find("td:eq(4)").text(ed);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});



$("body").on("click", ".btn-update", function () {
    var cttl = $(this).parents("tr").find("#ctitle").val();
    var cstr = $(this).parents("tr").find("#cstream").val();
    var ctp = $(this).parents("tr").find("#ctype").val();
    var csd = $(this).parents("tr").find("#csdate").val();
    var ced = $(this).parents("tr").find("#cedate").val();

    $(this).parents("tr").find("td:eq(0)").text(cttl);
    $(this).parents("tr").find("td:eq(1)").text(cstr);
    $(this).parents("tr").find("td:eq(2)").text(ctp);
    $(this).parents("tr").find("td:eq(3)").text(csd);
    $(this).parents("tr").find("td:eq(3)").text(ced);

    $(this).parents("tr").attr('cotitle', cttl);
    $(this).parents("tr").attr('costream', cstr);
    $(this).parents("tr").attr('cotype', ctp);
    $(this).parents("tr").attr('cosdate', csd);
    $(this).parents("tr").attr('coedate', ced);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});
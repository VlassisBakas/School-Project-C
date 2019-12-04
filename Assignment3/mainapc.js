$("#Addapc").submit(function (e) {
    e.preventDefault();
    var atitle = $("#apcatitle").val();
    var adesc = $("#apcadesc").val();
    var ctitle = $("#apcctitle").val();
    var stream = $("#apcstream").val();
    var type = $("#apctype").val();
    


    $(".apc-table tbody").append("<tr apcat='" + atitle + "' apcad='" + adesc + "' apcct='" + ctitle + "' apcstr='" + stream + "' apctp='" + type + "'> <td>" + atitle + "</td> <td>" + adesc + "</td> <td>"
        + ctitle + "</td><td>" + stream + "</td><td>" + type +
        "</td><td><button class='btn btn-info btn-xs btn-edit'> Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td ></tr > ");

});
//$("#save").click(function (e) {

//    $("#Addapc").collapse("toggle");

//});


$("#apcbody").on("click", ".btn-delete", function () {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
    var attl = $(this).parents("tr").attr('apcat');
    var ades = $(this).parents("tr").attr('apcad');
    var cttl = $(this).parents("tr").attr('apcct');
    var str = $(this).parents("tr").attr('apcstr');
    var tp = $(this).parents("tr").attr('apctp');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_title" value="' + attl + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_stream" value="' + ades + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_type" value="' + cttl + '">');
    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_fn" value="' + str + '">');
    $(this).parents("tr").find("td:eq(4)").html('<input name="edit_ln" value="' + tp + '">');

    $(this).parents("tr").find("td:eq(5)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});




$("body").on("click", ".btn-cancel", function () {
    var attl = $(this).parents("tr").attr('apcat');
    var ades = $(this).parents("tr").attr('apcad');
    var cttl = $(this).parents("tr").attr('apcct');
    var str = $(this).parents("tr").attr('apcstr');
    var tp = $(this).parents("tr").attr(' apctp');

    $(this).parents("tr").find("td:eq(0)").text(attl);
    $(this).parents("tr").find("td:eq(1)").text(ades);
    $(this).parents("tr").find("td:eq(2)").text(cttl);
    $(this).parents("tr").find("td:eq(3)").text(str);
    $(this).parents("tr").find("td:eq(4)").text(tp);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});



$("body").on("click", ".btn-update", function () {
    var fn = $(this).parents("tr").find("#apcatitle").val();
    var ln = $(this).parents("tr").find("apcadesc").val();
    var ttl = $(this).parents("tr").find("#apcctitle").val();
    var str = $(this).parents("tr").find("#apcstream").val();
    var tp = $(this).parents("tr").find("#apctype").val();

    $(this).parents("tr").find("td:eq(0)").text(fn);
    $(this).parents("tr").find("td:eq(1)").text(ln);
    $(this).parents("tr").find("td:eq(2)").text(ttl);
    $(this).parents("tr").find("td:eq(3)").text(str);
    $(this).parents("tr").find("td:eq(4)").text(tp);

    $(this).parents("tr").attr('apcat', fn);
    $(this).parents("tr").attr('apcad', ln);
    $(this).parents("tr").attr('apcct', ttl);
    $(this).parents("tr").attr('apcstr', str);
    $(this).parents("tr").attr('apctp', tp);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});
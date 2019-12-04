$("#Addapspc").submit(function (e) {
    e.preventDefault();
    var atitle = $("#apspcatitle").val();
    var adesc = $("#apspcadesc").val();
    var fname = $("#apspcfname").val();
    var lname = $("#apspclname").val();
    var ctitle = $("#apspcctitle").val();
    var stream = $("#apspcstream").val();
    var type = $("#apspctype").val();



    $(".apspc-table tbody").append("<tr apcat='" + atitle + "' apcad='" + adesc + "' apspcfn='" + fname + "' apspcln='" + lname + "' apcct='" + ctitle + "' apcstr='" + stream + "' apctp='" + type + "'> <td>" + atitle + "</td> <td>" + adesc + "</td> <td>" + fname + "</td> <td>"
        + lname + "</td> <td>" + ctitle + "</td><td>" + stream + "</td><td>" + type +
        "</td><td><button class='btn btn-info btn-xs btn-edit'> Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td ></tr > ");

});
//$("#save").click(function (e) {

//    $("#Addapspc").collapse("toggle");

//});


$("#apspcbody").on("click", ".btn-delete", function () {
    $(this).parents("tr").remove();
});


$("body").on("click", ".btn-edit", function () {
    var attl = $(this).parents("tr").attr('apcat');
    var ades = $(this).parents("tr").attr('apcad');
    var fn = $(this).parents("tr").attr('apspcfn');
    var ln = $(this).parents("tr").attr('apspcln');
    var cttl = $(this).parents("tr").attr('apcct');
    var str = $(this).parents("tr").attr('apcstr');
    var tp = $(this).parents("tr").attr('apctp');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_title" value="' + attl + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_stream" value="' + ades + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_fnaps" value="' + fn + '">');
    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_lnaps" value="' + ln + '">');
    $(this).parents("tr").find("td:eq(4)").html('<input name="edit_type" value="' + cttl + '">');
    $(this).parents("tr").find("td:eq(5)").html('<input name="edit_fn" value="' + str + '">');
    $(this).parents("tr").find("td:eq(6)").html('<input name="edit_ln" value="' + tp + '">');

    $(this).parents("tr").find("td:eq(7)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});




$("body").on("click", ".btn-cancel", function () {
    var attl = $(this).parents("tr").attr('apcat');
    var ades = $(this).parents("tr").attr('apcad');
    var fn = $(this).parents("tr").attr('apspcfn');
    var ln = $(this).parents("tr").attr('apspcln');
    var cttl = $(this).parents("tr").attr('apcct');
    var str = $(this).parents("tr").attr('apcstr');
    var tp = $(this).parents("tr").attr('apctp');

    $(this).parents("tr").find("td:eq(0)").text(attl);
    $(this).parents("tr").find("td:eq(1)").text(ades);
    $(this).parents("tr").find("td:eq(2)").text(fn);
    $(this).parents("tr").find("td:eq(3)").text(ln);
    $(this).parents("tr").find("td:eq(4)").text(cttl);
    $(this).parents("tr").find("td:eq(5)").text(str);
    $(this).parents("tr").find("td:eq(6)").text(tp);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});



$("body").on("click", ".btn-update", function () {
    var at = $(this).parents("tr").find("#apspcatitle").val();
    var ad = $(this).parents("tr").find("apspcadesc").val();
    var fn = $(this).parents("tr").find("apspcfname").val();
    var ln = $(this).parents("tr").find("apspclname").val();
    var ttl = $(this).parents("tr").find("#apcctitle").val();
    var str = $(this).parents("tr").find("#apcstream").val();
    var tp = $(this).parents("tr").find("#apctype").val();

    $(this).parents("tr").find("td:eq(0)").text(at);
    $(this).parents("tr").find("td:eq(1)").text(ad);
    $(this).parents("tr").find("td:eq(2)").text(fn);
    $(this).parents("tr").find("td:eq(3)").text(ln);
    $(this).parents("tr").find("td:eq(4)").text(ttl);
    $(this).parents("tr").find("td:eq(5)").text(str);
    $(this).parents("tr").find("td:eq(6)").text(tp);

    $(this).parents("tr").attr('apcat', at);
    $(this).parents("tr").attr('apcad', ad);
    $(this).parents("tr").attr('apspcfn', fn);
    $(this).parents("tr").attr('apspcln', ln);
    $(this).parents("tr").attr('apcct', ttl);
    $(this).parents("tr").attr('apcstr', str);
    $(this).parents("tr").attr('apctp', tp);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});
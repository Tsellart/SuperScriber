function getResults() {
    $("#results").empty();
    $.getJSON("/all", function(data) {
      for (var i = 0; i < data.length; i++) {
        $("#results").prepend("<p class='data-entry' data-id=" + data[i]._id + "><span class='dataTitle' data-id=" +
          data[i]._id + ">" + data[i].title + "</span><span class=delete>X</span></p>");
      }
    });
  }
  getResults();
  
  $(document).on("click", "#make-new", function() {
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "/submit",
      data: {
        userName: $("#userName").val(),
        service: $("#service").val(),
        price: $("#price").val(),
        date: $("#date").val(),
        category: $("#category").val(),
        created: Date.now()
      }
    })
    .then(function(data) {
      $("#results").prepend("<p class='data-entry' data-id=" + data._id + "><span class='dataTitle' data-id=" +
      data._id + ">" + data.title + "</span><span class=delete>X</span></p>");
      $("#userName").val("");
      $("#service").val("");
      $("#price").val("");
      $("#dDate").val("");
      $("#category").val("");
    });
  });
  $("#clear-all").on("click", function() {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "/clearall",
      success: function(response) {
        $("#results").empty();
      }
    });
  });
  
  $(document).on("click", ".delete", function() {
    var selected = $(this).parent();
    $.ajax({
      type: "GET",
      url: "/delete/" + selected.attr("data-id"),
  
      success: function(response) {
        selected.remove();
        $("#userName").val("");
        $("#service").val("");
        $("#price").val("");
        $("#dDate").val("");
        $("#category").val("");
        $("#action-button").html("<button id='make-new'>Submit</button>");
      }
    });
  });
  
  $(document).on("click", ".dataTitle", function() {
    var selected = $(this);
    $.ajax({
      type: "GET",
      url: "/find/" + selected.attr("data-id"),
      success: function(data) {
        $("#userName").val(data.userName);
        $("#service").val(data.service);
        $("#price").val(data.price);
        $("#dDate").val(data.dDate);
        $("#category").val(data.category);
        $("#action-button").html("<button id='updater' data-id='" + data._id + "'>Update</button>");
      }
    });
  });
  
  $(document).on("click", "#updater", function() {
    var selected = $(this);
    $.ajax({
      type: "POST",
      url: "/update/" + selected.attr("data-id"),
      dataType: "json",
      data: {
        userName: $("#title").val(),
        service: $("#service").val(),
        price: $("#price").val(),
        dDate: $("#dDate").val(),
        category: $("#category").val(),
      },
      success: function(data) {
        $("#userName").val("");
        $("#service").val("");
        $("#price").val("");
        $("#dDate").val("");
        $("#category").val("");
        $("#action-button").html("<button id='make-new'>Submit</button>");
        getResults();
      }
    });
  });
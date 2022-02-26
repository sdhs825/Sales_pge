$(document).ready(function () {
  $("#toggle").hide();
  $("#filter").click(function () {
    $("#toggle").toggle(0, "linear");
    $(".form_bar").animate({ right: 0 }, 200, "linear");
  });
  $(".cross").click(function () {
    $(".form_bar").animate({ right: "-30%" }, 200, "linear", () => {
      $("#toggle").toggle(0, "linear");
    });
  });

  $("#add").click(() => {
    var html =
      "<tr id='1'><td>Order Date/Time</td><td>Order No.</td><td>Address</td><td>Phone</td><td>Due Date</td><td>Pcs.</td><td>Weight</td><td>Gross Amount</td><td>Disconnect</td><td>Net Ammount</td><td>Paid</td><td>Balance</td></tr>";
    $('#table_body').append(html);
  });

  
});


    
      function productsAdd() {
        
        if ($("#productTable tbody").length == 0) {
          $("#productTable").append("<tbody></tbody>");
        }
          
       
        $("#productTable tbody").append(
          "<tr>" +
            "<td>Extending Bootstrap with CSS,JavaScript and jQuery</td>" +
            "<td>6/11/2015</td>" +
            "<td>http://bit.ly/1SNzc0i</td>" +
          "</tr>"
          );
          $("#productTable tbody").append(
            "<tr>" +
              "<td>Build your own Bootstrap Business Application Template in MVC</td>" +
              "<td>1/29/2015</td>" +
              "<td>http://bit.ly/1I8ZqZg</td>" +
            "</tr>"
            );
        }
        
    


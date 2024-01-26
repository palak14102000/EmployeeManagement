 // Load the Visualization API and the corechart package.
	  google.charts.load('current', {'packages':['table']});
	
	  // Set a callback to run when the Google Visualization API is loaded.
	  google.charts.setOnLoadCallback(drawTableAjax);
	
	// Use jQuery to fetch data from the local file
   	  function drawTableAjax(){
    	$.ajax({
           		type: "GET",
            	url: "http://localhost:8060/fetch",
             	dataType: 'json',
         	 	  cors: true ,
         		  contentType:'application/json',
        		  secure: true,
              headers: {
                  	'Access-Control-Allow-Origin': '*',
              },
        		  beforeSend: function (xhr) {
              			  xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
          		},
        	  	success: function (response) {
    					        drawTable(response);
              },
         	   error: function () {
                      console.error("Error fetching employee details.");
             }
      });
    }

       function drawTable(data) {
        // Create the data table with only necessary columns
	        var dataTable = new google.visualization.DataTable();
	        dataTable.addColumn('number', 'Employee ID');
	        dataTable.addColumn('string', 'Employee Name');
	        dataTable.addColumn('string', 'Department');
	        // Add rows from the fetched data
	        for (var i = 0; i < data.length; i++) {
	          dataTable.addRow([
	            data[i].employeeId,
	            data[i].employeeName,
	            data[i].department
	          ]);
	        }
	        var options = {
	          showRowNumber: false,
	          width: '100%',
	          height: '100%'
	        };
      // Instantiate and draw the table
		      var table = new google.visualization.Table(document.getElementById('employee-table'));
		      table.draw(dataTable, options);
		      // Add click event listener to open modal on cell click
		      google.visualization.events.addListener(table, 'select', function() {
		          var selection = table.getSelection();
		          //console.log("---------------------"+JSON.stringify(selection));
		          var row = selection[0].row;
		
		          // Display row data in the modal
		          displayRowData(data[row]);
		       });
		    }

  	 function displayRowData(employee) {
	          var modalBody = document.getElementById('modalBody');
	          console.log("EMPLOYEE"+JSON.stringify(employee));
	
	          // Create modal content
	          var modalContent = '<ul>';
	          for (var key in employee) {
	          if(key=='salary'){
	              modalContent += '<li><strong>' + key + ':</strong> $' + employee[key] + '</li>';
	          }else{
	            modalContent += '<li><strong>' + key + ':</strong> ' + employee[key] + '</li>';
	          }
	          }
	          modalContent += '</ul>';
	
	        // Set modal body content
	         modalBody.innerHTML = modalContent;
	
	        // Open the modal
	        $('#employeeModal').modal('show');
	  }
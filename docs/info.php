<html> 
    <body> 
        <?php 
        $db = pg_connect('host=localhost dbname=spotme user=spotme password=spotme'); 

        $address1 = pg_escape_string($_POST['address1']); 
        $address2 = pg_escape_string($_POST['address2']); 
        $city = pg_escape_string($_POST['city']);
        $state = pg_escape_string($_POST['state']);
        $zip = pg_escape_string($_POST['zip']);
	    $coordinates = pg_escape_string($_POST['coordinates']);
	    $instructions = pg_escape_string($_POST['instructions']);
	    $pricePerHalfHour = pg_escape_string($_POST['pricePerHalfHour']);
	    $active = pg_escape_string($_POST['active']);	   

        $query = "INSERT INTO spaces(address1, address2, city, state, zip, coordinates, instructions, pricePerHalfHour, active) VALUES('" . $address1 . "', '" . $address2 . "', '" . $city . "' , '" . $state . "', '" . $zip . "', '" . $coordinates . "', '" . $instructions . "' , '" . $picePerHalfHour . "', '" . $active . "')";
        $result = pg_query($query); 
        if (!$result) { 
            $errormessage = pg_last_error(); 
            echo "Error with query: " . $errormessage; 
            exit(); 
        } 
        printf ("These values were inserted into the database - %s %s %s", $address1, $address2, $city, $state, $zip, $coordinates, $instructions, $pricePerHalfHour, $active); 
        pg_close(); 
        ?> 
    </body> 
</html>
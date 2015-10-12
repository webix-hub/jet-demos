<?php

	//connect to database
	$db = new SQLite3('./testdata.sqlite');

	$method = $_SERVER['REQUEST_METHOD'];

	if($method == "GET"){
		//select data
		$res = $db->query("SELECT * FROM films");

		//convert data to json
		$data = array();
		while ($rec = $res->fetchArray(SQLITE3_ASSOC))
			$data[] = $rec;
		//output json
		echo json_encode($data);
	}
	else{
		if ($method == "PUT" || $method == "DELETE")
		parse_str(file_get_contents('php://input'), $request);
	else 
		$request = $_POST;

	// get id and data 
	//  !!! you need to escape data in real app, to prevent SQL injection !!!
	$id = @$request['id'];
	$rank = $request["rank"];
	$year = $request["year"];
	$title = $request["title"];
	$votes = $request["votes"];


	if ($method == "POST"){
		//adding new record
		$db->query("INSERT INTO films(rank, title, year, votes) VALUES('$rank', '$title', '$year', '$votes')");
		echo '{ "id":"'.$id.'", "status":"success", "newid":"'.$db->lastInsertRowID().'" }';

	} else if ($method == "PUT"){
		//updating record
		$db->query("UPDATE films SET rank='$rank', title='$title', year='$year', votes='$votes' WHERE id='$id'");
		echo '{ "id":"'.$id.'", "status":"success" }';

	} else if ($method == "DELETE"){
		//deleting record
		$db->query("DELETE FROM films WHERE id='$id'");
		echo '{ "id":"'.$id.'", "status":"success" }';

	} else 
		echo "Not supported operation";
	}

?>
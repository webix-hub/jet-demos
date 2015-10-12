<?php

	//connect to database
	$db = new SQLite3('./testdata.sqlite');

	$method = $_SERVER['REQUEST_METHOD'];


	//select data
	$res = $db->query("SELECT * FROM colors ORDER BY id");

	//convert data to json
	$data = array();
	while ($rec = $res->fetchArray(SQLITE3_ASSOC))
		$data[] = $rec;
	//output json
	echo json_encode($data);

?>
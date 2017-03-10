<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class PageController extends Controller{
	public function __construct()
	{
		
	}


public function display()
{	
        $users = DB::table('tbl_got')->select(array('id','name'))->get();

        return $users;
}	
public function details($id)
{	
$user = DB::table('tbl_got')->where('id', $id)->get();
return $user;
}	

	}
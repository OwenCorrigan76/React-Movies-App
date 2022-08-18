import React from "react";

export default function searchMovies(){

return(
<form className="form">
    <label className="label" htmlFor="query">Movie Name</label>
    <label className="input" type = "text" name = "query" placeholder="ie Whithnaill and I" ></label>
<button className="button" type = "submit"></button> 
</form>

)
}
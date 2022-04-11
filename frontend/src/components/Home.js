import React from "react";

function Home() {
    return(
        <section>
            
            <div class="container-fluid">
                <h1 class="mt-5">Store Movies Info Using (OMDb API)</h1>
                <form method="POST" action="/find">
                    <div class="input-group justify-content-center">
                        
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="title"  class="form-label">Title:</label>
                            <input type="text" id="title" name="title" class="form-control" placeholder="Movie title.." />
                        </div>
                        
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="year"  class="form-label">Year:</label>
                            <input type="text" id="year" name="year" class="form-control" placeholder="Year ex:(2022)" />                           
                        </div> 
                        
                        <input type="submit" value="find" class="btn btn-primary mt-5 mb-2" />
                    </div>
                </form>
            </div>

        </section>
    );
}

export default Home;
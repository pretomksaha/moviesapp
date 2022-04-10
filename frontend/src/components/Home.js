import React from "react";

function Home() {
    return(
        <section>
            
            <div class="container-fluid">
                <h1 class="mt-5">Store Movies Info Using (OMDb API)</h1>
                <form method="POST" action="/Search">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="year" class="form-control" placeholder="Year ex:(2022)" />
                            <input type="text" name="title" class="form-control" placeholder="Movie Name" />
                            <input type="submit" value="find" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default Home;
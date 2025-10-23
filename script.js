/*********************************************************************
 * Styling of the "Search engine clone" page
 * 
 * @author (Anyanwu Benedict Chuwkwuemeka)
 * @version 0.01
*********************************************************************/


window.onload = () => 
{
    const srch_btn = document.querySelector(".search_go_btn");
    const srch_fld = document.getElementById("search_fld_id");
    const srch_clr = document.querySelector(".search_clr_btn");
    const srch_egn = document.querySelectorAll(".search_engine");
    const srch_dstn = document.querySelectorAll(".search_dstn");


    // Select engine
    srch_egn.forEach((btn) => 
    {
        btn.addEventListener("click", () => 
        {
            srch_egn.forEach((prevBtn) => 
            {
                if((prevBtn.classList.contains("selected"))) prevBtn.classList.remove("selected");
            });

            if(!(btn.classList.contains("selected"))) btn.classList.add("selected");
        });
    });
    
    // Select destination
    srch_dstn.forEach((btn) => 
    {
        btn.addEventListener("click", () => 
        {
            srch_dstn.forEach((prevBtn) => 
            {
                if((prevBtn.classList.contains("selected"))) prevBtn.classList.remove("selected");
            });

            if(!(btn.classList.contains("selected"))) btn.classList.add("selected");
        });
    });


    // Initialize search based on user's preference
    const lets_srch = () => 
    {
        try
        {
            if(srch_fld?.value?.toString().replace(/\s+/g, '') === "") return alert("Search field should not be empty.");

            const url_dstn = document.querySelector(".search_dstn.selected")?.getAttribute("data-opener") || "current";
            const url_base = document.querySelector(".search_engine.selected")?.getAttribute("data-url") || "https://search.brave.com/search?q=";
            const url_query = encodeURIComponent(srch_fld?.value?.toString().trim());
            const url_comb = `${url_base}${url_query}`;

            if((url_dstn === "next"))
            {
                window.open(url_comb, '_blank');
            }
            else if((url_dstn === "new"))
            {
                window.open(url_comb, '_blank', `width: ${window.innerWidth * 0.80}, height: ${window.innerHeight * 0.80}`);
            }
            else
            {
                window.open(url_comb, '_self');
            }
        }
        catch(srch_err)
        {
            console.log(srch_err);
        }
    }

    // Search by hitting "enter"
    srch_fld.onkeyup = (e) => 
    {
        if((typeof e !== "undefined") && (typeof e.key !== "undefined") && (e.key.toLowerCase() === "enter")) lets_srch();
    }

    // Search with the search button
    srch_btn.onclick = () => lets_srch();

    // Clear search field
    srch_fld.oninput = () => (srch_fld.value.toString().length > 0) ? srch_clr.classList.add("active") : srch_clr.classList.remove("active");
    srch_clr.onclick = () => srch_fld.value = "";
}
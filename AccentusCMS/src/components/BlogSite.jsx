import { useSearchParams } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"


const BlogSite = ({isLogged, setIsLogged, user, sites, siteId, setSiteId}) => {

    const [searchParams] = useSearchParams();
    const id = searchParams.get("siteId")
    let content = '';

    sites.forEach(element => {
        if(element.id == id){
            content = element.content;
		
        }
    });

    // Render HTML

	
    //document.onreadystatechange = () => {
        document.getElementById('editor').insertAdjacentHTML('afterend',content);
   // };

    return (
        <div className="w-full">
            <Header isLogged={isLogged} user={user} />
            <section className="relative overflow-hidden py-20" id="editor">
                { content }
            </section>
            {/* {content} */}
            <hr className="my-8" />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default BlogSite;
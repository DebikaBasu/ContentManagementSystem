import React from 'react'
import Error from './Error';
// import { useNavigate } from 'react-router-dom';
const BlogPreview = require('../assets/BlogPreview.png')

const TemplateCards = ({ isLogged, sites, setSiteId }) => {

    // const navigate = useNavigate();

    const handleChoose = async (siteId) => {
        // navigate(`/sites/${siteId}`);
        const queryString = `siteId=${encodeURIComponent(siteId)}`;
        const newUrl = `/sites?${queryString}`;

        window.location.href = newUrl;
    }


    return (
        <>   
            {isLogged ?
                <div className="mx-auto max-w-7xl px-2">
                    <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
                        <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
                        Getting started
                        </p>
                        <p className="max-w-4xl text-base text-gray-600 md:text-xl">
                        The easiest way to get started is to use one of the templates. 
                        <br></br>All templates include required dependencies and pre-configured settings.
                        </p>
                        <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
                            <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Search Topics"
                            ></input>
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                        {sites.map((site) => (
                            <div key={site.id} className="rounded-md border">
                                <img
                                    src={BlogPreview}
                                    alt="Laptop"
                                    className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                                />
                                <div className="p-4">
                                    <h1 className="inline-flex items-center text-lg font-semibold">Your Site</h1>
                                    <p className="mt-3 text-sm text-gray-600">
                                        Open Site
                                    </p>
                                    <div className="mt-4">
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            #design
                                        </span>
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            #WebTemplate
                                        </span>
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            #layout
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSiteId(site.id);
                                            handleChoose(site.id);

                                        }}
                                        className="mt-4 w-full rounded-sm bg-[#00897b] px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-600 focus-visible:outline active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                                    >
                                        View Site
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* End of Cards */}
                    <div className="w-full border-t border-indigo-500/100">
                        <div className="mt-2 flex items-center justify-between">
                            <div className="hidden md:block">
                                <p>
                                    showing <strong>1</strong> to <strong>10</strong> of <strong>20</strong> results
                                </p>
                            </div>
                            <div className="space-x-2">
                                <button
                                    type="button"
                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    &larr; Previous
                                </button>
                                <button
                                    type="button"
                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Next &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <Error />
            }
        </>
    )
}

export default TemplateCards;

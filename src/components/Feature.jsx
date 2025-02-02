import React, { useState } from 'react';

function Feature() {
    const [showMore, setShowMore] = useState({
        baguio: false,
        ilocos: false,
        anawangin: false,
        sagada: false,
        launion: false,
    });

    const toggleShowMore = (location) => {
        setShowMore({ ...showMore, [location]: !showMore[location] });
    };

    return (
        <div>
            <section id="featured" className="py-4">
                <div className="container">
                    <div className="title-wrap">
                        <span className="sm-title">
                            "Top Destinations: Explore our Recommended Locations"
                        </span>
                        <h2 className="lg-title">Featured places</h2>
                    </div>

                    <div className="featured-row">
                        <div className="featured-item my-2 shadow">
                            <img src="./src/images/F-baguio.jpg" alt="featured place" />
                            <div className="featured-item-content">
                                <span>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Baguio City
                                </span>
                                <div>
                                    <p className="text">
                                        Often called the "Summer Capital of the Philippines," it is
                                        a popular tourist destination for both local and
                                        international visitors seeking to escape the heat of the
                                        lowlands.
                                    </p>
                                    {showMore.baguio && (
                                        <p className="text">
                                            Inclusions
                                            Van transfer
                                            2 nights accommodation
                                            Baguio city tour
                                            Driver
                                            Diesel
                                            Toll gate
                                            Parking fees
                                            Environmental fees
                                            Entrance fees at (
                                            Old diplomat hotel
                                            Minesview)
                                            <br /> <br />
                                            Exclusions
                                            Meals
                                            Activities
                                            Other entrance fees
                                        </p>
                                    )}
                                    <button onClick={() => toggleShowMore('baguio')}>
                                        {showMore.baguio ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="featured-item my-2 shadow">
                            <img src="./src/images/F-ilocos.jpg" alt="featured place" />
                            <div className="featured-item-content">
                                <span>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Ilocos
                                </span>
                                <div>
                                    <p className="text">
                                        Home to a number of stunning natural attractions, such as
                                        the Bangui Wind Farm, which features giant wind turbines
                                        overlooking the sea, and the Kapurpurawan Rock Formation.
                                    </p>
                                    {showMore.ilocos && (
                                        <p className="text">
                                            Some additional information about Ilocos could go here.
                                        </p>
                                    )}
                                    <button onClick={() => toggleShowMore('ilocos')}>
                                        {showMore.ilocos ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="featured-item my-2 shadow">
                            <img src="./src/images/F-anawangin.jpg" alt="featured place" />
                            <div className="featured-item-content">
                                <span>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Anawangin Cove
                                </span>
                                <div>
                                    <p className="text">
                                        It is known for its pristine shoreline, crystal-clear
                                        waters, and scenic landscape of pine trees and volcanic ash.
                                    </p>
                                    {showMore.anawangin && (
                                        <p className="text">
                                            Some additional information             about Anawangin Cove could go here.
                                        </p>
                                    )}
                                    <button onClick={() => toggleShowMore('anawangin')}>
                                        {showMore.anawangin ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="featured-item my-2 shadow">
                            <img src="./src/images/F-sagada.jpg" alt="featured place" />
                            <div className="featured-item-content">
                                <span>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Sagada
                                </span>
                                <div>
                                    <p className="text">
                                        A small town in the Cordillera Mountains, it is known for
                                        its unique culture and stunning natural scenery, such as
                                        its hanging coffins, limestone caves, and rice terraces.
                                    </p>
                                    {showMore.sagada && (
                                        <p className="text">
                                            Some additional information about Sagada could go here.
                                        </p>
                                    )}
                                    <button onClick={() => toggleShowMore('sagada')}>
                                        {showMore.sagada ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="featured-item my-2 shadow">
                            <img src="./src/images/F-launion.jpg" alt="featured place" />
                            <div className="featured-item-content">
                                <span>
                                    <i className="fas fa-map-marker-alt"></i>
                                    La Union
                                </span>
                                <div>
                                    <p className="text">
                                        A popular surfing destination, it offers not only world-class
                                        waves but also a range of other activities and attractions,
                                        such as waterfalls, vineyards, and historical landmarks.
                                    </p>
                                    {showMore.launion && (
                                        <p className="text">
                                            Some additional information about La Union could go here.
                                        </p>
                                    )}
                                    <button onClick={() => toggleShowMore('launion')}>
                                        {showMore.launion ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Feature;

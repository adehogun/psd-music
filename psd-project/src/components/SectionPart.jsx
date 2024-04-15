import React from 'react'

function SectionPart() {


  return (
    <section className="bg-blue-100 p-6">
 <div className="grid gap-10">
          
          <div className='flex justify-center items-center'>
            <img className="h-auto p-10 w-20 rounded-lg" src="https://media.gettyimages.com/id/1155047920/de/foto/band-sitzt-auf-sofa-und-spielt-instrumente.jpg?s=612x612&w=gi&k=20&c=GiTRvwIOG6pUUvc1iTZyBlUs1r192HjU6eeEiz8ZVHs=" alt="Featured Image" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img className="h-auto w-23 p-4 rounded-lg" src="https://media.gettyimages.com/id/1155068140/de/foto/musik-ist-liebe.jpg?s=612x612&w=0&k=20&c=emI09TNfHQS3LWSmhvgK8y2m4sJXPfBYXoYQSlZy7ms=" alt="Image 1" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://media.gettyimages.com/id/1311925315/de/foto/young-man-portrait-art-image.jpg?s=612x612&w=0&k=20&c=xnJ0Ig8t1lPBtup2ajEgINZmKKWupoQq9EyLdXO8Evs=" alt="Image 2" />
            </div>
            <div>
              <img className="h-auto h-25 rounded-lg" src="https://media.gettyimages.com/id/171580177/de/foto/typisch-spanische-szene-flamenco-t%C3%A4nzerin-und-gitarre-spieler.jpg?s=612x612&w=0&k=20&c=hd-_kcK7vTpjCF0pimpZu8_0l8DzDSKh90fUc22mO-c=" alt="Image 3" />
            </div>
            <div>
              <img className="h-auto  w-23  rounded-lg" src="https://media.gettyimages.com/id/503848895/de/foto/women-listening-to-mp3-player-on-city-street.jpg?s=612x612&w=0&k=20&c=ahbu6FRT9VTomF3s7A4knK2zvYMb4yoYzrPi7SKXY9I=" alt="Image 4" />
            </div>
            <div>
              <img className="h-auto w-23 p-4 rounded-lg" src="https://media.gettyimages.com/id/1405446353/de/foto/drei-musiker-im-blauen-kleid-und-ein-musiker-im-schwarzen-anzug-im-antiken-theater.jpg?s=612x612&w=0&k=20&c=LGtYbsFp5MU_dAfaaYNBgy_YTKWAqtMlyXe8_8WGAGc=" alt="Image 5" />
            </div>
          </div>
          <div>
          <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Upgrade Now</button>
          </div>

          <aside className="p-1 bg-gray-100 rounded-lg shadow-md">
  <h2 className="text-lg font-bold mb-10"> Why is Deezify Best Music Platform</h2>
  <p className="mb-5">At our musical stream platform, we believe in the transformative power of music to connect, inspire, and uplift. We believe that every beat, melody, and lyric has the potential to create a profound impact on individuals and communities alike. Our platform is founded on the belief that music transcends boundaries, bringing people together across cultures and backgrounds.</p>
  <span className="text-sm italic text-gray-500">By John Doe</span>
</aside>


        </div>
       
    </section>
    

        
      );
    }
    
    export default SectionPart;
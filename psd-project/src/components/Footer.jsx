import React from "react";

function Footer() {
  return (
    <footer className="grid gap-8 p-9"> 
      {/* First row */}
      <div className="flex justify-between p-12">
        {/* About Us */}
        <div className="p-1 box bg-transparent p-5 ">
          <h6 className="text-lg font-semibold">About Us</h6>
          <ul>
            <li><a href="/blog" className="">Blog</a></li>
            <li><a href="/about" >About Us</a></li>
            <li><a href="/contact" >Contact Us</a></li>
            <li><a href="/contact" >About Ad</a></li>
            <li><a href="/contact" >Accessibility</a></li>
            <li><a href="/contact" >Safety & Privacy Center
</a></li>
          </ul>
        </div>
        {/* Address */}
        <div className="box bg-transparent p-4">
          <h6 className="text-lg font-semibold">Address</h6>
          <p className="text-sm">Sesam str. 4</p>
          <p className="text-sm">Berlin, 21345</p>
        </div>
        {/* Contact */}
        <div className="box bg-transparent p-4 font-semibold">
          <h6 className="text-lg ">Contact</h6>
          <p className="text-sm">Phone: 012345678</p>
          <p className="text-sm">Email: contact@deetify.com</p>
        </div>
        {/* Follow Us */}
        <div className="box bg-transparent p-4">
          <h6 className="text-lg mb-2 font-semibold">Follow Us</h6>
          <div className="flex space-x-4">
            <img src="https://img.icons8.com/?size=64&id=119026&format=png" alt="Instagram" className="w-6 h-6" />
            <img src="https://img.icons8.com/?size=48&id=13912&format=png" alt="Facebook" className="w-6 h-6" />
            <img src="https://img.icons8.com/?size=50&id=439&format=png" alt="Google+" className="w-6 h-6" />
          </div>
        </div>
        
      </div>
      {/* Second row */}
      <hr />
      <div className="box bg-transparent text-center py-4 mt-4 ">
        <p className="text-sm ">© CrossOver Group 3, Adehogun, Patrick,  Adri</p>
      </div>
    </footer>
  );
}

export default Footer;

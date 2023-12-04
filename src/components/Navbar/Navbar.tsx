/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  WalletIcon,
  HeartIcon,
  ShoppingCartIcon,
  BellIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Catlog", href: "#" },
    { name: "BuyDesk", href: "#" },
    { name: "History", href: "#" },
    { name: "Dashboard", href: "#" },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
     

      <header className="relative bg-white">
        <nav aria-label="Top" className=" px-2 border-b border-gray-200">
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 "
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-0 flex lg:ml-0">
                <a href="#">
                  <img
                    className="h-8 w-auto"
                    src="https://simfoni.com/wp-content/uploads/2021/03/Artboard-1-3.png"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium font-semibold text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex  lg:items-center lg:justify-end lg:space-x-2">
                  <div className="border border-gray-300 rounded-lg ">
                    <div className="flex juctify-between items-center">
                      <select
                        className="border-r h-9 rounded-l-lg border-gray-300 "
                      >
                        <option value="">PO</option>
                      </select>

                      <input type="text" className="pl-2" placeholder="Search" />
                      <div className="text-gray-400">
                        <MagnifyingGlassIcon className="w-7 h-7  px-1" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <button className="  border-2 py-1 px-2 rounded-lg border-teal-600  font-bold text-teal-600">Help</button>
                  </div>
                </div>
                 {/* side icons */}
                <div className=" flex justify-end space-x-3 lg:flex pl-10 text-gray-500 lg:items-center lg:justify-end lg:space-x-3">
                  
                <WalletIcon className="w-7"/>
                <HeartIcon className="w-7"/>
                <ShoppingCartIcon className="w-7"/>
                <BellIcon className="w-7"/>
                

                </div>
                <div className=" flex justify-end items-center space-x-1 lg:flex pl-10 pr-3  lg:items-center lg:justify-end lg:space-x-1">
                  
                 <img className="w-7 rounded-2xl" src="https://firebasestorage.googleapis.com/v0/b/r-instagram.appspot.com/o/users%2F1697438701690diego-hernandez-MSepzbKFz10-unsplash.jpg?alt=media&token=732a1746-4428-42cb-9c5f-ab16aeef34fb" alt="" />
                 <p className=" hidden lg:block text-gray-700 text-sm font-semibold">Riyaz Ahmad</p>
                 <ChevronDownIcon className="h-4 font-bold"/>

                </div>

               
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

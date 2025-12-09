"use client";
import { Link } from "react-router-dom";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Category",
      featured: [
        {
          name: "New Arrivals",
          href: "/new-arrivals",
          imageSrc: "/src/assets/images.jpeg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Most selling",
          href: "/most-selling",
          imageSrc:
            "/src/assets/1.The_Rich_Heritage_Behind_Rajasthani_Saree_Draping_480x480.webp",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Collection",
          items: [
            { name: "Tops", href: "/tops" },
            { name: "Banarasi", href: "/banarasi" },
            { name: "Kanjeevaram", href: "/kanjeevaram" },
            { name: "Paithani", href: "/paithani" },
            { name: "Bandhani", href: "/bandhani" },
          ],
        },
        {
          id: "accessories",
          name: "FabriQ",
          items: [{ name: "Watches", href: "/watches" }],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "/company" },
    { name: "Stores", href: "/stores" },
  ],
};

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-rose-700 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pt-10 pb-8"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-lg">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <Link
                            to={item.href}
                            className="mt-6 block font-medium text-gray-900"
                            onClick={() => setOpen(false)}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </Link>
                          <p className="mt-1">Shop now</p>
                        </div>
                      ))}
                    </div>

                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul className="mt-6 flex flex-col space-y-6">
                          {section.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className="-m-2 block p-2 text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name}>
                  <Link
                    to={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                    onClick={() => setOpen(false)}
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop Navbar */}
      <header className="relative bg-rose-700">
        <nav className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <Bars3Icon className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <img
                    alt="logo"
                    src="/src/assets/ChatGPT Image Nov 1, 2025, 06_53_16 PM.png"
                    className="h-20 w-auto"
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <PopoverButton className="text-lg font-medium">
                        {category.name}
                      </PopoverButton>

                      <PopoverPanel className="absolute inset-x-0 top-full z-20 w-full bg-white">
                        <div className="mx-auto max-w-7xl px-8 py-12 grid grid-cols-2 gap-10">

                          <div className="grid grid-cols-2 gap-6">
                            {category.featured.map((item) => (
                              <div key={item.name}>
                                <img
                                  src={item.imageSrc}
                                  className="rounded-lg"
                                />
                                <Link to={item.href} className="block mt-2 font-semibold">
                                  {item.name}
                                </Link>
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-3 gap-6">
                            {category.sections.map((section) => (
                              <div key={section.name}>
                                <p className="font-semibold">{section.name}</p>
                                <ul className="mt-3 space-y-2">
                                  {section.items.map((item) => (
                                    <li key={item.name}>
                                      <Link to={item.href}>
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-lg font-medium"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </PopoverGroup>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

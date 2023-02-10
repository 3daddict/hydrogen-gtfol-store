import {useIsHomePath} from '~/lib/utils';
import {
  Drawer,
  useDrawer,
  Text,
  Input,
  IconAccount,
  IconBag,
  IconSearch,
  Heading,
  IconMenu,
  IconCaret,
  Section,
  CountrySelector,
  Cart,
  CartLoading,
  Link,
} from '~/components';
import {useParams, Form, Await, useMatches} from '@remix-run/react';
import {Disclosure} from '@headlessui/react';
import {Suspense, useEffect, useMemo, Fragment, useState} from 'react';
import {useIsHydrated} from '~/hooks/useIsHydrated';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import {Dialog, Popover, Tab, Transition} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';

const mainMenu = {
  menu: {
    id: 218800619809,
    title: 'Main menu',
    handle: 'main-menu',
    created_at: '2023-02-08T22:17:01-05:00',
    updated_at: '2023-02-09T21:11:06-05:00',
    items: [
      {
        id: 511778062625,
        title: 'Men',
        subject: 'men',
        subject_id: 435523453217,
        subject_params: null,
        type: 'collection',
        items: [
          {
            id: 512005964065,
            title: 'Tops',
            subject: '#',
            subject_id: null,
            subject_params: null,
            type: 'http',
            items: [
              {
                id: 512007176481,
                title: 'Tanks',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512007209249,
                title: 'Short Sleeve Tees',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512007242017,
                title: 'Polos \u0026 Button-Downs',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512007274785,
                title: 'Long Sleeve Tops',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512007307553,
                title: 'Hoodies \u0026 Jackets',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
            ],
          },
          {
            id: 512005996833,
            title: 'Bottoms',
            subject: '#',
            subject_id: null,
            subject_params: null,
            type: 'http',
            items: [
              {
                id: 512007340321,
                title: 'Shorts',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512007373089,
                title: 'Boardshorts',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512007405857,
                title: 'Pants',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512007438625,
                title: 'Joggers',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
            ],
          },
          {
            id: 511783207201,
            title: 'Accessories',
            subject: '#',
            subject_id: null,
            subject_params: null,
            type: 'http',
            items: [
              {
                id: 512007471393,
                title: 'Headwear',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512007504161,
                title: 'Socks \u0026 Boxers',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512007536929,
                title: 'Bags \u0026 Travel',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512007569697,
                title: 'Digital Gift Card',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
            ],
          },
        ],
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt:
              'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Mens Essentials',
            href: '#',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
      },
      {
        id: 511778095393,
        title: 'Women',
        subject: 'women',
        subject_id: 435523485985,
        subject_params: null,
        type: 'collection',
        items: [
          {
            id: 512006029601,
            title: 'Tops',
            subject: '#',
            subject_id: null,
            subject_params: null,
            type: 'http',
            items: [
              {
                id: 512008454433,
                title: 'Sports Bras',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008487201,
                title: 'Tanks',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008519969,
                title: 'Short Sleeve Tops',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008552737,
                title: 'Long Sleeve Tops',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008585505,
                title: 'Hoodies \u0026 Jackets',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
            ],
          },
          {
            id: 512006062369,
            title: 'Bottoms',
            subject: '#',
            subject_id: null,
            subject_params: null,
            type: 'http',
            items: [
              {
                id: 512008618273,
                title: 'Shorts \u0026 Skirts',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008651041,
                title: 'Leggings',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008683809,
                title: 'Joggers',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008716577,
                title: 'Pants',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008749345,
                title: 'Dresses \u0026 Jumpsuits',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
            ],
          },
          {
            id: 512006095137,
            title: 'Accessories',
            subject: '#',
            subject_id: null,
            subject_params: null,
            type: 'http',
            items: [
              {
                id: 512008782113,
                title: 'Headwear',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008814881,
                title: 'Yoga Accessories',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008847649,
                title: 'Socks',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008880417,
                title: 'Bags + Travel',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
              {
                id: 512008913185,
                title: 'Digital Gift Card',
                subject: '#',
                subject_id: null,
                subject_params: null,
                type: 'http',
                items: [],
              },
            ],
          },
        ],
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt:
              'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Womens Essentials',
            href: '#',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt:
              'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
      },
    ],
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Layout({children, layout}) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Header
          title={layout?.shop.name ?? 'Hydrogen'}
          menu={layout?.headerMenu}
        />
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      <Footer menu={layout?.footerMenu} />
    </>
  );
}

function Header({title, menu}) {
  const isHome = useIsHomePath();

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers('ADD_TO_CART');

  // toggle cart drawer when adding to cart
  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      <ResponsiveHeader
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={openCart}
      />
    </>
  );
}

function CartDrawer({isOpen, onClose}) {
  const [root] = useMatches();

  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div className="grid">
        <Suspense fallback={<CartLoading />}>
          <Await resolve={root.data?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}

export function MenuDrawer({open, setOpen}) {
  return (
    <div className="grid">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="flex px-4 -mb-px space-x-8">
                      {mainMenu.menu.items.map((gender) => (
                        <Tab
                          key={gender.id}
                          className={({selected}) =>
                            classNames(
                              selected
                                ? 'text-gray-600 border-gray-600'
                                : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium',
                            )
                          }
                        >
                          {gender.title}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {mainMenu.menu.items.map((gender) => (
                      <Tab.Panel
                        key={gender.id}
                        className="px-4 pt-10 pb-8 space-y-6"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {gender.featured.map((item) => (
                            <div
                              key={item.name}
                              className="relative text-sm group"
                            >
                              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center w-40 h-40"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="block mt-6 font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {gender.items.map((category) => (
                          <div key={category.id}>
                            <p
                              id={`${gender.id}-${category.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {category.title}
                            </p>
                            <ul
                              aria-labelledby={`${gender.id}-${category.id}-heading-mobile`}
                              className="flex flex-col mt-6 space-y-4"
                            >
                              {category.items.map((item) => (
                                <li key={item.title} className="flow-root">
                                  <a
                                    href={item.subject}
                                    className="block p-2 -m-2 text-gray-500"
                                  >
                                    {item.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  <div className="flow-root">
                    <Link
                      to="/account/login"
                      prefetch="intent"
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      to="/account/register"
                      prefetch="intent"
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

function ResponsiveHeader({isHome, openCart, title}) {
  const params = useParams();

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white">
        {/* MOBILE FLYOUT DRAWER */}
        <MenuDrawer open={open} setOpen={setOpen} />
        {/* DESKTOP MENU */}
        <header className="relative z-20 bg-white ">
          {/* ANNOUNCEMENT BAR */}
          <p className="flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-black sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>
          {/* NAV BAR */}
          <nav
            aria-label="Top"
            className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex items-center h-16">
                <button
                  type="button"
                  className="p-2 text-gray-400 bg-white rounded-md lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                </button>

                {/* STORE NAME */}
                <div className="flex ml-2 lg:ml-0">
                  <Link
                    className="text-2xl font-bold text-black uppercase"
                    to="/"
                    prefetch="intent"
                  >
                    {title}
                  </Link>
                </div>

                {/* MAIN MENU | GENDER */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {mainMenu.menu.items.map((gender) => (
                      <Popover key={gender.id} className="flex">
                        {({open}) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? 'border-gray-600 text-gray-600'
                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                  'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                                )}
                              >
                                {gender.title}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 text-sm text-gray-500 top-full">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div
                                  className="absolute inset-0 bg-white shadow top-1/2"
                                  aria-hidden="true"
                                />

                                <div className="relative bg-white">
                                  <div className="px-8 mx-auto max-w-7xl">
                                    <div className="grid grid-cols-2 py-16 gap-y-10 gap-x-8">
                                      {/* RIGHT SIDE IMAGES */}
                                      <div className="grid grid-cols-2 col-start-2 gap-x-8">
                                        {gender.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="relative text-base group sm:text-sm"
                                          >
                                            <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-cover object-center w-full h-64"
                                              />
                                            </div>
                                            <Link
                                              to={item.href}
                                              prefetch="intent"
                                              className="block mt-6 font-medium text-gray-900"
                                            >
                                              <span
                                                className="absolute inset-0 z-10"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </Link>
                                            <p
                                              aria-hidden="true"
                                              className="mt-1"
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                      {/* LEFT SIDE NAV LINKS */}
                                      <div className="grid grid-cols-3 row-start-1 text-sm gap-y-4 gap-x-8">
                                        {gender.items.map((category) => (
                                          <div key={category.id}>
                                            <p
                                              id={`${category.title}-heading`}
                                              className="text-xl font-medium tracking-wider text-gray-900"
                                            >
                                              {category.title}
                                            </p>
                                            <ul
                                              aria-labelledby={`${category.title}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {category &&
                                                category.items.map((item) => (
                                                  <li
                                                    key={item.id}
                                                    className="flex"
                                                  >
                                                    <Link
                                                      to={item.subject}
                                                      prefetch="intent"
                                                      className="transition-all duration-200 ease-in-out hover:text-gray-800 hover:underline"
                                                    >
                                                      {item.title}
                                                    </Link>
                                                  </li>
                                                ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}
                  </div>
                </Popover.Group>

                <div className="flex items-center ml-auto">
                  {/* Search */}
                  <div className="flex">
                    <div href="#" className="text-gray-500 hover:text-gray-600">
                      <span className="sr-only">Search</span>
                      <Form
                        method="get"
                        action={
                          params.lang ? `/${params.lang}/search` : '/search'
                        }
                        className="flex items-center gap-2"
                      >
                        <div className="hidden md:flex">
                          <label htmlFor="email" className="sr-only">
                            Email
                          </label>
                          <input
                            type="search"
                            name="q"
                            id="search"
                            className="block w-full bg-gray-100 border-gray-300 rounded-full shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                            placeholder="Search"
                          />
                        </div>
                        <button
                          type="submit"
                          className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
                        >
                          <IconSearch />
                        </button>
                      </Form>
                    </div>
                  </div>

                  {/* Account */}
                  <div className="flex">
                    <Link
                      to="/account"
                      className="relative flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-500 focus:ring-primary/5"
                    >
                      <IconAccount />
                    </Link>
                  </div>

                  {/* Cart */}
                  <div className="flow-root">
                    <CartCount
                      className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                      isHome={isHome}
                      openCart={openCart}
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

function CartCount({isHome, openCart}) {
  const [root] = useMatches();

  return (
    <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
      <Await resolve={root.data?.cart}>
        {(cart) => (
          <Badge
            dark={isHome}
            openCart={openCart}
            count={cart?.totalQuantity || 0}
          />
        )}
      </Await>
    </Suspense>
  );
}

function Badge({openCart, dark, count}) {
  const isHydrated = useIsHydrated();

  const BadgeCounter = useMemo(
    () => (
      <>
        <IconBag className="text-gray-400 group-hover:text-gray-500" />
        <div
          className={`${
            dark
              ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
              : 'text-contrast bg-primary'
          } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px !bg-gray-200`}
        >
          <span>{count || 0}</span>
        </div>
      </>
    ),
    [count, dark],
  );

  return isHydrated ? (
    <button
      onClick={openCart}
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </button>
  ) : (
    <Link
      to="/cart"
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </Link>
  );
}

function Footer({menu}) {
  const isHome = useIsHomePath();
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    <Section
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      className={`grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
        bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
    >
      <FooterMenu menu={menu} />
      <CountrySelector />
      <div
        className={`self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
      >
        &copy; {new Date().getFullYear()} / Shopify, Inc. Hydrogen is an MIT
        Licensed Open Source project.
      </div>
    </Section>
  );
}

const FooterLink = ({item}) => {
  if (item.to.startsWith('http')) {
    return (
      <a href={item.to} target={item.target} rel="noopener noreferrer">
        {item.title}
      </a>
    );
  }

  return (
    <Link to={item.to} target={item.target} prefetch="intent">
      {item.title}
    </Link>
  );
};

function FooterMenu({menu}) {
  const styles = {
    section: 'grid gap-4',
    nav: 'grid gap-2 pb-6',
  };

  return (
    <>
      {(menu?.items || []).map((item) => (
        <section key={item.id} className={styles.section}>
          <Disclosure>
            {({open}) => (
              <>
                <Disclosure.Button className="text-left md:cursor-default">
                  <Heading className="flex justify-between" size="lead" as="h3">
                    {item.title}
                    {item?.items?.length > 0 && (
                      <span className="md:hidden">
                        <IconCaret direction={open ? 'up' : 'down'} />
                      </span>
                    )}
                  </Heading>
                </Disclosure.Button>
                {item?.items?.length > 0 ? (
                  <div
                    className={`${
                      open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                    } overflow-hidden transition-all duration-300`}
                  >
                    <Suspense data-comment="This suspense fixes a hydration bug in Disclosure.Panel with static prop">
                      <Disclosure.Panel static>
                        <nav className={styles.nav}>
                          {item.items.map((subItem) => (
                            <FooterLink key={subItem.id} item={subItem} />
                          ))}
                        </nav>
                      </Disclosure.Panel>
                    </Suspense>
                  </div>
                ) : null}
              </>
            )}
          </Disclosure>
        </section>
      ))}
    </>
  );
}
